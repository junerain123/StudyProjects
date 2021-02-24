using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.ComponentModel;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace HelloWpf
{
    class MainViewModel:INotifyPropertyChanged
    {
        public MainViewModel()
        {
            Name = "王二麻子";
            Task.Run(async () =>
            {
                await Task.Delay(3000);
                Name = "李四";
            });
        }
        private string name;

        public string Name
        {
            get { return name; }
            set
            {
                name = value;
                OnPropertyChanged("Name");
            }
        }

        public event PropertyChangedEventHandler PropertyChanged;

        protected void OnPropertyChanged(string properName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(properName));
        }
    }
}
