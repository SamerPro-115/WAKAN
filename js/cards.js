$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    $('.fade-up').each(function() {
        var elementTop = $(this).offset().top;
        var windowHeight = $(window).height();

        if (scrollTop + windowHeight > elementTop + 100) {
            $(this).addClass('visible');

        } else {
            $(this).removeClass('visible');
        }
    });
    
});