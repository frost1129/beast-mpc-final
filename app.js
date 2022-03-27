$(document).ready(function() {
    // sticky-nav
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".header").addClass("sticky-scroll");
        } else {
            $(".header").removeClass("sticky-scroll");
        }
    })
})