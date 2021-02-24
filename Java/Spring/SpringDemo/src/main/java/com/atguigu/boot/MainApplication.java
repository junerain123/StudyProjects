package com.atguigu.boot;

import ch.qos.logback.core.db.DBHelper;
import com.atguigu.boot.bean.Pet;
import com.atguigu.boot.bean.User;
import com.atguigu.boot.config.MyConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ImportResource;


/**
 * 主程序类
 *
 * @SpringBootApplication：这是一个SpringBoot应用
 */
//@SpringBootApplication     // 这一个约等于下面三个
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan("com.atguigu.boot")      // 指定扫描哪些目录
public class MainApplication {
    public static void main(String[] args) {
        // 1、IOC容器
        ConfigurableApplicationContext run = SpringApplication.run(MainApplication.class, args);

        // 2、显示所引入的包
        final String[] beanDefinitionNames = run.getBeanDefinitionNames();
        for (String name : beanDefinitionNames) {
            System.out.println(name);
        }

        // 3、从容器中获取组件
//        Pet tom01 = run.getBean("tom", Pet.class);
//        Pet tom02 = run.getBean("tom", Pet.class);
//        System.out.println("组件tom01和tom02是否相等："+(tom01 == tom02));    // true

        //4、com.atguigu.boot.config.MyConfig$$EnhancerBySpringCGLIB$$51f1e1ca@1654a892
//        MyConfig bean = run.getBean(MyConfig.class);
//        System.out.println(bean);

        //如果@Configuration(proxyBeanMethods = true)代理对象调用方法。SpringBoot总会检查这个组件是否在容器中有。
        //保持组件单实例，如果“有”就不会新创
//        User user = bean.user01();
//        User user1 = bean.user01();
//        System.out.println(user == user1);    // true

        // user的Pet是不是依赖于Pet生成的，是不是同一个，这取决于proxyBeanMethods = 的设定
//        User user01 = run.getBean("user01", User.class);
//        Pet tom = run.getBean("tom", Pet.class);
//        System.out.println("用户的Pet是不是容器中的那一个Pet："+(user01.getPet() == tom));

        // 5、获取import的组件
//        System.out.println("5、获取import的组件");
//        String[] beanNamesForType = run.getBeanNamesForType(User.class);
//        for (String beanName : beanNamesForType) {
//            System.out.println(beanName);
//        }
//
//        DBHelper beanDBHelper = run.getBean(DBHelper.class);
//        System.out.println(beanDBHelper);
//
//        boolean tom = run.containsBean("tom");
//        System.out.println("容器中Tom组件："+tom);
//
//        boolean user01 = run.containsBean("user01");
//        System.out.println("容器中user01组件："+user01);
//
//        boolean tom22 = run.containsBean("tom22");
//        System.out.println("容器中tom22组件："+tom22);

//        6、从beans.xml中配置的组件被成功注入
        boolean haha = run.containsBean("haha");
        boolean hehe = run.containsBean("hehe");
        System.out.println("haha："+haha);//true
        System.out.println("hehe："+hehe);//true
    }
}
