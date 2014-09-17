---
layout: download
title: 下载中心
---

## 飞控/遥控器源代码

源代码都托管在[Github的Crazepony团队](https://github.com/Crazepony/)下，包括飞控代码，遥控器代码，Android APP源码，PC上位机源码等。

飞控代码托管在[crazepony-firmware-none项目](https://github.com/Crazepony/crazepony-firmware-none)下。其中名字中的none表示**没有**使用FreeRTOS，是裸机代码，代码更加简单明了，适合初学者使用。

<a href="https://github.com/Crazepony/crazepony-firmware-none" class="btn btn-lg btn-outline" role="button" target="_blank" >飞控源码</a>
<a href="https://github.com/Crazepony/crazepony-remote-none" class="btn btn-lg btn-outline" role="button" target="_blank" >遥控器源码</a>

## 原理图&芯片资料
通过百度网盘提供所有版本原理图的下载。并且将所使用芯片的资料（datasheet，封装图等）进行了整理，供大家下载。

<a href="http://pan.baidu.com/s/1o6Lo7jW" class="btn btn-lg btn-outline" role="button" target="_blank" >原理图（飞控+遥控器）</a>
<a href="http://pan.baidu.com/s/1i31fUCl" class="btn btn-lg btn-outline" role="button" target="_blank" >芯片资料</a>

## Windows开发安装包
裸机版本的代码使用Keil 4进行开发编译。固件的烧写可以使用JLink工具，也可以直接通过micro USB进行烧写。我们整理了开发工具的安装文件，驱动安装文件等，并且共享在百度网盘上提供下载。

<p>
<a href="http://pan.baidu.com/s/1ntNqLdv" class="btn btn-lg btn-outline" role="button" target="_blank" >Keil 4安装文件</a>
<a href="" class="btn btn-lg btn-outline" role="button" target="_blank" >Keil 5安装文件（整理中）</a>
<a href="http://pan.baidu.com/s/1eQ1kfPw" class="btn btn-lg btn-outline" role="button" target="_blank" >固件USB接口烧写工具</a>
</p>

## 上位机和Android客户端
<a href="http://pan.baidu.com/s/1q5bEu" class="btn btn-lg btn-outline" role="button" target="_blank" >PC上位机安装程序</a>
<a href="http://pan.baidu.com/s/1pJsMyqJ" class="btn btn-lg btn-outline" role="button" target="_blank" >Android APP安装程序（APK文件）</a>
<a href="https://github.com/Crazepony/crazepony-host-client" class="btn btn-lg btn-outline" role="button" target="_blank" >PC上位机源码</a>
<a href="https://github.com/Crazepony/crazepony-android-client-none" class="btn btn-lg btn-outline" role="button" target="_blank" >Android APP源码</a>

上位机使用C#写成，现在已经加入了飞行姿态模拟，姿态数据显示，PWM输出显示等功能。截图如下所示。

![](/assets/img/assistant.jpg)

现在Crazepony支持Android手机蓝牙链接，使用手机的体感控制飞行。Android APP截图如下。

![](/assets/img/android-app.jpg)
