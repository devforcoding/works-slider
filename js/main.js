(function ($) {
    $(document).ready(function () {
       const $list = $('.list').isotope({
            // options
            itemSelector: '.list__item',
           layoutMode: 'fitRows'
        });

        $('.main-nav').on('click', '.main-nav__item', function() {
            const $this = $(this);
            const filterValue = $(this).data('filter');
            $list.isotope({filter: filterValue});
            });

        $('.works__list').slick({
            centerMode: true,
            centerPadding: '60px',
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
        });
    });
})(jQuery);