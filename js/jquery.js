$(document).on('scroll', function () {

    if ($(this).scrollTop() > $(window).height()) {
        $('.navBar, .scrollTopButton').addClass('active')
    } else {
        $('.navBar, .scrollTopButton').removeClass('active');
    }

    if ($(this).scrollTop() > $('.icons').offset().top + $('.icons').outerHeight() - $(window).height()) {
        $('.icons').addClass('active');
    }

})

$(document).ready(function () {

    $('a[href^="."]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });

});

$(document).on('click', function () {

    if ($('.fa-times').hasClass('show')) {
        $('.portrait').addClass('show');
    } else {
        $('.portrait').removeClass('show');
    }
})


$('.burger').on('click', function () {
    $('.fa-bars').toggleClass('show');
    $('.fa-times').toggleClass('show');
})


$('.portrait a').on('click', function () {
    $('.fa-times').removeClass('show') && $('.fa-bars').addClass('show');
})