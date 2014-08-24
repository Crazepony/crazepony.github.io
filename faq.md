---
layout: faq
title: faq
---

## Crazepony四轴飞行器相关

### <i class="fa fa-arrow-right"></i>&nbsp;&nbsp;Crazepony四轴飞行器是否入手即飞？

Crazepony四轴飞行器是入手即飞的。只需要安装桨叶，遥感冒等配件就可以体验飞行的乐趣了。

### <i class="fa fa-arrow-right"></i>&nbsp;&nbsp;Crazepony四轴飞行器是否针对有电子设计基础的伙伴提供深度DIY套件。

对于有电子设计基础和愿意DIY的伙伴，我们提供飞控主板，遥控器等套件。我们将会尽快整理出DIY套件清单和DIY的实例以供大家参考。


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
现在提供的380mAh电池不够飞，能否使用手机电池等代理。回答是，不行。因为放电电流不够，不需要专门的航模电池。电池上有个参数叫做放电倍率。例如crazepony使用的是是25c，这里的25c就是指的放电倍率为25C(5.0A)。也就是能够提供5A左右的电流。

crazepony上的一个716空心杯电机在工作时，大概需要700mA的电流。那么单单4个电机工作的电流，就需要2.8A。所以我们选用了能够提供5A电流的航模电池。

### <i class="fa fa-arrow-right"></i>&nbsp;&nbsp;关于调参软件，上位机

调参一般是一个锦上贴花的事情，四轴复杂在于飞控中的姿态结算和pid控制。可以看看crazyflie的调参协议，很有参考价值的。

我在看crazyflie的过程中，做了[部分笔记](http://www.crazepony.com/wiki/comm-protocol.html)。

## V4.1版本存在的问题

### <i class="fa fa-arrow-right"></i>&nbsp;&nbsp;U10元器件没有贴片
U10是电子罗盘，我们还没有调试好，所以统一都还没有贴。没有调试好的原因，一是因为电路设计问题。另外，电子罗盘是磁场敏感元器件，很容易受到电机的影响。

<hr>

## Craze粉丝贡献榜单
Crazepony出来之后，很多网友建言献策，默默的为四轴的成长添砖加瓦。众人拾柴火焰高，有小伙伴提出Crazepony的改进意见，有小伙伴指出百科文档中的错误，还有小伙伴为Crazepony的推广不遗余力……

| Craze粉丝 | 贡献值 | 备注 |
|:--------|:-------:|--------:|
| @前面的风景会更好    | 百科文档：[9f7dd0](https://github.com/Crazepony/crazepony.github.io/commit/9f7dd03c12828adfe62f6f87393e8bc5b65db66c)   |    |
| @宇智波 佥源   | 百科文档：[8bf733](https://github.com/Crazepony/crazepony.github.io/commit/8bf733ca4e182efe379e71a09ad679dfaf070a69)   |    |
|  @﹎仰望情空ぷ  | 百科文档：[5fa4fe](https://github.com/Crazepony/crazepony.github.io/commit/5fa4fe0c9d02a5ea579ceb44a6a9e88c03fbd4d9)   |    |
