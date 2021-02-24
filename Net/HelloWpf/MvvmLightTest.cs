using GalaSoft.MvvmLight;
using GalaSoft.MvvmLight.Command;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using System.Threading.Tasks;

namespace HelloWpf
{
    class MvvmLightTest:ViewModelBase
    {
        public MvvmLightTest()
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
                RaisePropertyChanged();
            }
        }

        public RelayCommand SaveCommand { get; set; }

    }
}
