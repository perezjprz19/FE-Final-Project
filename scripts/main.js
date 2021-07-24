
//SETS HEADER HEIGHT ON PAGE LOAD
$(document).ready(function(){
	$('.header').height($(window).height());
});

//ANIMATES THE HAMBURGER MENU
$('#hamburger').click(function(){
  $(this).toggleClass("open");
  $('.navbar').toggleClass("close");
});
$(window).scroll(function(){
  var fromTop = $(this).scrollTop()

})
