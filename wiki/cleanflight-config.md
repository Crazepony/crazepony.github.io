---
layout: wiki
title: Cleanflight的配置的下载
---

# {{ page.title }}

## ubuntu下下载cleanflight固件
##下载cleanflight固件

~~~
$ git clone git@github.com:cleanflight/cleanflight.git

![](../assets/img/cleanflight_001.png)
~~~

交叉编译链的安装，可以参考下面的地址安装

[点击链接](https://github.com/cleanflight/cleanflight/blob/master/docs/development/Building%20in%20Ubuntu.md)

![](../assets/img/cleanflight_002.png)

如果安装失败，请使用第二种方法：

[点击链接] (http://ppa.launchpad.net/terry.guo/gcc-arm-embedded/ubuntu/pool/main/g/gcc-arm-none-eabi)
请下载4.8 2014q2版的编译链
安装：
$ sudo dpkg -i gcc-arm-none-eabi_4-8-2014q2-0saucy9_amd64.deb

##编译cleanflight固件

~~~
$ make TARGET='Flight Control Type Name'
例如：$ make TARGET=NAZE
cleanflight支持的飞控类型可以点击查找
[点击链接](https://github.com/cleanflight/cleanflight/tree/master/docs)
编译成功会生成相应的.hex文件
![](../assets/img/cleanflight_003.png)
$ cd obj/
就可以看到.hex文件
~~~

##cleanflight固件的烧录

~~
将生成的.hex文件通过下面的方法进行固件烧录

[点击链接]（http://www.crazepony.com/wiki/flash-firmware）
~~

测试烧录是否成功，需要在谷歌浏览器应用下载cleanflight APP，连接飞控测试
![](../assets/img/cleanflight_004.jpg)
![](../assets/img/cleanflight_005.jpg)
