package homework;

import java.io.*;
import java.nio.charset.StandardCharsets;

public class IOStreamTest {
    public static void writeTxt() throws IOException {

        File f = new File("a.txt");
        FileOutputStream fop = new FileOutputStream(f);
        // 构建FileOutputStream对象,文件不存在会自动新建
        OutputStreamWriter writer = new OutputStreamWriter(fop, StandardCharsets.UTF_8);
        // 构建OutputStreamWriter对象,参数可以指定编码,默认为操作系统默认编码,windows上是gbk
        writer.append("中文输入");
        // 写入到缓冲区
        writer.append("\r\n");
        // 换行
        writer.append("English");
        // 刷新缓存冲,写入到文件,如果下面已经没有写入的内容了,直接close也会写入
        writer.close();
        // 关闭写入流,同时会把缓冲区内容写入文件,所以上面的注释掉
        fop.close();
        // 关闭输出流,释放系统资源

        FileInputStream fip = new FileInputStream(f);
        // 构建FileInputStream对象
        InputStreamReader reader = new InputStreamReader(fip, StandardCharsets.UTF_8);
        // 构建InputStreamReader对象,编码与写入相同
        StringBuilder sb = new StringBuilder();
        while (reader.ready()) {
            sb.append((char) reader.read());
            // 转成char加到StringBuffer对象中
        }
        System.out.println(sb.toString());
        reader.close();
        // 关闭读取流
        fip.close();
        // 关闭输入流,释放系统资源
    }

    public static void mkdirsTest()
    {
        // bin在D盘根目录，当前project也在D盘
        String dirname = "/test/bin";
        File d = new File(dirname);
        // 创建 目录
        if(d.mkdirs())
        {
            System.out.println("成功创建！");
        }
    }

    //判断
    //String dirname = "/tmp";
    //File f1 = new File(dirname);
    //if (f1.isDirectory())
    //deleteFolder(f1)
    //String []filename=f.list();//以字符串的形式，先列出当前目录下所有文件看一下（有什么类型的文件）

    public static void writeTxtOld()
    {
        try {
            byte[] bWrite = {11, 21, 3, 40, 5 };
            OutputStream os = new FileOutputStream("./out/test.txt");
            for (byte b : bWrite) {
                os.write(b);
            }
            os.close();
            InputStream is = new FileInputStream("./out/test.txt");
            int size = is.available();
            for (int x = 0; x < size; ++x) {
                System.out.print((byte) is.read() + " ");    //强转为byte类型就好了
            }
            is.close();
        } catch (IOException e) {
            System.out.print("Exception");
        }
    }
}
