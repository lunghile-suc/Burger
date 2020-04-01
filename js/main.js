$(document).ready(function () {
    $('.burger').click(function(){
        $('ul').slideToggle(700);
    });
});

$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop()>100);
});