$(document).ready(function(){
    $("#play-animation").click(function() {
        
    // Enlarge font size and resume
    $("h1").animate({fontSize: '2.5em'}, "slow")
    $("h1").animate({fontSize: '2em'}, "slow");

    // Change color and resume 
    $("h1").css("color", "#53B4E7")
    setTimeout(function() {
        $("h1").css("color", "#37352f"); 
    }, 1000);

    // Add border around picture
    $(".profile-img").css("border", "6px solid #53B4E7");
    });
});
