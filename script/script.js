$(window).on('resize', function(){
    console.log($(window).width());
    var windowWidth = $(this).width();
    if(windowWidth <= 1024){
        $('.lnb').slideUp(5);

    }else{
        $('.lnb').slideDown(); 
    }
})
// 반응형에 중요한 reseize

$('.bars').on('click',function(){
    $('.lnb').slideToggle(); 
})
//    resize  될때 마다 콘솔 창에 적기
