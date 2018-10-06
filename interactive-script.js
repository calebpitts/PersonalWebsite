// Active scroll funciton
$(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        // Show/hide menu on scroll
        //if (scrollDistance >= 850) {
        //      $('nav').fadeIn("fast");
        //} else {
        //      $('nav').fadeOut("fast");
        //}
    
        // Assign active class to nav links while scolling
        $('.page-section').each(function(i) {
                if (i === 3) {
                    if ($(this).position().top <= scrollDistance+600) {
                        $('.animate').removeClass('active');
                        $('.animate').eq(i).addClass('active');
                    }
                }
                if (i=== 4) {
                    // if at bottom of the page, override to highlight contact nav
                    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                        $('.animate').removeClass('active');
                        $('.animate').eq(i).addClass('active');
                    }
                }
                if ($(this).position().top <= scrollDistance+3) {
                        $('.animate').removeClass('active');
                        $('.animate').eq(i).addClass('active');
                }
        });
});


(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > $(window).height()-3) {
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

// Scrolls smoothly across webpage (for navbar clicks)
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});