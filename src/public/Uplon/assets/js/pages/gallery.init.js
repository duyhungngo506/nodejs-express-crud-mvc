$(document).ready(function () {
    var e = $('.portfolioContainer');
    e.isotope({
        filter: '*',
        animationOptions: { duration: 750, easing: 'linear', queue: !1 },
    }),
        $('.portfolioFilter a').click(function () {
            $('.portfolioFilter .current').removeClass('current'),
                $(this).addClass('current');
            var i = $(this).attr('data-filter');
            return (
                e.isotope({
                    filter: i,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: !1,
                    },
                }),
                !1
            );
        }),
        $('.image-popup').magnificPopup({
            type: 'image',
            closeOnContentClick: !0,
            mainClass: 'mfp-fade',
            gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
        });
});
