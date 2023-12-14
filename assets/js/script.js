// new WOW().init();
$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: parseFloat($(this).text())
    }, {
        duration: 2500,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
// let preloader = $(".preloader");
// let navbar = $(".navbar");
// $(window).on('load', function () {
//     preloader.fadeOut(3000);
// });  
let btn = $(".menu__mob")

btn.click(function() {
    $(".navbar__wrapper").toggleClass("navbar__wrapper-active");
    
})