# Crazepony站点
这是Crazepony网站源码位置，包括了[Crazepony主站](http://crazepony.github.io/index-cn.html)，[Crazepony Wiki](http://crazepony.github.io/wiki.html)百科站点，[Crazepony Blog](http://crazepony.github.io/blog.html)博客站点。

Crazepony网站建设和部署使用了多种开源的技术和平台。
* 站点部署在github上，使用了github page网站服务器功能，并且整个站点框架使用[jekyll](http://jekyllrb.com/)，这是github page支持的静态网站框架。
* 前端框架使用[bootstrap](https://github.com/twbs/bootstrap)开源项目
* 百科站点和博客站点内容全部使用markdown标志语言编辑

## Crazepony站点源码结构
由于本站点使用了jekyll框架，所以其结构基本上符合jekyll框架结构。

```
├── assets              |网页相关的资源文件夹，例如图片，定制css，javascript文件等
├── dist                | bootstrap相关文件，包括css，字体，javascript
├── _layouts            | 网页模板文件，用于定义网页的header，footer等
├── wiki                | 存放wiki源文件，markdown格式
├── _posts              | 存放博客源文件，markdown格式
├── blog.html           | 博客首页
├── _config.yml         | jekyll配置文件
├── index-cn.html       | 站点首页（中文）
├── index.html          | 站点首页（英文）
├── README.md           | 本文件
└── wiki.html           | wiki首页

```
修改最多的就是wiki目录和posts目录下的源文件，并且都为markdown格式。在文件最开始加入了一个特定格式的头，用于jekyll生成静态网页。

## 如何参与其中
参与网站wiki，blog等的建设其实很简单。无论你时git/github资深玩家，还是从没有接触过git/github的小白，都能够快速参与网站建设。

具体方法，查看wiki[如何参与站点建设](http://crazepony.github.io/wiki/wiki-help.html)。
