$(function () {
	$(".menu__nav,.mobile-menu__nav,.services__btn").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1200);    
    });
    $(".mobile-menu__nav,.services__btn").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-100}, 1200);    
        });
    
        

})