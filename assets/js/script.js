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
$(window).on('load', function () {
    preloader.delay(1800).fadeOut('slow');
});  