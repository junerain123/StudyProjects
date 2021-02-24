package homework;

public class Parameter {
    // JDK 1.5 开始，Java支持传递同类型的可变参数给一个方法。
    // 在方法声明中，在指定参数类型后加一个省略号(...) 。
    // 一个方法中只能指定一个可变参数，它必须是方法的最后一个参数。任何普通的参数必须在它之前声明。
    // 。对于可变参数，编译器会将其转型为一个数组，故在函数内部，可变参数名即可看作数组名。
    // 输入一些 double 找最大值
    public static void printMax( double... numbers)
    {
        if (numbers.length == 0) {
            System.out.println("No argument passed");
            return;
        }

        double result = numbers[0];

        for (int i = 1; i <  numbers.length; i++){
            if (numbers[i] >  result) {
                result = numbers[i];
            }
        }
        System.out.println("The max value is " + result);
    }

    //void function(String... args);
    //void function(String args1,String args2);
    //function("Wallen","John");
    //优先匹配固定参数的方法。

}
