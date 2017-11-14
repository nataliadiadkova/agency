 
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;
        
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(document).ready(function(){
    $(".arrow").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;
        
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
 $('.photo-recipes').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
 });
});
$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 200,
        max: 2000,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});
$(function(){
    var navbar = $('.navbar');
    $(window).scroll(function(){
        if($(window).scrollTop() <= 113){
       		navbar.addClass("header-height");
        } else {
       		navbar.removeClass("header-height");
          	navbar.addClass("header-top"); 
        }
    });  
})