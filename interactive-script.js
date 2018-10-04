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
                $('.sidenav').fadeIn(500);
                $('.scroll-indicator').fadeIn(500);
            } else {
                $('.sidenav').fadeOut(500);
                $('.scroll-indicator').fadeOut(500);
            }
        });
    });
})(jQuery);

$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
});
