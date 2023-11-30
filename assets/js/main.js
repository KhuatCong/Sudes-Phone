$(function () {
    // $('.slide-category').slick({
    //     dots: false,
    //     arrows:false,
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 8,
    //     slidesToScroll:1,
    // });

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