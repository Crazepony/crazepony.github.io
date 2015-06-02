---
layout: wiki
title: USB固件烧写
---

# {{ page.title }}

> 作者：nieyong

编译好STM32的代码，得到hex格式的固件文件，如何烧写到主控中？

Crazepony将SWD调试接口预留出来，可以使用J-Link或者ST-Link等调试器进行开发，详见[J-Link的使用及常见问题](./jlink-debug.html)。Crazepony也支持USB口烧入，即采用ISP下载，操作简单。只需要安装cp2102驱动程序，使用一根Mini USB数据线连接电脑。这里就详细介绍使用USB固件烧写流程。

首先从crazepony的百度云盘中下载开发工具，点击[这里](http://pan.baidu.com/s/1eQ1kfPw)。解压压缩文件得到3个文件夹。

## 安装cp2102驱动
cp2102是Crazepony上使用的USB转串口芯片。cp2102和STM32芯片以串口相连，和电脑PC以USB接口相连，这是Crazepony能够接上USB线对飞控/遥控器进行固件烧写编程和调试信息打印的原因。

首先要把cp2102的驱动在电脑PC上装好，这样电脑作为Host才能够识别到cp2102。这个驱动在32位windows xp系统/64位 windows 7系统下都测试通过。

![](/assets/img/cp2102.jpg)

安装成功之后，在我的电脑->设备管理->端口（COM和LPT），就可以看到Crazepony对应的串口号，例如下图为COM3。看到该串口中有关于CP210x的描述。

![](/assets/img/param-assistant-3.png)

## 烧入hex文件
打开下载器，然后用这个下载器下载hex文件。如果无法烧入成功，可以重新插拔一下。

![](/assets/img/download.jpg)

下载成功的标注。

![](/assets/img/download-done.jpg)

对于Crazepony-II 5.0及以后的版本，实现了连续下载固件功能，直接使用cp2102复位STM32并且引导进入串口升级固件的ISP下载模式。所以必须选择左下角的“RTS的高电平复位，DTR高电平进Bootloader”，如下图所示：

![](/assets/img/download-1.jpg)

## 查看打印信息

连上usb线，打开压缩包的里的串口助手，波特率115200，查看调试参数，确认hex烧入成功，并且正常运行。注意选择正确的串口。如果没有信息，可以按下复位键复位飞行器主控（对于5.0版本之后，没有复位按键）。

![](/assets/img/uart-info.jpg)
