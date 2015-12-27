---
layout: wiki
title: 本站点知识点
---

# {{ page.title }}

>作者：nieyong

## Disqus评论

在Disqus网站上注册账号之后，在需要使用评论的地方插入下面这段代码即可。

~~~
<div class="page_disqus" id="disqus_container">
    <div id="disqus_thread"></div>
    <script>
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');

    s.src = '//crazepony.disqus.com/embed.js';

    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
    </script>
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>   </div>
</div>
~~~

当然，也可以使用`post.js`中的js代码来点击加载。在英文网站我们是默认加载评论的，在中文网站（包括博客中）是需要点击加载评论。

## 站点统计
