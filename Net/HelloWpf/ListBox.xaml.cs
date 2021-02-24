using System;
using System.Collections.Generic;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace HelloWpf
{
    /// <summary>
    /// ListBox.xaml 的交互逻辑
    /// </summary>
    public partial class ListBox : Window
    {
        public ListBox()
        {
            InitializeComponent();
            List<Color> ColorList = new List<Color>
            {
                new Color() { Code = "#FF8C00" },
                new Color() { Code = "#FF7F50" },
                new Color() { Code = "#FF6EB4" },
                new Color() { Code = "#FF4500" },
                new Color() { Code = "#FF3030" },
                new Color() { Code = "#CD5B45" }
            };

            cob.ItemsSource = ColorList;
            lib.ItemsSource = ColorList;
        }

        private void cob_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {

        }
    }

    public class Color
    {
        public string Code { get; set; }
    }
}
