---
layout: wiki
title: Cleanflight的配置和下载
---

# {{ page.title }}

## ubuntu下下载与编译cleanflight固件
下载cleanflight固件

~~~
$ git clone git@github.com:cleanflight/cleanflight.git
~~~

交叉编译链的安装，可以参考下面的地址安装

[点击链接](https://github.com/cleanflight/cleanflight/blob/master/docs/development/Building%20in%20Ubuntu.md)

编译cleanflight固件

~~~
$ make TARGET="Flight Control Type Name"
//例如：make TARGET=CC3D
//cleanflight支持的飞控类型可以在下面的地址查找(https://github.com/cleanflight/cleanflight/tree/master/src/main/target)
//编译完以后会在一下的目录生成相对应的.bin或者是.hex文件
$ cd obj/
~~~

##cleanflight固件的烧录
将生成的.hex文件通过下面的方法进行固件烧录

http://www.crazepony.com/wiki/flash-firmware

也可以直接下载.hex文件或者.bin文件烧录

https://github.com/cleanflight/cleanflight/releases

测试烧录是否成功，需要在谷歌浏览器应用下载cleanflight APP，连接飞控测试
