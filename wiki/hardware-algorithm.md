---
layout: wiki
title: 硬件姿态解算
---

# {{ page.title }}

> 作者：路洋/nieyong

四轴的姿态解算无疑是最繁琐的步骤没有之一，但是自从MPU6050出现了硬件DMP的时候，大妈都能完成姿态解算了！

> Crazepony的5.1版本使用的是MPU6050的DMP硬件姿态解算。5.2版本已经不再使用DMP硬件解算。本文仅提供给对DMP硬件解算感兴趣的同学参考。

首先有必要再介绍一下MPU6050这颗芯片。MPU-60x0是全球首例9轴运动处理传感器。它集成了3轴MEMS陀螺仪，3轴MEMS加速度计，以及一个可扩展的数字运动处理器DMP（Digital Motion Processor），如果启动使用了MPU6050自带的DMP模块，通过一些简单的配置，该模块就能完成姿态解算工作，通过IIC直接读取飞行器的姿态（四元数表示），省却了软件解算繁琐的算法步骤，非常方便易用。

## DMP的配置
todo

## 姿态读取和转换
在配置好DMP并且启动运行之后，就可以从MPU6050传感器直接读取到飞行器的姿态（四元数表示），首先应先将它归一化成单位四元数：

~~~
norm = dmpinvSqrt(q[0]*q[0] + q[1]*q[1] + q[2]*q[2] + q[3]*q[3]);
q[0] = q[0] * norm;
q[1] = q[1] * norm;
q[2] = q[2] * norm;
q[3] = q[3] * norm;
~~~

归一化后根据四元数和欧拉角转换公式把四元数转化为欧拉角。OK，硬件姿态解算完成！

~~~
DMP_DATA.dmp_roll = (atan2(2.0*(q[0]*q[1] + q[2]*q[3]), 1 - 2.0*(q[1]*q[1] + q[2]*q[2])))* 180/M_PI;
// we let safe_asin() handle the singularities near 90/-90 in pitch
DMP_DATA.dmp_pitch = dmpsafe_asin(2.0*(q[0]*q[2] - q[3]*q[1]))* 180/M_PI;

DMP_DATA.dmp_yaw = -atan2(2.0*(q[0]*q[3] + q[1]*q[2]), 1 - 2.0*(q[2]*q[2] + q[3]*q[3]))* 180/M_PI;
~~~
