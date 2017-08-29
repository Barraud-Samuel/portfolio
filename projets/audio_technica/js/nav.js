$(function() {
    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        
        if(scroll !== 0)
        {
            $("nav").addClass("scrolled");
            $(".nav-left img[alt=logo]").addClass("minified");
        }
        else
        {
            $("nav").removeClass("scrolled");
            $(".nav-left img[alt=logo]").removeClass("minified");
        }
    });
});