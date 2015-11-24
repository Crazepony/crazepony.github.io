---
layout: faq
title: faq
---

## Crazepony MINI四轴飞行器

### <i class="fa fa-arrow-right"></i>&nbsp;&nbsp;Crazepony微型四轴飞行器提供了什么

Crazepony MINI是一件入手即飞的微型四轴飞行器。旨在为大学生，航模爱好者，创客提供一个优秀的开源微型四轴飞行器学习娱乐和二次开发平台。

### <i class="fa fa-arrow-right"></i>&nbsp;&nbsp;Crazepony微型四轴飞行器技术参数

* 电子系统：STM32F103（MCU）+ MPU6050（6轴传感器）+ MS5611（气压计）+ NRF24L01（2.4G遥控）+ HM-11（手机蓝牙4.0 BLE遥控）
* 动力系统：650mAh航模电池 + 720空心杯电机 + 75mm桨叶
* 飞控软件：Crazepony飞控
* 遥控器：Crazepony 2.4G遥控器/Android手机APP遥控
* 其它：机身大小10cm*10cm，自重49g，最大负重20g，续航6分钟，遥控距离20米（可选配[100米遥控器](./2015/01/23/about-5-1-version.html)）

### <i class="fa fa-arrow-right"></i>&nbsp;&nbsp;关于电池电池电量及充电

当4个机臂上的LED同时闪烁，表示电池电量低。此时按下遥控器上的“+”按键无法启动电机，必须充电。充电使用安卓（Android）手机的Micro USB数据线。充电时开关一定要打到CHG位置（即关机位置）。正常充电时红色LED亮起，充满则暗下去。可以使用电脑USB接口/充电宝/手机充电器等充电，使用2A充电器大约40分钟充满。遥控器充电同理。

### <i class="fa fa-arrow-right"></i>&nbsp;&nbsp;如何下载程序，如何调试

飞机和遥控都是通过Micro USB接口充电，下载，调试。可以通过该USB接口下载程序，查看打印信息。除此之外，STM32的SWD接口被引出，可以使用JLink调试器进行在线调试开发。

### <i class="fa fa-arrow-right"></i>&nbsp;&nbsp;如何开启串口打印，如何使用上位机

首先注意，USB串口打印和USB上位机同时只能够一个，不能够同时使用。出厂固件为了配合蓝牙4.0 BLE模块的低带宽特性，USB串口打印信息和USB上位机数据都是关闭的。要使用串口打印信息，请开启`SysConfig.h`中的`DEBUG_UART`宏。要使用上位机查看信息，请关闭`SysConfig.h`中的`DEBUG_UART`宏，并开启`main.c`中的`CommPCUploadHandle()`函数。详见[Wiki](wiki/flash-firmware.html#section)。


### <i class="fa fa-arrow-right"></i>&nbsp;&nbsp;无法垂直起飞的问题
微型四轴飞行器无法垂直起飞的问题，可以从下面几个方面依次改进。

* 电机是否有装反，是否有破损，装配是否垂直牢固，电机轴被头发等缠住。
* 整个四轴的重心问题，主要是电池位置。你可以根据情况稍稍移动电池位置，改变其重心。

### <i class="fa fa-arrow-right"></i>&nbsp;&nbsp;电子罗盘（磁力计）的问题
电子罗盘器件HMC5883统一都还没有焊接。电子罗盘是磁场敏感元器件，很容易受到电机的影响，很难调试稳定。另外，小四轴在视眼范围内飞行，基本上不需要电子罗盘的锁尾功能。

### <i class="fa fa-arrow-right"></i>&nbsp;&nbsp;飞控代码未使用RTOS
现在我们提供的飞控代码没有使用RTOS，全部是自己写的裸机代码，并非基于另外的四轴项目修改而来。

## 四轴飞行器相关

### <i class="fa fa-arrow-right"></i>&nbsp;&nbsp;我是新手，如何入门？

参考[DIY四轴飞行器如何入门？](2014/07/31/diy-quadcopter.html)，这是介绍关于如何玩四轴的，以及大小四轴的区别。


### <i class="fa fa-arrow-right"></i>&nbsp;&nbsp;玩大四轴好呢，还是小四轴？

参考[DIY四轴飞行器如何入门？](2014/07/31/diy-quadcopter.html)，这是介绍关于如何玩四轴的，以及大小四轴的区别。

大小四轴除了大小不一样之外，在技术上主要区别在动力系统。参考文档[航模电机](http://www.crazepony.com/wiki/motor-aircraft-model.html)和[电机驱动控制](http://www.crazepony.com/wiki/motor-control-ic.html)。


### <i class="fa fa-arrow-right"></i>&nbsp;&nbsp;四轴飞行器的难点在哪里？

四轴飞行器是一种微型空中智能机器人，技术覆盖电子/机械/通信/计算机/自动化等多个学科领域。

其中最为复杂的在于飞行控制部分，参考文档[飞行控制器-主控MCU](http://www.crazepony.com/wiki/main-controller-mcu.html)。

### <i class="fa fa-arrow-right"></i>&nbsp;&nbsp;能否使用普通电池代替航模电池
电池不够飞，能否使用手机电池代理？回答是，不行。因为普通电池放电电流不够，需要专门的航模电池。电池上有个参数放电倍率，用来描述电池的放电能力大小。例如crazepony使用的380mAh航模电池的放电倍率是25C，那么最大的放大能力就是380mA*25C=9.5A，也就是能够最大提供9.5A电流。

crazepony上的一个空心杯电机在工作时，大概需要700mA的电流。那么单单4个电机工作的电流，就需要2.8A。

### <i class="fa fa-arrow-right"></i>&nbsp;&nbsp;关于调参软件，上位机

调参一般是一个锦上贴花的事情，四轴复杂在于飞控中的姿态结算和pid控制。可以看看crazyflie的调参协议，很有参考价值的。

我在看crazyflie的过程中，做了[部分笔记](http://www.crazepony.com/wiki/comm-protocol.html)。

### <i class="fa fa-arrow-right"></i>&nbsp;&nbsp;拥有一个遥控器，能够自制接收机嘛？

要自制接收机，就需要对该厂商遥控器的编码进行破解。例如crazyflie就支持ESky的遥控器，因为该遥控器的编码被大神破解并且公开。所以有人专门争对这个提供了接收机代码包。详见[Crazyflie笔记](http://www.crazepony.com/wiki/comm-protocol.html)。



<hr>

## Craze粉丝贡献榜单
Crazepony出来之后，很多网友建言献策，默默的为四轴的成长添砖加瓦。众人拾柴火焰高，有小伙伴提出Crazepony的改进意见，有小伙伴指出百科文档中的错误，还有小伙伴为Crazepony的推广不遗余力……

<table class="table table-bordered table-hover">
  <thead>
    <tr>
      <th>网络ID/姓名</th>
      <th>贡献内容</th>
      <th>备注</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/vivijie">vivijie</a></td>
      <td>github上提出pull request，修改文案：<a href="https://github.com/Crazepony/crazepony.github.io/commit/867d923a49998694ee0d9fe43ec7844996a46968">867d923a4</a></td>
      <td></td>
    </tr>
    <tr>
      <td>ooo @610645105</td>
      <td>提出百科文档中的错误：<a href="https://github.com/Crazepony/crazepony.github.io/commit/4f95259939399d11b0d2852eed54b8afe7a567a1">4f9525</a></td>
      <td></td>
    </tr>
    <tr>
      <td>前面的风景会更好 @735661895</td>
      <td>百科文档：<a href="https://github.com/Crazepony/crazepony.github.io/commit/9f7dd03c12828adfe62f6f87393e8bc5b65db66c">9f7dd0</a></td>
      <td></td>
    </tr>
    <tr>
      <td>﹎仰望情空ぷ @781650550</td>
      <td>百科文档：<a href="https://github.com/Crazepony/crazepony.github.io/commit/5fa4fe0c9d02a5ea579ceb44a6a9e88c03fbd4d9">5fa4fe</a></td>
      <td></td>
    </tr>
    <tr>
        <td>( ´ ▽ ` )ﾉOwl猫头鹰 @765198459</td><td> 分享Crazepony参与源码纠错</td>
        <td></td>
    </tr>
    <tr>
        <td>宇智波 佥源  @862750667</td><td> 分享Crazepony</td>
        <td><a href="http://www.eeboard.com/bbs/thread-37979-1-1.html">爱板网的帖子</a></td>
    </tr>
    <tr>
        <td>沉迷学习无法自拔的seven  @495154953</td><td> 网站视频 编辑哥哥</td>
        <td></td>
    </tr>
    <tr>
        <td>哼嘿哈嘿哈  @137859310</td><td> 积极参与源码的纠错</td>
        <td></td>
    </tr>
    <tr>
        <td>dajianli @447949135</td><td> 积极分享Crazepony</td>
        <td></td>
    </tr>
    <tr>
        <td>lovingflying  @1143615270</td>
        <td> Crazepony核心算法改善</td>
        <td></td>
    </tr>
    <tr>
        <td>曾航（深圳）</td>
        <td>1.遥控器需要添加微调的按钮<br>2.电池应该用薄一点的双面胶，不要露出电池外面</td>
        <td>第二条已经解决，使用了汽车玻璃上用的透明双面胶<br>第一条将会在下一版本中改进</td>
    </tr>
    <tr>
        <td>张培鲲（海南）</td>
        <td>1.开关按键容易坏的问题<br>2.提出了使用螺丝锁定电机套的办法<br>3.发现并且解决了遥控器无法充电问题</td>
        <td>开关按键已经跟换了新的物料<br>遥控器无法充电问题解决</td>
    </tr>
  </tbody>
</table>

