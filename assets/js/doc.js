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
