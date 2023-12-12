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
