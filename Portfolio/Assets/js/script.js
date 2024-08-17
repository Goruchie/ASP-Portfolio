$(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header')
    }
});

$(document).ready(function() {

    //Typing animation
    var typed = new Typed('#type-it', {
        strings: ['FullStack', 'Developer'],
        typeSpeed: 100,
        loop: true
    });
});