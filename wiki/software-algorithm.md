---
layout: wiki
title: 软件姿态解算
---

# {{ page.title }}

> 作者：路洋/nieyong

> 文中有很多word下编辑的公式尚未加入，需要继续完善

## 常见姿态解算算法
首先亮出现在常见的软件姿态解算算法，这样在阅读相关姿态解算的文章时，不会越整越糊涂。

* 非线性互补滤波算法
* 卡尔曼滤波算法
* Mahony互补滤波算法（Crazepony开源四轴飞行器使用这种）

这些姿态解算算法都是使用一些巧妙的方式用加速度计的数据（或者加上电子罗盘），去修正由陀螺仪数据快速解算得到的存在误差的飞行器姿态（即四元数）。最终得到准确的飞行器姿态。要读懂本文，必须先阅读Crazepony开源四轴百科中的[《姿态解算简介》](http://www.crazepony.com/wiki/attitude-algorithm.html)和[《陀螺仪加速度计MPU6050》](http://www.crazepony.com/wiki/mpu6050.html)。

算法主要参考的文章有：

* [四轴飞行器姿态解算方法-Mahony的互补滤波法](http://www.qidic.com/42354.html)
* [IMU Data Fusing: Complementary, Kalman, and Mahony Filter](http://www.olliw.eu/2013/imu-data-fusing/#chapter3)

## Mahony互补滤波算法

下面将会以Crazepony开源四轴飞行器的代码为实例讲解Mahony互补滤波算法。看看如何通过软件姿态解算，把IMU输出的数据融合为飞行器精准的姿态。

代码位于[IMUSO3.c](https://github.com/Crazepony/crazepony-firmware-none/blob/master/User_Src/IMUSO3.c)文件中，函数如下。

~~~
//函数名：NonlinearSO3AHRSupdate()
//描述：姿态解算融合，是Crazepony和核心算法
//使用的是Mahony互补滤波算法，没有使用Kalman滤波算法
//改算法是直接参考pixhawk飞控的算法，可以在Github上看到出处
//https://github.com/hsteinhaus/PX4Firmware/blob/master/src/modules/attitude_estimator_so3/attitude_estimator_so3_main.cpp
static void NonlinearSO3AHRSupdate(float gx, float gy, float gz, float ax, float ay, float az, float mx, float my, float mz, float twoKp, float twoKi, float dt) 
{
    ……
}
~~~

* 输入参数`gx，gy，gz`分别对应三个轴的角速度，单位是弧度/秒。
* 输入参数`ax，ay，az`分别对应三个轴的加速度数据，由于加速度的噪声较大，在从MPU6050读取的时候该数据是采用`LPF2pApply_x`低通滤波函数的。
* 输出参数`mx，my，mz`分别对应三轴的电子罗盘数据，Crazepony四轴暂时没有使用到。
* 输入参数`twoKp，twoKi`是控制加速度计修正陀螺仪积分姿态的速度，是定义的一个常量。
* 输入参数`dt`是从上一次解算到本次解算的时间差，也就是角速度积分用的时间项。

输入参数`twoKp，twoKi`的宏定义如下：

~~~
#define so3_comp_params_Kp 1.0f
#define so3_comp_params_Ki  0.05f
~~~

下面我们逐行分析Mohony互补滤波姿态解算的代码。

~~~
if(!((mx == 0.0f) && (my == 0.0f) && (mz == 0.0f))) {
{
    ……
}

if(!((ax == 0.0f) && (ay == 0.0f) && (az == 0.0f))) 	
{
    ……
}
~~~

当电子罗盘数据有效的时候，需要融合电子罗盘的数据。Crazepony没有使用磁力计，所以这段代码略过。下面进入第二段的加速度数据融合。

~~~
recipNorm = invSqrt(ax * ax + ay * ay + az * az);

ax *= recipNorm;
ay *= recipNorm;
az *= recipNorm;
~~~

对加速度数据进行归一化，得到单位加速度。

~~~
halfvx = q1q3 - q0q2;
halfvy = q0q1 + q2q3;
halfvz = q0q0 - 0.5f + q3q3;
~~~

把飞行器上次计算得到的姿态（四元数）换算成“方向余弦矩阵”中的第三列的三个元素。根据余弦矩阵和欧拉角的定义，地理坐标系的重力向量，转到机体坐标系，正好是这三个元素。所以这里的`halfvx、halfvy、halfvz`，其实就是用上一次飞行器机体姿态（四元数）换算出来的在当前的机体坐标系上的重力单位向量。**注意，Crazepony代码中取了其中的一半1/2，下面的误差同理**。

~~~
halfex += ay * halfvz - az * halfvy;
halfey += az * halfvx - ax * halfvz;
halfez += ax * halfvy - ay * halfvx;
~~~

在机体坐标系上，加速度计测出来的重力向量是`ax、ay、az`。由上次姿态解算的姿态（可以简单认为是陀螺积分）来推算出的重力向量是`halfvx、halfvy、halfvz`。它们之间的误差向量，就是上次姿态解算（可以认为是陀螺仪积分）后的姿态和加速度计测出来的姿态之间的误差。

向量间的误差，可以用向量积(也叫外积、叉乘)来表示，ex、ey、ez就是两个重力向量的叉积。这个叉积向量仍旧是位于机体坐标系上的，而陀螺积分误差也是在机体坐标系，而且叉积的大小与陀螺积分误差成正比，正好拿来纠正陀螺。由于陀螺是对机体直接积分，所以对陀螺的纠正量会直接体现在对机体坐标系的纠正。

所以上面一段代码含义就是获得叉乘误差。

~~~
gyro_bias[0] += twoKi * halfex * dt;	// integral error scaled by Ki
gyro_bias[1] += twoKi * halfey * dt;
gyro_bias[2] += twoKi * halfez * dt;

// apply integral feedback
gx += gyro_bias[0];
gy += gyro_bias[1];
gz += gyro_bias[2];
~~~

上面一段代码，叉乘误差进行积分。

~~~

// Apply proportional feedback
gx += twoKp * halfex;
gy += twoKp * halfey;
gz += twoKp * halfez;
~~~

上面一段代码，用叉乘误差来做PI修正陀螺零偏，通过调节twoKp，twoKi两个参数，可以控制加速度计修正陀螺仪积分姿态的速度。

**到此为止，使用加速度计数据对陀螺仪数据的修正已经完成，这就是姿态解算中的深度融合。**

下面就是四元数微分方程，使用修正后的陀螺仪数据对时间积分，得到飞行器的当前姿态（四元数表示）。然后进行四元数的单位化处理。

~~~
dq0 = 0.5f*(-q1 * gx - q2 * gy - q3 * gz);
dq1 = 0.5f*(q0 * gx + q2 * gz - q3 * gy);
dq2 = 0.5f*(q0 * gy - q1 * gz + q3 * gx);
dq3 = 0.5f*(q0 * gz + q1 * gy - q2 * gx); 

q0 += dt*dq0;
q1 += dt*dq1;
q2 += dt*dq2;
q3 += dt*dq3;

// Normalise quaternion
recipNorm = invSqrt(q0 * q0 + q1 * q1 + q2 * q2 + q3 * q3);
q0 *= recipNorm;
q1 *= recipNorm;
q2 *= recipNorm;
q3 *= recipNorm;
~~~


## 欧拉微分方程

> 这部分由路洋提供

使用MPU6050硬件DMP解算姿态是非常简单的，下面介绍由三轴陀螺仪和加速度计的值来使用软件算法解算姿态的方法。

我们先来看看如何用欧拉角描述一次平面旋转(坐标变换)：

![](/assets/img/soft-algorithm-1.png)

设坐标系绕旋转α角后得到坐标系,在空间中有一个矢量在坐标系中的投影为,在内的投影为由于旋转绕进行，所以Z坐标未变，即有。

![](/assets/img/soft-algorithm-2.png)

转换成矩阵形式表示为：

![](/assets/img/soft-algorithm-4.png)

整理一下：

![](/assets/img/soft-algorithm-5.png)

所以从旋转到可以写成

上面仅仅是绕一根轴的旋转，如果三维空间中的欧拉角旋转要转三次:

![](/assets/img/soft-algorithm-6.png)

上面得到了一个表示旋转的方向余弦矩阵。

不过要想用欧拉角解算姿态，其实我们套用欧拉角微分方程就行了：

![](/assets/img/soft-algorithm-7.png)

上式中左侧,,是本次更新后的欧拉角,对应row,pit,yaw。右侧，是上个周期测算出来的角度，，，三个角速度由直接安装在四轴飞行器的三轴陀螺仪在这个周期转动的角度，单位为弧度，计算间隔时T*陀螺角速度，比如0.02秒*0.01弧度/秒=0.0002弧度。间因此求解这个微分方程就能解算出当前的欧拉角。

前面介绍了什么是欧拉角，而且欧拉角微分方程解算姿态关系简单明了，概念直观容易理解，那么我们为什么不用欧拉角来表示旋转而要引入四元数呢？

一方面是因为欧拉角微分方程中包含了大量的三角运算，这给实时解算带来了一定的困难。而且当俯仰角为90度时方程式会出现神奇的“GimbalLock”。所以欧拉角方法只适用于水平姿态变化不大的情况，而不适用于全姿态飞行器的姿态确定。

## 四元数求解
四元数法只求解四个未知量的线性微分方程组，计算量小，易于操作，是比较实用的工程方法。

我们知道在平面(x,y)中的旋转可以用复数来表示，同样的三维中的旋转可以用单位四元数来描述。我们来定义一个四元数：

![](/assets/img/soft-algorithm-8.png)

我们可以把它写成,其中,。那么是矢量，表示三维空间中的旋转轴。w是标量，表示旋转角度。那么就是绕轴旋转w度，所以一个四元数可以表示一个完整的旋转。只有单位四元数才可以表示旋转，至于为什么，因为这就是四元数表示旋转的约束条件。

而刚才用欧拉角描述的方向余弦矩阵用四元数描述则为：

![](/assets/img/soft-algorithm-9.png)

所以在软件解算中，我们要首先把加速度计采集到的值(三维向量)转化为单位向量,即向量除以模，传入参数是陀螺仪x,y,z值和加速度计x,y,z值：

~~~
void IMUupdate(float gx, float gy, float gz, float ax, float ay, float az) {
float norm;
float vx, vy, vz;
float ex, ey, ez;         

norm = sqrt(ax*ax + ay*ay + az*az);      
ax = ax / norm;
ay = ay / norm;
az = az / norm;

~~~

下面把四元数换算成方向余弦中的第三行的三个元素。刚好vx,vy,vz 其实就是上一次的欧拉角（四元数）的机体坐标参考系换算出来的重力的单位向量。

~~~
// estimated direction of gravity
vx = 2*(q1*q3 - q0*q2);
vy = 2*(q0*q1 + q2*q3);
vz = q0*q0 - q1*q1 - q2*q2 + q3*q3;
~~~
axyz是机体坐标参照系上，加速度计测出来的重力向量，也就是实际测出来的重力向量。

axyz是测量得到的重力向量，vxyz是陀螺积分后的姿态来推算出的重力向量，它们都是机体坐标参照系上的重力向量。

那它们之间的误差向量，就是陀螺积分后的姿态和加计测出来的姿态之间的误差。

向量间的误差，可以用向量叉积（也叫向量外积、叉乘）来表示，exyz就是两个重力向量的叉积。

这个叉积向量仍旧是位于机体坐标系上的，而陀螺积分误差也是在机体坐标系，而且叉积的大小与陀螺积分误差成正比，正好拿来纠正陀螺。（你可以自己拿东西想象一下）由于陀螺是对机体直接积分，所以对陀螺的纠正量会直接体现在对机体坐标系的纠正。

~~~
// integral error scaled integral gain
exInt = exInt + ex*Ki;
eyInt = eyInt + ey*Ki;
ezInt = ezInt + ez*Ki;
~~~

用叉积误差来做PI修正陀螺零偏

~~~
// integral error scaled integral gain
exInt = exInt + ex*Ki;
eyInt = eyInt + ey*Ki;
ezInt = ezInt + ez*Ki;

// adjusted gyroscope measurements
gx = gx + Kp*ex + exInt;
gy = gy + Kp*ey + eyInt;
gz = gz + Kp*ez + ezInt;
~~~
四元数微分方程，其中T为测量周期，为陀螺仪角速度，以下都是已知量，这里使用了一阶龙哥库塔求解四元数微分方程：

![](/assets/img/soft-algorithm-6.png)

~~~
// integrate quaternion rate and normalise
q0 = q0 + (-q1*gx - q2*gy - q3*gz)*halfT;
q1 = q1 + (q0*gx + q2*gz - q3*gy)*halfT;
q2 = q2 + (q0*gy - q1*gz + q3*gx)*halfT;
q3 = q3 + (q0*gz + q1*gy - q2*gx)*halfT;  
~~~
最后根据四元数方向余弦阵和欧拉角的转换关系，把四元数转换成欧拉角：

![](/assets/img/soft-algorithm-6.png)

所以有：

~~~
Q_ANGLE.Yaw = atan2(2 * q1 * q2 + 2 * q0 * q3, -2 * q2*q2 - 2 * q3* q3 + 1)* 57.3; // yaw
Q_ANGLE.Y  = asin(-2 * q1 * q3 + 2 * q0* q2)* 57.3; // pitch
Q_ANGLE.X = atan2(2 * q2 * q3 + 2 * q0 * q1, -2 * q1 * q1 - 2 * q2* q2 + 1)* 57.3; // roll
~~~
