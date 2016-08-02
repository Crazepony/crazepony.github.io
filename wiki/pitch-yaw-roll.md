---
layout: wiki
title: Pitch/Yaw/Roll的区别
---

# {{ page.title }}

> 作者：nieyong

玩过航模，飞控的童鞋肯定需要知道Yaw/Pitch/Roll的区别。尤其是准备要做飞控的，或者想玩三轴加速度的，或者玩了很久加速度还没研究过哪个是哪个的，可以看一下。

![](/assets/img/pitch-yaw-roll.png)

机体坐标系：固定在飞行器上的坐标系，一般沿机身方向为X轴，沿机翼方向为Y轴，垂直机身方向为Z轴，如上图所示。下面说的旋转都是指沿机体坐标系。

下面是Pitch/Yaw/Roll的gif动态示意图。

Pitch：俯仰，将物体绕Y轴旋转，表现出来的动作就是机头向上仰或者向下俯冲。

![](/assets/img/pitch.gif)

Yaw：航向，将物体绕Z轴旋转，表现出来的动作就是飞行器在绕中心旋转，航向改变。

![](/assets/img/yaw.gif)

Roll()：横滚，将物体绕X轴旋转，表现出来的动作就是飞行器两边晃动。

![](/assets/img/roll.gif)
