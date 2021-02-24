package homework;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Regular {
    // 学习正则表达式
    public static void learnRegular()
    {
        /////////////////////////////////////////////////
        // String content = "I am noob from runoob.com";
        // String pattern = ".*runoob.*";
        // boolean isMatch = Pattern.matches(pattern, content);
        // System.out.println("字符串是否包含" + isMatch);
        /////////////////////////////////////////////////

        String line = "This order was placed for QT3000! ok?";
        String pattern = "(\\D*)(\\d+)(.*)";
        // 创建 Pattern 对象
        Pattern r = Pattern.compile(pattern);
        // 创建 matcher 对象
        Matcher m = r.matcher(line);
        if (m.find()) // booleon find 接下来是否还能匹配到结果
        {
            System.out.println("Found value: " + m.group(0));
            System.out.println("Found value: " + m.group(1));
            System.out.println("Found value: " + m.group(2));
            System.out.println("Found value: " + m.group(3));
        }else
        {
            System.out.println("NO MATCH");
        }
    }
}
