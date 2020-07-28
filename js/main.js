$(document).ready(function() {
    /* HIDE ANIMATION AND NUMBERS ON PAGE LOAD */
        $('#numbers').hide();
        $('#glow').hide();

    /* HIDE/SHOW ELEMENTS | FORTUNE OPTIONS CODE */   
        /* click on purple animation */
        $('#purple').click(function() {
            $('#colors').hide();
            $('#numbers').slideUp( 1000 ).delay( 10000 ).fadeIn( 6000 );
            $('#glow').show();
            
            

            document.querySelector('#glow_1').style.animationIterationCount = "6";
            document.querySelector('#glow_2').style.animationIterationCount = "6";
            document.querySelector('#glow_3').style.animationIterationCount = "6";
            document.querySelector('#glow_4').style.animationIterationCount = "6";

            
            $('#glow').fadeOut( 20000 );
        });
    
        /* click on white animation */
        $('#white').click(function() {
            $('#colors').hide();
            $('#numbers').slideUp( 1000 ).delay( 7500 ).fadeIn( 6000 );
            $('#glow').show();

            document.querySelector('#glow_1').style.animationIterationCount = "5";
            document.querySelector('#glow_2').style.animationIterationCount = "5";
            document.querySelector('#glow_3').style.animationIterationCount = "5";
            document.querySelector('#glow_4').style.animationIterationCount = "5";

            $('#glow').fadeOut( 18000 );

        })

        /* click on black animation */
        $('#black').click(function() {
            $('#colors').hide();
            $('#numbers').slideUp( 1000 ).delay( 7500 ).fadeIn( 6000 );
            $('#glow').show();

            document.querySelector('#glow_1').style.animationIterationCount = "5";
            document.querySelector('#glow_2').style.animationIterationCount = "5";
            document.querySelector('#glow_3').style.animationIterationCount = "5";
            document.querySelector('#glow_4').style.animationIterationCount = "5";

            $('#glow').fadeOut( 18000 );
        
        })

        /* click on blue animation */
        $('#blue').click(function() {
            $('#colors').hide();
            $('#numbers').slideUp( 1000 ).delay( 6500 ).fadeIn( 6000 );
            $('#glow').show();

            document.querySelector('#glow_1').style.animationIterationCount = "4";
            document.querySelector('#glow_2').style.animationIterationCount = "4";
            document.querySelector('#glow_3').style.animationIterationCount = "4";
            document.querySelector('#glow_4').style.animationIterationCount = "4";

            $('#glow').fadeOut( 17000 ).delay( 100).hide( 17000 );
        
        })



        

        /* click on three animation */
        $('#three').click(function() {
            $('#numbers').hide();
            $('#poses').show();
            $('#glow').fadeIn();
            

            document.querySelector('#glow_1').style.animationIterationCount = "3";
            document.querySelector('#glow_2').style.animationIterationCount = "3";
            document.querySelector('#glow_3').style.animationIterationCount = "3";
            document.querySelector('#glow_4').style.animationIterationCount = "3";



            var images = ['yoga_1.png', 'yoga_2.png', 'yoga_3.png', 'yoga_4.png', 'yoga_5.png', 'yoga_6.png', 'yoga_7.png', 'yoga_8.png', 'yoga_9.png', 'yoga_10.png'];

            $('<img src="images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#random_poses');

            $('#glow').fadeOut( 17000 ).delay( 100).hide( 17000 );
            
        })

        /* click on five animation */
        $('#five').click(function() {
            $('#numbers').hide();
            $('#poses').show();
            $('#glow').fadeIn();

            document.querySelector('#glow_1').style.animationIterationCount = "5";
            document.querySelector('#glow_2').style.animationIterationCount = "5";
            document.querySelector('#glow_3').style.animationIterationCount = "5";
            document.querySelector('#glow_4').style.animationIterationCount = "5";

            $('#glow').fadeOut( 16000 );
        })

        /* click on seven animation */
        $('#seven').click(function() {
            $('#numbers').hide();
            $('#poses').show();
            $('#glow').fadeIn();

            document.querySelector('#glow_1').style.animationIterationCount = "7";
            document.querySelector('#glow_2').style.animationIterationCount = "7";
            document.querySelector('#glow_3').style.animationIterationCount = "7";
            document.querySelector('#glow_4').style.animationIterationCount = "7";

            $('#glow').fadeOut( 16000 );
        })

        /* click on nine animation */
        $('#nine').click(function() {
            $('#numbers').hide();
            $('#poses').show();
            $('#glow').fadeIn();

            document.querySelector('#glow_1').style.animationIterationCount = "9";
            document.querySelector('#glow_2').style.animationIterationCount = "9";
            document.querySelector('#glow_3').style.animationIterationCount = "9";
            document.querySelector('#glow_4').style.animationIterationCount = "9";

            $('#glow').fadeOut( 16000 );
        })
    
});