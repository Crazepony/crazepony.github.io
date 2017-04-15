---
layout: wiki
title: Crazepony2开发经验总结
---

# {{ page.title }}

> 作者：wudong

## 熟悉linux系统的操作命令使你工作事半功倍。
+ `grep` 小手一抖，代码都给揪出来
+ `grep –r` 是在本目录下搜索所有匹配的代码信息

  ![](/assets/img/c2-development-1.jpg)

## 如何添加自己的C文件
+ 一个工程中的源文件不计其数，其按类型、功能、模块分别放在若干个目录中，makefile定义了一系列的规则来指定，哪些文件需要先编译，哪些文件需要后编译，哪些文件需要重新编译，甚至于进行更复杂的功能操作，因为 makefile就像一个Shell脚本一样，其中也可以执行操作系统的命令。（来自百度百科）
+ 修改Makefile，把你自己的.C文件路径添加到Crazepony2\Makefile文件259行

  ![](/assets/img/c2-development-2.jpg)

+ 重新编译一次，保证编译不出错误。

## 如何添加自己的子程序
+ 例如我们想额外加一个控制LED灯的函数，让LED灯按照设定的时间闪烁，
1.在Crazepony2\src\main\\fc\fc_tasks.h中添加如下图红圈所示

  ![](/assets/img/c2-development-3.jpg)
  
  ![](/assets/img/c2-development-4.jpg)

2.在Crazepony2\src\main\fc\fc_tasks.c添加如下图所示，注意要跟fc_tasks.h中名称对应

  ![](/assets/img/c2-development-5.jpg)

3.在Crazepony2\src\mian\fc\boot.c的void configureScheduler(void)函数中添加setTaskEnabled(TASK_LEDFLASH,true);如下图
  
  ![](/assets/img/c2-development-6.jpg)

4.把你控制LED的代码写在void LED_loop(void)中就行了。

  ![](/assets/img/c2-development-7.jpg)

5.最后把你的.C文件添加到工程中去，步骤请看上面2所述。

## 写在后面
+ 对于刚开始接触linux的小伙伴们来说，会遇到很多困惑、不解，但是别慌，多去网上自学下关于linux系统的基础，楼主也是这样过来的。对于这样添加自己代码的例子在Crazepony2中有很多例子，替换气压计、替换无线遥控、wifi控制……依葫芦画瓢就会了（哈哈）。
  
  ![](/assets/img/c2-development-8.jpg)
