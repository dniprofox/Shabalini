$(function () {
    
    $(".menu__nav,.mobile-menu__nav,.services__btn").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1200);
    });
    $(".mobile-menu__nav,.services__btn").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top -100 }, 1200);
    });
    

    /* Кнопка вверх */
   $(window).on('scroll',function () {
      
    if ($(this).scrollTop() != 0)
       $('#toTop').fadeIn("slow");
    else
       $('#toTop').fadeOut("slow");
   });
    // ToTop////
    $('#toTop').on('click',function () {
        $('body,html').animate({
        scrollTop: 0
        }, 800);
    });
    
    //E-mail Ajax Send
	$("form").on( "submit",function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});




    
    
});
    
    

