---
layout: wiki
title: Cleanflight的配置
---

# {{ page.title }}

## 在ubuntu下下载cleanflight固件

~~~
$ git clone git@github.com:cleanflight/cleanflight.git
~~~

![](../assets/img/cleanflight_001.png)

交叉编译链的安装

~~~
$ sudo apt-get remove binutils-arm-none-eabi gcc-arm-none-eabi
$ sudo add-apt-repository ppa:terry.guo/gcc-arm-embedded
$ sudo apt-get update
~~~

Ubuntu 14.10:

~~~
$ sudo apt-get install gcc-arm-none-eabi=4.9.3.2014q4-0utopic12
~~~

Ubuntu 14.04:

~~~
$ sudo apt-get install gcc-arm-none-eabi=4.9.3.2014q4-0trusty12
~~~

Ubuntu 12.04:

~~~
$ sudo apt-get install gcc-arm-none-eabi=4.9.3.2014q4-0precise12
~~~

如果安装失败，请使用第二种方法：

[点击链接](http://ppa.launchpad.net/terry.guo/gcc-arm-embedded/ubuntu/pool/main/g/gcc-arm-none-eabi)

请下载安装4.8 2014q2版的编译链：

~~~
$ sudo dpkg -i gcc-arm-none-eabi_4-8-2014q2-0saucy9_amd64.deb
~~~

##编译cleanflight固件

~~~
$ make TARGET='Flight Control Type Name'
例如：$ make TARGET=NAZE
~~~

cleanflight支持的飞控类型可以点击查找

[点击链接](https://github.com/cleanflight/cleanflight/tree/master/docs)

编译成功会生成相应的.hex文件

![](../assets/img/cleanflight_002.png)

~~~
$ cd obj/
~~~

就可以看到.hex文件

##cleanflight固件的烧录

将生成的.hex文件通过下面的方法进行固件烧录

[点击链接](http://www.crazepony.com/wiki/flash-firmware)

烧录是否成功需要在谷歌浏览器应用下载cleanflight APP测试一下

![](../assets/img/cleanflight_003.jpg)

连接飞控

![](../assets/img/cleanflight_004.jpg)

烧录cleanflight固件成功
