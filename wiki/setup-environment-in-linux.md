---
layout: wiki
title: Linux下开发环境搭建
---

# {{ page.title }}

## 环境配置说明
下面主要介绍在ubuntu下开发环境的配置，测试的系统为ubuntu 14.04。

## ARM交叉编译工具链安装
使用wget下载交叉编译工具链到本地，并且解压缩到`~/bin/`目录下。

```
wget https://launchpad.net/gcc-arm-embedded/4.7/4.7-2013-q1-update/+download/gcc-arm-none-eabi-4_7-2013q1-20130313-linux.tar.bz2
mkdir ~/bin
tar xjf gcc-arm-none-eabi-4_7-2013q1-20130313-linux.tar.bz2 -C ~/bin
```

修改~/.bashrc文件，将交叉编译工具链的路径添加到当前用户的默认搜索路径下。并且使用source命令使其马上生效。

```
echo -e "\nPATH=\$PATH:$HOME/bin/gcc-arm-none-eabi-4_7-2013q1/bin" >> ~/.bashrc
source ~/.bashrc
```

可以使用type命令检测交叉编译工具是否安装成功。例如检测其`arm-none-eabi-gcc`命令，可以看到其在刚才安装的~/bin目录下检测到。

```
type arm-none-eabi-gcc
arm-none-eabi-gcc 是 /home/ny/bin/gcc-arm-none-eabi-4_7-2013q1/bin/arm-none-eabi-gcc
```
