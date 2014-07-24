---
layout: blog-home
---

<div class="index-content blog">
    <div class="section">
        <ul class="artical-cate">
            <li class="on"><a href="/blog-new.html"><span>博客</span></a></li>
            <li style="text-align:right"><a href="/about-us.html"><span>贡献者</span></a></li>
        </ul>

        <div class="cate-bar"><span id="cateBar"></span></div>

        <ul class="artical-list">
        {% for post in site.posts %}
            <li>
                <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
                <div class="title-desc">{{ post.description }}</div>
            </li>
        {% endfor %}
        </ul>

        <div class="container" id="cc">
             <p>
             <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/"><img alt="知识共享许可协议" style="border-width:0" src="http://i.creativecommons.org/l/by-nc-sa/3.0/80x15.png" /></a>
             全部内容以 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons 署名-非商业性使用-相同方式共享 3.0 协议发布</a>.&nbsp;&nbsp;模板来自<a href="http://beiyuu.com/">BeiYuu</a>博客.</p>

        <p>Copyright &copy;2013 Shenzhen CrazePony Technologies Co., Ltd. All rights reserved.</p>
        </div>

    </div>


    <div class="aside">
    </div>
</div>
