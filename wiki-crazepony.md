---
layout: wiki
title: H250 Wiki
---

<div class="jumbotron">
    <p class="lead">这里是CrazePony的维基百科。我们提供DIY一个属于你自己四轴飞行器的文档，也提供对CrazePony四轴飞行器进行二次开发的指导。 </p>
</div>

* [入手试飞教程](wiki/user-guide.html)
* [组装维修教程](wiki/assemble-guide.html)
* [散件组装教程--5.0版本](wiki/assemble-guide-5-0.html)
* [入手试飞教程--5.0版本](wiki/user-guide-5-0.html)
* [散件组装教程--4.1版本](wiki/assemble-guide-4-1.html)
* [入手试飞教程--4.1版本](wiki/user-guide-4-1.html)

<h2 id="rd">开发指南</h2>
* [windows下开发环境搭建—裸机版本](wiki/setup-environment-in-windows-none.html)
* [windows下开发环境搭建—FreeRTOS版本](wiki/setup-environment-in-windows.html)
* [linux下开发环境搭建](wiki/setup-environment-in-linux.html)
* [J-Link的使用及常见问题](wiki/jlink-debug.html)
* [Crazepony Android客户端](wiki/crazepony-android-client.html)
* [固件烧写](wiki/flash-firmware.html)
* [Crazepony上位机使用](wiki/param-assistant-manual.html)

<h2 id="exp">开发经验总结</h2>
* [自主悬停](wiki/auto-hold.html)
* [动力效率和续航时间](wiki/crazepony-props.html)
* [飞行器平衡调试](wiki/crazepony-debug.html)
* [天线设计及遥控距离](wiki/crazepony-antenna.html)

<h2>Crazepony原理讲解</h2>
* [Crazepony器件选型总览及说明](wiki/ic-readme.html)
* [Crazepony硬件原理讲解](wiki/hardware-base.html)
* [Crazepony软件框架讲解](wiki/software-base.html)
* [Crazepony软件开发经验总结](wiki/software-experience.html)
* [Crazepony 5.1版本软件讲解](wiki/softmain.html)

<h2 id="quadcopter-dev">四轴飞行器算法讲解</h2>
<p>姿态解算是指把陀螺仪、加速度计、罗盘等数据融合在一起，得出飞行器的空中姿态，也叫做姿态融合。姿态解算的过程，涉及到传感器数据读取与滤波，四元数与旋转，姿态解算框架，长期融合/快速融合。</p>
* [姿态解算简介](wiki/attitude-algorithm.html)
* [姿态的数学表示方法](wiki/attitude-math.html)
* [姿态的测量](wiki/attitude-measure.html)
* [姿态解算流程](wiki/attitude-algorithm-flow-graph.html)
* [软件姿态解算](wiki/software-algorithm.html)
* [硬件姿态解算](wiki/hardware-algorithm.html)
* [四元数](wiki/quaternions.html)
* [三轴陀螺仪和三轴加速度计MPU6050](wiki/mpu6050.html)
* [气压计MS5611](wiki/ms5611.html)
* [PID算法](wiki/algorithm-pid.html)

<h2 id="crazyflie">Crazyflie</h2>
<p>Crazyflie使用了实时嵌入式操作系统FreeRTOS。相比于uCOS，FreeRTOS是完全开源免费的，而uCOS在商业上的应用是要收费的。作为一个轻量级的操作系统，功能包括：任务管理、时间管理、信号量、消息队列、内存管理、记录功能等，可基本满足较小系统的需要。下面介绍FreeRTOS的基本框架，在STM32上的移植等。</p>
* [FreeRTOS简介](wiki/freertos-intro.html)
* [介绍几个常用的宏的作用](wiki/macro-controls.html)
* [固件系统流程框架](wiki/system-flow-graph.html)
* [通信协议](wiki/comm-protocol.html)

<h2 id="other">其他</h2>
* [Crazepony的板型及结构](wiki/crazepony-construct.html)
