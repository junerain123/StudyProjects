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
    /// BangDing.xaml 的交互逻辑
    /// </summary>
    public partial class BangDing : Window
    {
        public BangDing()
        {
            InitializeComponent();
            secTxt.DataContext = new Person { Name = "张三" };
        }

        public class Person
        {
            public string Name { get; set; }
        }
    }
}
