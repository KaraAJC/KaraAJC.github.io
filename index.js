$( document ).ready(function(){
  // to animate sideNav on small screens
  $(".button-collapse").sideNav({
    closeOnClick: true,
    menuWidth: 200
  });
  // to animate parrallax
  $('.parallax').parallax();

  // hidden at first, if the page is scrolled enough, show the button.
  $('.scrollup').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
  });

  // to scroll to the top of the page
  $('.scrollup').click(function () {
    console.log("going up...")
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
  });
})