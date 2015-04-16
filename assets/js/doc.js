$(document).ready(function(){

    $(".fancybox").fancybox();

	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});


    // 滑到顶部
    $('.scrolltop').click(function () {
		$('html,body').animate({
			scrollTop: 0
		}, {
			queue: !1,
			duration: 800,
			easing: "easeInOutExpo",
		});
        
    });


    //导航滑动效果
	$('a[href^="#intro"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, {
			queue: !1,
			duration: 800,
			easing: "easeInOutExpo",
		});
	});


    //响应navbar上面的active
    var pathname = window.location.pathname;
    $(".nav .active").removeClass("active");

    if(pathname.indexOf("todo") >= 0){
        $("#todo").addClass("active");
    }else if(pathname.indexOf("pov") >= 0){
        $("#pov").addClass("active");
    }else if(pathname.indexOf("faq") >= 0){
        $("#faq").addClass("active");
    }else if(pathname.indexOf("download") >= 0){
        $("#download").addClass("active");
    }else if(pathname.indexOf("index") >= 0){
        $("#index").addClass("active");
    }else{
        $("#home").addClass("active");
    }

	//wiki页面根据h2标签生成右边栏目录
	var html = '';
	var flg = false;
	
	$("h2").each(function(){
		flg = true;
		html += '<li><a href="#' + $(this).attr("id") + '">' + $(this).html() + '</a></li>';
	});
	
	if(flg){
		$(".sidebar-container").append(html);
	}

    // Sidenav affixing
    var $sideBar = $('.bs-docs-sidebar')

    $sideBar.affix({
    offset: {
      top: function () {
        var offsetTop      = $sideBar.offset().top
        var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10)
        var navOuterHeight = $('.bs-docs-nav').height()

        return (this.top = offsetTop - navOuterHeight - sideBarMargin)
      },
      bottom: function () {
        return (this.bottom = $('.bs-docs-footer').outerHeight(true))
      }
    }
    });

});


(function($){
    // 滑动到顶部效果插件
    $.extend(
        $.easing, 
        {
            easeInOutExpo: function(a, c, d, b, e) {
                if (c == 0)
                    return d;
                if (c == e)
                    return d + b;
                if ((c /= e / 2) < 1)
                    return b / 2 * Math.pow(2, 10 * (c - 1)) + d;
                return b / 2 * (-Math.pow(2, -10 * --c) + 2) + d
             }
        }
    );
})(jQuery);
