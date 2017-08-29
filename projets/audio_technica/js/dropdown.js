$(function() {  
    $("nav li").mouseenter(function() {
        var offset = $("nav li:first-child").offset();
        $("nav .drop-container").removeClass("hidden");
        $("nav").css("background-color", "rgba(0,0,0,0.9)")
        $("nav .drop-container").offset({top: offset.top + 55, left: offset.left});
    });
    
    $("nav li").mouseleave(function() {
        var firstOffset = $("nav li:first-child").offset();
        var lastOffset = $("nav li:last-child").offset();
        var lastWidth = $("nav li:last-child").outerWidth();
        var dropOffset = $("nav .drop-container").offset();
        var dropHeight = $("nav .drop-container").outerHeight();
        
        $(window).mousemove(function(event) {
            if(!$("nav .drop-container").is(":hover"))
            {
                if(event.screenX <= firstOffset.left || event.screenX >= lastOffset.left + lastWidth || event.screenY >= dropOffset.top + dropHeight)
                {
                    $("nav .drop-container").addClass("hidden");
                }
                
                var scroll = $(window).scrollTop();
                if(scroll == 0 && $(".drop-container").hasClass("hidden"))
                {
                    $("nav").css("background", "none");
                }
            }
        });
    });
});