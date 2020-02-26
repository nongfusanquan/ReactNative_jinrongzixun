## 工程介绍 

该项目是有ReactNative开发的，主要是为了练习一下React,ReactNative项目搭建,Es6语法，flex布局，css语法，js语法，fetch请求网络数据等等。

主要实现了路由的跳转，路由跳转传参，fetch请求网络接口，json数据绑定，箭头函数,第三库的使用，项目还有好多功能和知识点没有涉及，以后再慢慢补充

本人是做Android开发的，闲暇时候学习前端技术，扩充自己前端的知识，

接口有的是用的自己抓取的

还有干货集中营的API ：http://gank.io/api

## 用到的第三库库有：

路由管理： react-native-router-flux  地址：https://github.com/aksonov/react-native-router-flux

图片轮播：react-native-swiper    地址：https://github.com/leecade/react-native-swiper

选项卡切换: react-native-tab-view  地址：https://github.com/react-native-community/react-native-tab-view

图库选择：react-native-image-picker 地址：https://github.com/react-native-community/react-native-image-picker

项目截图：

<img src="https://github.com/nongfusanquan/ReactNative_jinrongzixun/blob/master/images/jinrongzixun.png" style="zoom: 25%;" />

apk下载：
<img src="https://github.com/nongfusanquan/ReactNative_jinrongzixun/blob/master/images/erweima.png" />

https://raw.githubusercontent.com/nongfusanquan/ReactNative_jinrongzixun/master/jrzx.apk

遇到的坑：

1.npm 容易删除包，所以推荐使用yarn  add
2.react-native  start 启动nodejs服务器
3.按完新插件或者删除新插件，要重新运行一下，那个node的服务器会停止运行,
4.删除插件后，运行不起来要 删除node_moudles,然后重新安装插件 npm i
5.  React-Native中如果开着js远程调试，就会接口可能调用不通,会出现跨域问题，接口调用不通，所以还是用console.warn打印日志，在黑屏node上看日志消息
6.枚举类型，在style中就是写字符串
7.导航加路由  https://reactnavigation.org/docs/zh-Hans/tab-based-navigation.html
8.render 里面可以用小括号包起来，要不就可能报错 什么都没有返回
9.组建中写大括号就代表要写js代码了，那些this.方法，this.变量啥的就可以向上整了
10.三元运算符，是经常用的，而且判断为空啥的，直接就是 写，声明未赋值就是undefined
11.web的圆角图形是，borderradius为正方形的一半就好了
12.等等

