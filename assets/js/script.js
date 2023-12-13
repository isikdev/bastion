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
let preloader = $(".preloader");
$(window).on('load', function () {
    preloader.delay(180000).fadeOut('slow');
    $(".nab")
});  