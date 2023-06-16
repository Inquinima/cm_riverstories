$(()=>{
    const observer = lozad();
    observer.observe();

    let popupActive = false;
    function popupSwitch(){
        switch(popupActive){
            case true:
                $('.overlay').removeClass('--active');
                $('.menu').removeClass('--active');
                $('html').removeClass('noscroll');
                popupActive = !popupActive;
                break;
            case false:
                $('.overlay').addClass('--active');
                $('.menu').addClass('--active');
                $('html').addClass('noscroll');
                popupActive = !popupActive;
                break;
            default:
        }
    }

    $('.show-menu').on('click', function(){
        popupSwitch();
    });

    $('.overlay').on('click', function(){
        if(popupActive){
            popupSwitch();
        }
    });

    $('.menu li').on('click', function(){
        if(popupActive){
            popupSwitch();
        }
    });
    $('.menu li').on('click', function(){
        if(popupActive){
            popupSwitch();
        }
    });
    $('.menu-close').on('click', function(){
        if(popupActive){
            popupSwitch();
        }
    });

    $('.overlay .menu').on('click', function(e) {
        e.stopPropagation();
     });

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

    // Может быть, следует это раскидать по страницам, чтобы оно не загружалось там, где не нужно
    // Но сделают ли полтора байта погоду...
    $('.popup-contacts').on('click', function(){
        $('.popup_hidden_input').val('Заявка по кнопке из блока "Контакты"');
    });
    $('.popup-appeal').on('click', function(){
        $('.popup_hidden_input').val('Заявка по кнопке из блока "Ждём ваших обращений"');
    });

    $('.popup-about').on('click', function(){
        $('.popup_hidden_input').val('Заявка со страницы "О компании"');
    });

    $('.popup-services-front').on('click', function(){
        $('.popup_hidden_input').val('Заявка с первого блока страницы "Услуги"');
    });

    $('.popup-serives-prep').on('click', function(){
        $('.popup_hidden_input').val('Заявка с блока "Подготовка" страницы "Услуги"');
    });
    $('.popup-serives-maintenance').on('click', function(){
        $('.popup_hidden_input').val('Заявка с блока "ТО" страницы "Услуги"');
    });
    $('.popup-serives-coating').on('click', function(){
        $('.popup_hidden_input').val('Заявка с блока "Тиковое покрытие" страницы "Услуги"');
    });
    
    $('.popup-info').on('click', function(){
        $('.popup_hidden_input').val('Заявка по кнопке из блока "Компания RiverStories"');
    });
    
    $('.popup-boat').on('click', function(){
        let thisPage = $('h1').text();
        $('.popup_hidden_input').val(`Заявка по кнопке из блока "${thisPage}"`);
    });

    $('.popup-header').on('click', function(){
        $('.popup_hidden_input').val('Заявка по кнопке из шапки');
    });
    $('.popup-menu').on('click', function(){
        $('.popup_hidden_input').val('Заявка по кнопке из меню');
    });
    $('.popup-footer').on('click', function(){
        $('.popup_hidden_input').val('Заявка по кнопке из подвала');
    });
});

