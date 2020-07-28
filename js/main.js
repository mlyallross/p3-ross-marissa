$(document).ready(function() {
    /* HIDE ANIMATION AND NUMBERS ON PAGE LOAD */
        $('#numbers').hide();
        $('#glow').hide();

    /* HIDE/SHOW ELEMENTS | FORTUNE OPTIONS CODE */   
        /* click on purple animation */
        $('#purple').click(function() {
            $('#colors').hide();
            $('#numbers').show();
            $('#glow').show();

            document.querySelector('#glow_1').style.animationIterationCount = "7";
            document.querySelector('#glow_2').style.animationIterationCount = "7";
            document.querySelector('#glow_3').style.animationIterationCount = "7";
            document.querySelector('#glow_4').style.animationIterationCount = "7";

        });
    
        /* click on white animation */
        $('#white').click(function() {
            $('#colors').hide();
            $('#numbers').show();
            $('#glow').show();

            document.querySelector('#glow_1').style.animationIterationCount = "5";
            document.querySelector('#glow_2').style.animationIterationCount = "5";
            document.querySelector('#glow_3').style.animationIterationCount = "5";
            document.querySelector('#glow_4').style.animationIterationCount = "5";

        })

        /* click on black animation */
        $('#black').click(function() {
            $('#colors').hide();
            $('#numbers').show();
            $('#glow').show();

            document.querySelector('#glow_1').style.animationIterationCount = "5";
            document.querySelector('#glow_2').style.animationIterationCount = "5";
            document.querySelector('#glow_3').style.animationIterationCount = "5";
            document.querySelector('#glow_4').style.animationIterationCount = "5";
        
        })

        /* click on blue animation */
        $('#blue').click(function() {
            $('#colors').hide();
            $('#numbers').show();
            $('#glow').show();

            document.querySelector('#glow_1').style.animationIterationCount = "4";
            document.querySelector('#glow_2').style.animationIterationCount = "4";
            document.querySelector('#glow_3').style.animationIterationCount = "4";
            document.querySelector('#glow_4').style.animationIterationCount = "4";
        
        })

        /* click on one animation */
        $('#one').click(function() {
            $('#numbers').hide();
            $('#poses').show();
        })

        /* click on two animation */
        $('#two').click(function() {
            $('#numbers').hide();
            $('#poses').show();
        })

        /* click on three animation */
        $('#three').click(function() {
            $('#numbers').hide();
            $('#poses').show();
        })

        /* click on four animation */
        $('#four').click(function() {
            $('#numbers').hide();
            $('#poses').show();
        })

 });

