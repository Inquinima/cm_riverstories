$(()=>{
    const observer = lozad();
    observer.observe();

//     let popupActive = false;
//     function popupSwitch(){
//         switch(popupActive){
//             case true:
//                 $('.popup').fadeOut();
//                 $('.overlay').fadeOut();
//                 $('html').removeClass('noscroll');
//                 popupActive = !popupActive;
//                 break;
//             case false:
//                 $('.popup').fadeIn();
//                 $('.overlay').fadeIn();
//                 $('html').addClass('noscroll');
//                 popupActive = !popupActive;
//                 break;
//             default:
//         }
//     }
//     const regexExclude =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//     $('.show-popup').on('click', function(){
//         popupSwitch();
//     });
//     $('.overlay').on('click', function(){
//         if(popupActive){
//             popupSwitch();
//         }
//     });
//     $('.close-popup').on('click', function(){
//         if(popupActive){
//             popupSwitch();
//         }
//     });
//     $(window).on('keydown', function(e) {
//         switch(popupActive){
//             case true:
//                 if(e.key == "Escape"){
//                     popupSwitch();
//                 }
//                 break;
//             case false:
//                 if(e.key == "ArrowLeft") {
//                     $('.slider').slick('slickPrev');
//                 }
//                 if(e.key == "ArrowRight") {
//                     $('.slider').slick('slickNext');
//                 }
//                 break;
//             default:
//         }
//     });

$('.cases__items').slick({
        arrows: false,
        infinite: false,
        variableWidth: true,
        mobileFirst: true,
        centerMode: true,
        dots: true,
        dotsClass: 'bullets',
        responsive:[{
            breakpoint: 660,
            settings: {
                    prevArrow: $('.cases-prev'),
                    nextArrow: $('.cases-next'),
                    arrows: true,
                    centerMode: true,
                    infinite: true,
                }
            }]
});

    $('.reviews__items').slick({
        arrows: false,
        infinite: false,
        variableWidth: true,
        mobileFirst: true,
        centerMode: true,
        dots: true,
        dotsClass: 'bullets',
        responsive:[{
            breakpoint: 660,
            settings: {
                    prevArrow: $('.reviews-prev'),
                    nextArrow: $('.reviews-next'),
                    arrows: true,
                    centerMode: false,
                    infinite: true,
                }
            }]
    });


    $('.card-slider.--mobile').slick({
        variableWidth: true,
        arrows: false,
        centerMode: true,
        // infinite: true,
        centerMode: true,
        dots: false,
    });

    $('.card-slider.--desktop').slick({
        variableWidth: true,
        arrows: true,
        centerMode: true,
        infinite: true,
        dots: false,
        prevArrow: $('.card__gallery.--desktop .card-prev'),
        nextArrow: $('.card__gallery.--desktop .card-next'),
    });

    $('.card__info-screens').slick({
        arrows: false,
        fade:true,
        dots: false,
    });
    $('.card__info-button.--descr').on('click', function(){
        $('.card__info-screens').slick('slickGoTo', 0);
    });
    $('.card__info-button.--attrs').on('click', function(){
        $('.card__info-screens').slick('slickGoTo', 1);
    });
    $('.card__info-screens').on('beforeChange', function(){
        console.log($('.card__info-screens').slick('slickCurrentSlide'));
        if($(this).slick('slickCurrentSlide') == 1){
            $('.card__info-button.--descr').addClass('--active');
            $('.card__info-button.--attrs').removeClass('--active');

        }
        if($(this).slick('slickCurrentSlide') == 0){
            $('.card__info-button.--attrs').addClass('--active');
            $('.card__info-button.--descr').removeClass('--active');
        }
    });

    $('.show-popup').magnificPopup({
        type:'inline',
        midClick: true
    });
    $(".tel").mask("+7 999 999 99 99");

    $("button[name='popup_submit']").on('click', function(){
        let tel_value = document.forms["popup_form"]["popup_tel"].value;
        if (tel_value.length < 16) {
            $("form[name='popup_form'] .tel").addClass('--error');
            $("form[name='popup_form'] .tel").parent().find('.input-error').removeClass('--hidden');
            return false;
        } else{
            $("form[name='popup_form'] .tel").removeClass('--error');
            $("form[name='popup_form'] .tel").parent().find('.input-error').addClass('--hidden');
        }
    });


    $("button[name='page_cta_submit']").on('click', function(){
        let tel_value = document.forms["page_cta"]["page_cta_tel"].value;
        if (tel_value.length < 16) {
            $("form[name='popup_form'] .tel").addClass('--error');
            $("form[name='popup_form'] .tel").parent().find('.input-error').removeClass('--hidden');
            return false;
        } else{
            $("form[name='popup_form'] .tel").removeClass('--error');
            $("form[name='popup_form'] .tel").parent().find('.input-error').addClass('--hidden');
        }
    });
});

