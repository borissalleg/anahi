     $(document).ready(function() {
            $(".dropdown-button").dropdown({
                hover: true,
                constrainWidth: false,
                belowOrigin: true,
                alignment: 'left'               
            });
            
        
            $(".dropdown-button1").dropdown({
                hover: true,
                constrainWidth: true,
                belowOrigin: false,
                 gutter: ($('.dropdown-content').width()* -2.8) / 2.5 + 5, // Spacing from edge            
            });            
    });
     $(document).ready(function () {
         M.updateTextFields();
        $('select').formSelect();
        $('input#input_text, textarea#textarea2').characterCounter();
        $('.parallax').parallax();
        $('.sidenav').sidenav();
        $(".dropdown-trigger").dropdown();
        $('.scrollspy').scrollSpy(
        {
         scrollOffset:0   
        }
        );
        $('.slider').slider({
            fullWidth: true,
            indicators : false,
            height: 500,
            duration: 1000

        });
        setInterval(function () {
            $('.sliderl').slider('next');
        }, 6000);
        
       $(window).scroll(function(){
            if ($(window).scrollTop()>600)
            { $('nav').addClass('sticky-nav'); }
            else
            { $('nav').removeClass('sticky-nav'); }    
        }); 


    });
    $(document).on({
        mouseenter: function(){
            $(this).addClass("z-depth-5");
        },
        mouseleave: function(){
            $(this).removeClass("z-depth-5")
        }
    }, '.card');
