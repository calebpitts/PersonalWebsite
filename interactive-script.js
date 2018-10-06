(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > $(window).height()) {
                // var element = document.getElementById("empty-scroll-indicator");
                // console.log(element);
                // element.classList.add("scroll-indicator");
                // $(".sidenav a").each(function(i) {
                //     $(this).fadeIn(500);
                // });
                if($(window).width() > 576) {
                    $('.sidenav').fadeIn(500);
                    $('.scroll-indicator').fadeIn(500);
                }
            } else {
                $('.sidenav').fadeOut(500);
                $('.scroll-indicator').fadeOut(500);
            }
        });
    });
})(jQuery);


$(window).on('resize', function(){
    if ($(window).width() < 768) {
        // $('.moniter').removeClass('limit-container');
        $('.title-moniter').removeClass('big-title');
        $('.title-moniter').addClass('small-title');
    } else {
        // $('.moniter').addClass('limit-container');
        $('.title-moniter').removeClass('small-title');
        $('.title-moniter').addClass('big-title');
    }
});

$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
});

if ($(window).width() < 768) {
        // $('.moniter').removeClass('limit-container');
        $('.title-moniter').removeClass('big-title');
        $('.title-moniter').addClass('small-title');
    } else {
        // $('.moniter').addClass('limit-container');
        $('.title-moniter').removeClass('small-title');
        $('.title-moniter').addClass('big-title');
    }




