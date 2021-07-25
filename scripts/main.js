
//SETS HEADER HEIGHT ON PAGE LOAD
$(document).ready(function(){
	$('.header').height($(window).height());

});

//ANIMATES THE HAMBURGER MENU
$('#hamburger').click(function(){
  $(this).toggleClass("open");
  $('.navbar').toggleClass("close");
});

//ANIMATES "LET'S TALK" TEXT IN ABOUT SECTION ON FIRST CLICK OF ABOUT LINK IN NAV
$(document).ready(function(){

  $('.about-link').click(function(){
    $('#contact').css("animation","bounce 4s");
  });
});

$('.contact').click(function(){
  $('#contactForm').toggleClass("form-hidden");
});
