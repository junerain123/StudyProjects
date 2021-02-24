package homework;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import static java.lang.Math.sqrt;

public class BasicGrammar {
    // 编写Java程序，从键盘上输入10个数，赋值给一个长度为10的数组，利用冒泡排序法为数组排序。
    public static void inputTenNumbersToArrary()
    {
        int[] a = new int[10];
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入10个数");
        for(int i = 0; i<a.length; i++){
            System.out.println("请输入第"+(i+1)+"个数");
            a[i]=sc.nextInt();
        }
        for(int i=0; i<a.length-1;i++){
            for(int j=0; j<a.length-1-i;j++){
                if(a[j]>a[j+1]){
                    int temp=a[j];
                    a[j]=a[j+1];
                    a[j+1]=temp;
                }
            }
        }
        System.out.println("排序后数列为");
        for(int i : a){
            System.out.print(i+"\t");
        }
    }

    // 判断101-200之间有多少个素数，并输出所有素数。
    public static void judeAllPrimenumbersFromRange()
    {
        System.out.println("请输入一个范围取质数，例如100-200：");
        Scanner sc = new Scanner(System.in);
        String str_rangeInput = sc.nextLine();
        String[] array_startNumber = str_rangeInput.split("-", -1);
        int int_startNumber = Integer.parseInt(array_startNumber[0]);
        int int_endNumber = Integer.parseInt(array_startNumber[1]);
        List<Integer> list_primeNumbers = new ArrayList<>();
        if ( (int_startNumber>int_endNumber) || int_startNumber<0 )
        {
            System.out.println("你输入的范围有问题！");
        }
        else if (int_endNumber<3)
        {
            System.out.println("该范围没有质数！");
        }
        else
        {
            for(int i = int_startNumber; i < int_endNumber+1; i++)
            {
                for(int j=2; j<sqrt(int_startNumber);j++)
                {
                    if (i%j==0)
                    {
                        break;
                    }
                    if((j+1)>sqrt(int_startNumber))
                    {
                        list_primeNumbers.add(i);
                    }
                }
            }
            System.out.println(list_primeNumbers.toString());
        }
    }
}
