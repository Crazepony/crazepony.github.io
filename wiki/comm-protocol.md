---
layout: wiki
title: 通信部分介绍
---

# {{ page.title }}

通信协议指的是遥控端和主控之间交互数据的封装，是一种自行约定的数据封装格式，我们采用的是Crazyflie项目中定义的CRTP协议。

遥控端和主控之间数据的交互，物理层可以有下面方式：

* 单片2.4G无线射频收发芯片，通过SPI接口和MCU连接
* 蓝牙2.1透传模块，通过串口UART和MCU连接
* 蓝牙4.0的低功耗BLE透传模块，通过串口UART和MCU连接

这几种通信方式在同时只能够选择其中的一种。并且蓝牙2.1和蓝牙BLE根据安装的透传模块不一样进行选择。

![crazyflie task](/assets/img/crazyflie-task-comm.png)
