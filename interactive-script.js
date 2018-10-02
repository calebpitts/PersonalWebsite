
(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > $(window).height()) {
                $(".sidenav a").each(function(i) {
                    $(this).delay(100 * i).fadeIn(500);
                });
                // $('.sidenav').fadeIn(500);
            } else {
                $('.sidenav').fadeOut(500);
            }
        });
    });
})(jQuery);
