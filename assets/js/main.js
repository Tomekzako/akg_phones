$(document).ready(function () {

    $('.sam_section1-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 1500,
                 settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
            },
            {
                breakpoint: 960,
                 settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
            }
        ]
    });

    $('.sam_section7-slider').slick({
        dots: true
    });
    $('.sam_section8-slider').slick({
        dots: true
    });
    $('.sam_section9-slider').slick({
        dots: true
    });

    var circles = $('.sam_section1--circle');
    
    function init(e) {
        var $id = e.target.id;
        var $img = $(this).parent().siblings('.sam_section1--img').find('img');
        $img.attr("src","assets/img/"+ $id +".png");
    }

    circles.each(function(){
        $(this).on('click', init);
    });

    sam_animateInit();

    $(document).on('click', '#samsung_m_00 #samsung_m_01 a[data-jump-to]', function (e) {
        e.preventDefault();
        var $jump_to_el = $($(this).attr('data-jump-to'));
        console.log($jump_to_el);
        $('html, body').animate({
            scrollTop: $jump_to_el.offset().top
        }, 1000);
    });

    function sam_animateInit() {

        var settings = {
            'wrapper_id': 'samsung_m_00',
            'class_animation_init': 'sam_effect',
            'class_animation_add': 'sam_effect_active'
        }

        var isInIframe = (window.location != window.parent.location) ? true : false;
        var iframeTop = 0;

        if (isInIframe) {
            var frames = parent.document.getElementsByTagName('iframe');
            var ourFrame;

            for (var i = 0; i < frames.length; i++) {
                if (frames[i].contentDocument.getElementById(settings.wrapper_id) !== 'null') {
                    iframeTop = parent.window.document.getElementsByTagName('iframe')[i].offsetTop;
                    break;
                }
            }
        }

        $(parent.window).scroll(function () {
            animateElement();

        });
        animateElement();

        function animateElement() {
            $('.' + settings.class_animation_init).each(function () {

                var slideIn = ($(parent.window).scrollTop() + $(parent.window).height()) - $(this).height() / 2;
                var imageBottom = $(this).offset().top + iframeTop + $(this).height();
                var isHalfShown = slideIn > $(this).offset().top + iframeTop;
                var isNotScrolledPast = $(parent.window).scrollTop() < imageBottom - $(this).height() / 2;
                if (isHalfShown && isNotScrolledPast) {

                    $(this).addClass(settings.class_animation_add);
                } else {
                    //$(this).removeClass(settings.class_animation_add);
                }
            });
        }
    }
});