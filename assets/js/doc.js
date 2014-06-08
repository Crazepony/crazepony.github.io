$(document).ready(function(){
	
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
	$('a[href^="#"]').on('click',function (e) {
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
    }else if(pathname.indexOf("index") >= 0){
        $("#index").addClass("active");
    }else{
        $("#home").addClass("active");
    }

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
