$(document).ready(function() {
    /* HIDE ANIMATION AND NUMBERS ON PAGE LOAD */
        $('#even_numbers').hide();
        $('#odd_numbers').hide();
        $('#glow').hide();

    /* HIDE/SHOW ELEMENTS | FORTUNE OPTIONS CODE */   
        /* click on purple animation */
        $('#purple').click(function() {
            $('#colors').hide();
            $('#odd_numbers').hide();
            $('#even_numbers').slideUp( 1000 ).delay( 10000 ).fadeIn( 6000 );
            $('#glow').fadeIn();
            
            

            document.querySelector('#glow_1').style.animationIterationCount = "6";
            document.querySelector('#glow_2').style.animationIterationCount = "6";
            document.querySelector('#glow_3').style.animationIterationCount = "6";
            document.querySelector('#glow_4').style.animationIterationCount = "6";

            
            $('#glow').fadeOut( 20000 );
        });
    
        /* click on white animation */
        $('#white').click(function() {
            $('#colors').hide();
            $('#odd_numbers').hide();
            $('#even_numbers').slideUp( 1000 ).delay( 10000 ).fadeIn( 6000 );
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
            $('#odd_numbers').hide();
            $('#even_numbers').slideUp( 1000 ).delay( 10000 ).fadeIn( 6000 );
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
            $('#odd_numbers').hide();
            $('#even_numbers').slideUp( 1000 ).delay( 10000 ).fadeIn( 6000 );
            $('#glow').show();

            document.querySelector('#glow_1').style.animationIterationCount = "4";
            document.querySelector('#glow_2').style.animationIterationCount = "4";
            document.querySelector('#glow_3').style.animationIterationCount = "4";
            document.querySelector('#glow_4').style.animationIterationCount = "4";

            $('#glow').fadeOut( 15000 ).delay( 100).hide( 15000 );
        
        })

        /* click on two animation */
        $('#two').click(function() {
            $('#even_numbers').hide();
            $('#odd_numbers').slideUp( 1000 ).delay( 10000 ).fadeIn( 6000 );
            $('#glow').fadeIn();

            document.querySelector('#glow_1').style.animationIterationCount = "2";
            document.querySelector('#glow_2').style.animationIterationCount = "2";
            document.querySelector('#glow_3').style.animationIterationCount = "2";
            document.querySelector('#glow_4').style.animationIterationCount = "2";

            $('#glow').fadeOut( 15000 ).delay( 100).hide( 15000 );
        
        })

        /* click on four animation */
        $('#four').click(function() {
            $('#even_numbers').hide();
            $('#odd_numbers').slideUp( 1000 ).delay( 10000 ).fadeIn( 6000 );
            $('#glow').fadeIn();

            document.querySelector('#glow_1').style.animationIterationCount = "2";
            document.querySelector('#glow_2').style.animationIterationCount = "2";
            document.querySelector('#glow_3').style.animationIterationCount = "2";
            document.querySelector('#glow_4').style.animationIterationCount = "2";

            $('#glow').fadeOut( 15000 ).delay( 100).hide( 15000 );
        
        })

        /* click on six animation */
        $('#six').click(function() {
            $('#even_numbers').hide();
            $('#odd_numbers').slideUp( 1000 ).delay( 10000 ).fadeIn( 6000 );
            $('#glow').fadeIn();

            document.querySelector('#glow_1').style.animationIterationCount = "2";
            document.querySelector('#glow_2').style.animationIterationCount = "2";
            document.querySelector('#glow_3').style.animationIterationCount = "2";
            document.querySelector('#glow_4').style.animationIterationCount = "2";

            $('#glow').fadeOut( 15000 ).delay( 100).hide( 15000 );
        
        })

        /* click on eight animation */
        $('#eight').click(function() {
            $('#even_numbers').hide();
            $('#odd_numbers').slideUp( 1000 ).delay( 10000 ).fadeIn( 6000 );
            $('#glow').fadeIn();

            document.querySelector('#glow_1').style.animationIterationCount = "2";
            document.querySelector('#glow_2').style.animationIterationCount = "2";
            document.querySelector('#glow_3').style.animationIterationCount = "2";
            document.querySelector('#glow_4').style.animationIterationCount = "2";

            $('#glow').fadeOut( 15000 ).delay( 100).hide( 15000 );
        
        })



        /* click on three animation */
        $('#three').click(function() {
            $('#odd_numbers').hide();
            $('#glow').fadeIn();

            document.querySelector('#glow_1').style.animationIterationCount = "3";
            document.querySelector('#glow_2').style.animationIterationCount = "3";
            document.querySelector('#glow_3').style.animationIterationCount = "3";
            document.querySelector('#glow_4').style.animationIterationCount = "3";

            $('#glow').fadeOut( 16000 ).delay( 10 ).hide( 16000 );


            setTimeout(function() {
                var images = ['yoga_1.png', 'yoga_2.png', 'yoga_3.png', 'yoga_4.png', 'yoga_5.png', 'yoga_6.png', 'yoga_7.png', 'yoga_8.png', 'yoga_9.png', 'yoga_10.png'];

                $('<img src="images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#random_poses');
            
            }, 16100);
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

            $('#glow').fadeOut( 18000 ).delay( 10 ).hide( 18000 );


            setTimeout(function() {
                var images = ['yoga_1.png', 'yoga_2.png', 'yoga_3.png', 'yoga_4.png', 'yoga_5.png', 'yoga_6.png', 'yoga_7.png', 'yoga_8.png', 'yoga_9.png', 'yoga_10.png'];

                $('<img src="images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#random_poses');
            
            }, 18100);
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

            $('#glow').fadeOut( 20000 ).delay( 10 ).hide( 20000 );


            setTimeout(function() {
                var images = ['yoga_1.png', 'yoga_2.png', 'yoga_3.png', 'yoga_4.png', 'yoga_5.png', 'yoga_6.png', 'yoga_7.png', 'yoga_8.png', 'yoga_9.png', 'yoga_10.png'];

                $('<img src="images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#random_poses');
            
            }, 20100);
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

            $('#glow').fadeOut( 22000 ).delay( 10 ).hide( 22000 );


            setTimeout(function() {
                var images = ['yoga_1.png', 'yoga_2.png', 'yoga_3.png', 'yoga_4.png', 'yoga_5.png', 'yoga_6.png', 'yoga_7.png', 'yoga_8.png', 'yoga_9.png', 'yoga_10.png'];

                $('<img src="images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#random_poses');
            
            }, 22100);
        })
    
});