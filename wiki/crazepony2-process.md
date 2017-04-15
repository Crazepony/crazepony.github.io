---
layout: wiki
title: Crazepony2软件框架简析
---

# {{ page.title }}

> 作者：wudong

## 程序流程

+ 飞控源代码是属于cleanflight开源项目的一部分，没有使用实时系统，也没有使用Crazepony一代那样使用定时器来控制子任务的运行时间，这里使用的是一个动态任务调度系统（没了解过的童鞋可以去百度下），所以这算是一个伪实时系统。
+ 思路大概是这样子的：系统每个任务都有初始化分配的优先级，所有任务放在一个队列里，系统每次都调用优先级最高的任务执行，当任务A执行过一次后，任务A的优先级设置为最低，而其他在队列里等待的任务优先级加1，系统继续在队列选择优先级最高的任务执行。
+ 细心的童鞋会发现，”这样所有任务我没法控制具体执行周期”，这里采用的是计算每两次进入scheduler函数的时间间隔，当时间间隔刚好符合任务B执行周期的时候，任务B才会被执行。这样的处理好处是极大的提高了CPU的利用效率。具体代码实现请自行查阅Crazepony2\src\main\scheduler.c



## 初始化
+ Main函数位于Crazepony2\src\main\fc\boot.c进入main函数之后就是STM32处理器及各个部分的初始化。初始化完成后，就进入主循环while(1)之中了，主循环也就是整个程序功能实现的关键，所有子程序都在scheduler任务调度函数中被调度运行。

  ![](/assets/img/c2-process-1.jpg)

## 1000hz循环任务
+ 在Crazepony2\src\main\fc\fc_tasks.c中定义了所有子任务的执行周期。其中1000hz任务主要是读取加速度计跟陀螺仪的值，进行姿态融合，然后根据摇杆的数值，做PID控制。具体任务执行代码在Crazepony2\src\main\fc\cleanflight_fc.c中。

  ![](/assets/img/c2-process-2.jpg)

## 50hz循环任务
+ 50hz主要是检测电池电压以及接受遥控器的数据。

  ![](/assets/img/c2-process-3.jpg)

## 40hz循环任务
+ 这个子任务是负责定高算法的实现，包括高度数据融合、高度PID双环PID控制，PID控制代码具体实现如下图3。Crazepony2代的定高效果要比一代好很多，在室内悬停误差很小。代码位于Crazepony2\src\main\flight\altitudehold.c

  ![](/assets/img/c2-process-4.jpg)

  ![](/assets/img/c2-process-5.jpg)

