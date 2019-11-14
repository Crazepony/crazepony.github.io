---
layout: crazepony
title: Crazepony2 Development environment setup
---

#   
# {{ page.title }}

> author：wudong

## 1、Introduction
+ Crazepony II flight control code is base on cleanflight, the development environment is under linux system, so we are using linux system. Most of the computers are windows systems, That we can install a virtual machine, and then install a Linux system on the virtual machine, or a capable student can also try to install a dual system. (Double system tutorial can be Google, Remember! please backup important files, Prevent System crash).

+ VMware Work station is a powerful desktop virtual computer software that allows users to run different operating systems simultaneously on a single desktop, and to develop, test, and deploy new applications

+ VMware-workstation 12 ([download](http://pan.baidu.com/s/1jIiHVBC)) This software needs to crack the key after installation：AA3E0-0VDE1-0893Z-KGZ59-QGAVF

+ Linux is a free-to-use and freely distributed Unix-like operating system. It is a multi-user, multi-tasking, multi-threaded and multi-CPU based operating system based on POSIX and UNIX. It runs major UNIX utilities, applications and network protocols. It supports both 32-bit and 64-bit hardware.

+ Linux inherits Unix's network-centric design philosophy and is a stable multi-user network operating system.

+ Ubuntu16.04LTS system ([download](http://pan.baidu.com/s/1i5FnYOP))

## 2、Setting up the development environment
* Open VMware after installing VMware. We provide a Ubuntu virtual machine with a good environment[download](http://pan.baidu.com/s/1cMol5s)download and unzip, open the virtual machine, select the file with the suffix .ovf, storage path Select a large disk (free than 20G), the import maybe something wrong, just click try again. It takes about 10 minutes to import.

  ![](/assets/img/C2-environment-1.png)

* install VMware after cracking VMware, ‘CTRL+N’ create a new virtual machine !



## 3、compiled code
* Download source code:After Ubuntu system boot, press ‘’ctrl + alt + T’’ will come out a command line terminal, we put the code on github hosting,
 Note: the password is "123456".

  1.Download the git tool:

  ​		`sudo apt install git`

  2.Download the source code:

  ​		`git clone https://github.com/makerfire-offical/Crazepony2.git`

  After the download, move to the Crazeony2 folder:

  ​		`cd  Crazepony2`

  ![](/assets/img/C2-environment-9.png)

  3.Download the cross-compilation chain tool:

  ​		`sudo apt install gcc-arm-none-eabi`

  4.Compile the code:

  ​		`make SPRACINGF3`

  It takes about a minute to compile.

  ![](/assets/img/C2-environment-10.png)

+ This is the compilation is complete, the hex file is inside Crazeony2/obj.

## 4、Soldring code to flight control
1.cleanflight ground station ([Download](https://github.com/cleanflight/cleanflight-configurator/releases/download/CLFL_v1.2.4/cleanflight-configurator-1.2.4.zip))，download the zip file and extract it, remember Unzip the folder directory (this file should be kept all the time), install Google Chrome browser,open the extension of Google Chrome browser.

  ![](/assets/img/C2-environment-11.png)

2.Check the developer mode, load the unzipped extension, select the folder to be decompressed in 1 step, click confirm.

  ![](/assets/img/C2-environment-12.png)
  
  ![](/assets/img/C2-environment-13.png)
  
  ![](/assets/img/C2-environment-14.png)

3. After the startup interface is as follows, make sure the settings are consistent with the red circle, click Load Firmware, select the HEX file compiled that before we made it , then click Flash Firmware, and wait for the burning to complete.

  ![](/assets/img/C2-environment-15.png)

4.After the burning is completed, click connect, you can see the attitude information of the flight control!

  ![](/assets/img/C2-environment-16.png)
​	