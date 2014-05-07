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


## ESky Protocol

在上面示意图的的通信方式选择上，最左边为EskyLink，对应使用宏USE_ESKYLINK来开启是否选择该种链接方式。

```
# Make copter firmware to be used with the bootloader, CF controlled with eSky ET6i transmitter

$ make clean && make USE_ESKYLINK=1 CLOAD=1 all 
```

所谓的Esky Protocol，其实时ESky公司基于开发的遥控器使用的通信协议。所以如果选用这种通信方式，那么可以使用ESky航模公司的遥控器进行控制。Crazyflie官网支持[ESKY ET6I Remote Control](http://wiki.bitcraze.se/projects:crazyflie:hacks:et6i)遥控器。

关于ESky公司的2.4G遥控器设备的通信协议，参考[ArduinoRCLib](http://sourceforge.net/projects/arduinorclib/)项目中的描述：

> The Esky 2.4 GHz equipment uses the Nordic NRF2401AG in both the transmitter and receiver. A compatible alternative to this chip is the NRF24L01+ (which is widely available).

ESky相关协议内容暂时不研究。
