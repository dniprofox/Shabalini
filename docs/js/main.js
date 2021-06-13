$(function () {
    
    $(".menu__nav").on("click", "a", function (event) {
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
    

     // ToTop////
   $(window).on('scroll',function () {
      
    if ($(this).scrollTop() != 0)
       $('#toTop').fadeIn("slow");
    else
       $('#toTop').fadeOut("slow");
   });
   
    $('#toTop').on('click',function () {
        $('body,html').animate({
        scrollTop: 0
        }, 800);
    });    

    // *****mail******
    // $('form').on('submit',function(e) {
    //     e.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()
    //     }).done(function() {
    //         $(this).find("input").val("");
    //         $('#modal__form').fadeOut();
    //         $('.overlay, #thanks').fadeIn('slow');

    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });  
    
    //  mask
    $('input[name=user_phone]').mask("+38 (999) 999-99-99");
    
    // form_validate
    function validateForms(form){
        $(form).validate({
            rules: {
                user_name: {
                    required: true,
                    minlength: 2
                },
                user_phone: "required"                
            },
            messages: {
                user_name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                user_phone: "Пожалуйста, введите свой номер телефона",
                user_text: {
                    required: "Пожалуйста, введите сообщение",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                               
            }
        });
    };
    validateForms('#modal__form');
    



    
});
    
    

