---
layout: wiki
title: H250选材列表
---

##CC3D配置向导
作为一个之前对CC3D没有接触的新手，我们应该怎样快速入门CC3D让H250飞起来呢？OpenPilot CC3D拥有一个非常详尽的上位机，下面提供了百度云和官网下载的链接，读者可自行下载，14.01版本界面语言为English，当然地面站有汉化版，下面以版本为14.01为例介绍CC3D向导配置过程。

<a href="http://pan.baidu.com/s/1o6so6Ki" class="btn btn-lg btn-outline" role="button" target="_blank" >CC3D上位机（百度云）</a>
<a href="https://wiki.openpilot.org/display/WIKI/OpenPilot+Downloads" class="btn btn-lg btn-outline" role="button" target="_blank" >CC3D上位机（CC3D官网）</a>

##地面站的安装
点击CC3D上位机安装程序OpenPilot-RELEASE-14.01-win32.exe，默认安装，一路next即可。安装进程即将结束时窗口弹出提示安装驱动，该上位机安装完成后会安装驱动程序。安装驱动程序之后用数据线将CC3D与电脑连接，有可能你的电脑会提示该驱动安装未成功，大家不要着急，去设备管理器看COM口是不是出现。笔者的电脑系统为Window7 32位系统，每次连接CC3D都会提示驱动安装不成功，在设备管理器里COM端口有出现但是CopterControl黄色感叹号标识，但是连接上位机则正常。

![](/assets/img/h250-config-1.png)

##CC3D向导配置
进入地面站，首先查看端口通信是否连接，点击Vehicle Setup Wizard进入向导配置界面如图所示

![](/assets/img/h250-config-2.png)

进入设置向导后，会出现红色标识的一段话，地面站非常人性的提示配置之前卸掉桨叶，next进入下一界面，固件升级界面，提示你需要将固件版本与地面站版本保持一致，初次配置，建议Upgrade升级固件。升级固件需要进行断电、上电操作，先把电池断电，待进度条走动是拔掉USB数据线，然后迅速再插上，地面站将自动写入最新固件。

![](/assets/img/h250-config-3.png)

飞控写入最新固件后，接下来就要配置H250的硬件。next下一项进入输入信号的配置，有PWM/PPM/Futaba/Spektrum四种可选，H250选择PWM通信方式

![](/assets/img/h250-config-4.png)

next下一项将会提示选择飞机的类型，有Multirotor、直升机、固定翼及车类选项，目前14.01版本只支持Multirotor和固定翼，选择Multirotor，next；

![](/assets/img/h250-config-5.png)

Multirotor type下拉框有三轴、四轴、六轴及各种飞行模式可选，右边窗口将会有示意图示意所选择的类型及各个电机转动的方向;

![](/assets/img/h250-config-6.png)

next下一项进入电调的选择界面，有高速电调和标准电调两项可选，选择对应电调同时还要告知工作信号的类型，H250选择高速电调；

![](/assets/img/h250-config-7.png)

Next地面站将会把刚刚所配置的信息显示，确认next，进入传感器校准程序界面。在进入传感器校准之前，需要将飞控板保持水平状态，避免误差。

![](/assets/img/h250-config-8.png)

**硬件配置总结:关于配置这块，如果担心记不清楚选项或者初次接触不知如何入设置，我们就按默认选项即可，CC3D的默认选项与H250完全一致。**

##输出校准

校准传感器Next进入输出校准界面。在这里提醒大家卸掉桨叶接通电源！输出校准是设置电机的中性环境。方法是点击Start，鼠标拖动滑块向右移动直到电机转动，然后点击Stop，待电机完全停下，点击开始，观察点击能否自己启动，左右移动滑块调节电机启动的临界点。这里需要注意电机的位置及电机的旋转方向，若电机位置不一致，匹配飞控输出通道与电机所对应电调；若旋转方向不一致，只需将电机的任意两根线互换即可。

![](/assets/img/h250-config-9.png)

电机2、3、4的输出校准同电机1一样，按照电机1的设置步骤即可。四个电机参数设定之后，next进入参数写入界面，点击save。

![](/assets/img/h250-config-10.png)

##遥控配置

配置完成程序参数之后，电池断电进入遥控配置向导.CC3D的地面站在配置遥控时默认把油门解锁关闭，笔者建议配置遥控参数先检查油门有没有锁定，以防配置过程中忘记卸掉电池造成不必要的伤害。可点击Radio Setup Wizard直接进入遥控配置界面，也可以点击Finish退出，从Configuration Input进入，点击Start Configuration Wizard则进入配置界面。如下图所示

![](/assets/img/h250-config-11.png)

![](/assets/img/h250-config-12.png)

进入遥控向导后，操作将会提示按照屏幕上的指示去操控遥控杆，任意时刻都可以取消或者返回上一步

![](/assets/img/h250-config-13.png)

Next，进入遥控模式选择，acro模式和直升机模式。acro是正常的发射机固定翼或四轴，直升机模式则为已经整合俯仰和油门输入。H250遥控配置选择acro模式。

![](/assets/img/h250-config-14.png)

Next，进入遥控器模式选择，地面站提供4种模式，根据个人习惯去选择，笔者选择默认模式，模式2为油门和方向在左，俯仰和横滚在右。

![](/assets/img/h250-config-15.png)

Next，根据屏幕指示去操作遥控器，分别对油门、横滚、俯仰、方向即模式进行校准

![](/assets/img/h250-config-16.png)
![](/assets/img/h250-config-17.png)
![](/assets/img/h250-config-18.png)
![](/assets/img/h250-config-19.png)

Next，飞行模式校准，这里由于笔者使用的是富斯T6的遥控，没有对应的通道切换开关，但是富斯T6的VRA旋钮开关与之对应，可通过旋钮开关进行配置。Next还有关于Accessory0、Accessory1、Accessory2的配置，没有对应开关选择跳过直接next。

![](/assets/img/h250-config-20.png)

各项对应配置完成之后，操作界面将会提示将各通道开关归中。笔者遥控没有后面对应的遥控通道，在配置中直接跳过，这里选择跳过。若你使用的是openpilot的遥控，按照步骤就OK。

![](/assets/img/h250-config-21.png)

Next，操作提示随意拨动油门、横滚、俯仰、方向摇杆及模式切换开关，观察是否与实际的摇杆动作一致，若不一致也不用返回上一步重新去配置，笔者每次配到这里配置方向全部相反，就在遥控器设置动手脚，殊不知next之后又配置取反选项，哪个通道与实际动作相反就直接选中就OK，如图

![](/assets/img/h250-config-22.png)

截止以上，遥控的通道操作基本配置完成，点击右下角save保存，next进入遥控的解锁配置操作，CC3D的地面站在配置遥控时默认把油门解锁关闭，解锁方式根据自己的个人习惯而定，提供自定义解锁方式，下面还有一个配置栏是设定无信号接收等待时间自动上锁，默认为30s。

*![](/assets/img/h250-config-23.png)

点击save保存设置，CC3D遥控向导设置完成，可以点击Configuration 选择Input查看各项参数配置情况。
各项配置OK，找一个空旷的地方，初次试飞**建议由细绳牵住H250**，避免猛推油门，仔细观察飞行姿态。飞行前仔细检查机身是否存在隐患，比如电池电压、飞控及电池的固定、电机螺帽是否紧固、电线捆绑是否合理等。祝大家试飞成功！！

##手动配参
