$(document).ready(function(){

$(window).scroll(function() {
    if($(this).scrollTop()>500){
        $('.scrollB').fadeIn();
        } else{
            $('.scrollB').fadeOut();
            
        }
    
});

$(".scrollB").click(function(){
$('html ,body').animate({scrollTop : 0},800);
});
});