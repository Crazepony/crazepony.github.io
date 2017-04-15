---
layout: wiki
title: Crazepony2开发环境搭建
---

# {{ page.title }}

> 作者：wudong

## 一、说在前面
+ C02飞控代码源自cleanflight，开发环境是在linux下，所以我们使用的是linux系统。但是大多数小伙伴电脑都是windows系统，那怎么办呢？不要慌，我们安装一个虚拟机，再在虚拟机上装一个linux系统就O啦，或者有能力的同学也可以尝试装双系统哦（双系统教程可以自行百度，but，请备份重要文件，系统崩了不要找我）。

+ VMware Workstation（中文名“威睿工作站”）是一款功能强大的桌面虚拟计算机软件，提供用户可在单一的桌面上同时运行不同的操作系统，和进行开发、测试 、部署新的应用程序的最佳解决方案---《百度百科》

+ VMware-workstation 12[虚拟机下载地址](http://pan.baidu.com/s/1jIiHVBC)此软件安装之后需要破解密钥：AA3E0-0VDE1-0893Z-KGZ59-QGAVF（如果不行大家可以去百度关键字：VMware-workstation 12密钥）

+ Linux是一套免费使用和自由传播的类Unix操作系统，是一个基于POSIX和UNIX的多用户、多任务、支持多线程和多CPU的操作系统。它能运行主要的UNIX工具软件、应用程序和网络协议。它支持32位和64位硬件。

+ Linux继承了Unix以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。
  Ubuntu（友帮拓、优般图、乌班图）是一个以桌面应用为主的开源GNU/Linux操作系统。------《百度百科》

+ Ubuntu16.04LTS系统[镜像下载地址](http://pan.baidu.com/s/1i5FnYOP)

## 二、搭建开发环境
* 方法一、安装破解VMware之后打开VMware。我们提供了一个搭好环境的Ubuntu虚拟机[镜像文件下载地址](http://pan.baidu.com/s/1cMol5s)下载解压后，打开虚拟机，选择后缀为 .ovf的文件，存储路径选择一个大点的盘（20G以上空闲），导入可能会出现错误，点重试就好了。导入需要10min左右，坐等。。。

  ![](/assets/img/C2-environment-1.png)

* 方法二、安装破解VMware之后打开VMware，ctrl+n新建虚拟机（没有截图的都按默认下一步）

  ![](/assets/img/C2-environment-2.png)

  ![](/assets/img/C2-environment-3.png)

  ![](/assets/img/C2-environment-4.png)

  位置选择一个空间大点的盘

  ![](/assets/img/C2-environment-5.png)

  ![](/assets/img/C2-environment-6.png)

  一定要桥接网络！

  ![](/assets/img/C2-environment-7.png)

  ![](/assets/img/C2-environment-8.png) 

  同样选择一个大点的盘

## 三、编译代码
* 下载源代码：Ubuntu系统开机后，按ctrl+alt+t会出来一个命令行终端，我们把代码放在github上托管，注：密码皆为“123456”。

  1.下载git工具：

  ​		`sudo apt install git`

  2.下载源代码：

  ​		`git clone https://github.com/makerfire-offical/Crazepony2.git`

  下载完成后移动到Crazepony2文件夹：

  ​		`cd  Crazepony2`

  ![](/assets/img/C2-environment-9.png)

  3.下载交叉编译链工具：

  ​		`sudo apt install gcc-arm-none-eabi`

  4.编译代码 ：

  ​		`make SPRACINGF3`

  编译需要一分钟左右，坐等。。。

  ![](/assets/img/C2-environment-10.png)

+ 这就是编译完成了，hex文件在Crazepony2/obj里面。

## 四、烧录代码到飞控
1.下载[cleanflight地面站](https://github.com/cleanflight/cleanflight-configurator)，下载zip文件后解压，记住解压后的文件夹目录（此文件要一直保留），安装Google chrome浏览器（自己百度），打开Google chrome浏览器的扩展程序。
  ![](/assets/img/C2-environment-11.png)

2.勾选开发者模式，加载已解压的扩展程序，选中1步骤解压的那个文件夹，点确定
  ![](/assets/img/C2-environment-12.png)
  
  ![](/assets/img/C2-environment-13.png)
  
  ![](/assets/img/C2-environment-14.png)

3.启动后界面如下，确保设置跟红色圈圈里面一致，点击Load Firmware，选择前面编译好HEX文件，再点Flash Firmware,等待烧录完成。
  ![](/assets/img/C2-environment-15.png)

4.烧录完成后点击connect，就可以看飞控的姿态信息了，愉快玩耍把，骚年们！
  ![](/assets/img/C2-environment-16.png)
​	