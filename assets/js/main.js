$(function () {
    $('.slide-banner').slick({
        slidesToShow:1,
        slidesToScroll:1,
        dots:false,
        prevArrow: $('.prev-banner'),
        nextArrow: $('.next-banner'),
    });

    $('.slide-product').slick({
        slidesToShow:4,
        slidesToScroll:1,
        dots:false,
        prevArrow: $('.prev-banner'),
        nextArrow: $('.next-banner'),
    });

    $('.bar-mobile').click(function(){
        $('.box-menu').toggleClass('current');
        $('.opacity').css('display','block');
    })
    $('.close-box').click(function(){
        $('.box-menu').toggleClass('current');
        $('.opacity').css('display','none');
    })
    $('.opacity').click(function(){
        $('.box-menu').toggleClass('current');
        $(this).css('display','none');
    })
})