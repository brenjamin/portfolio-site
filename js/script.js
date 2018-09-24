
$(document).ready(function() {
    $(".header__icon-container").click(function() {
        $('html,body').animate({
            scrollTop:$(".section-skills").offset().top}, 
            'slow');
    });

    // nav button appears after scrolling past header

    
    
    $(window).scroll(function() {

        let headerTop = $(".header").offset().top;
        let headerHeight = $(".header").outerHeight();

        if ($(window).scrollTop() > (headerHeight + headerTop - 1)) {
            if ($(".nav-btn").hasClass("faded")) {
                $(".nav-btn").removeClass("faded");
            }
        }
        else {
            $(".nav-btn").addClass("faded");
        }
    });


});