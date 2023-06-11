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

// $('.slider-button-area-prev').on('click', function(){
//     $('.slider').slick('slickPrev');
// });
// $('.slider-button-area-next').on('click', function(){
//     $('.slider').slick('slickNext');
// });

});

