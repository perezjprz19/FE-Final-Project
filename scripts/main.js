//SETS HEADER HEIGHT ON PAGE LOAD
$(document).ready(function() {
  $('.header').height($(window).height());

});

//ANIMATES THE HAMBURGER MENU
$('#hamburger').click(function() {
  $(this).toggleClass("open");
  $('.navbar').toggleClass("close");
});

//ANIMATES "LET'S TALK" TEXT IN ABOUT SECTION ON FIRST CLICK OF ABOUT LINK IN NAV
$(document).ready(function() {

  $('.about-link').click(function() {
    $('.contact').css("animation", "bounce 4s");
  });
});

//TOGGLES SHOWS OR HIDES THE CONTACT FORM IN THE ABOUT SECTION.
$('.contact').click(function() {
  $('.contact-form').toggleClass("form-hidden");
});
