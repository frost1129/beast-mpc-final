$(document).ready(function() {
    // sticky-nav
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".header").addClass("sticky-scroll");
        } else {
            $(".header").removeClass("sticky-scroll");
        }
    })

    

    // scroll-bar
    $(".progress .progress-value p").text("0%");
    $(document).scroll(function() {
        var scrollProgress = $(".progress");
        var pos = $(document).scrollTop();
        var calcHeight = $(document).height() - $(window).height();
        var scrollValue = Math.round(pos * 100 / calcHeight);
        
        $(".progress .progress-value p").text(scrollValue + "%");
        scrollProgress.css("background", "conic-gradient(var(--grey) " + scrollValue + "%, #2b2f38 " + scrollValue + "%)");
    })
})