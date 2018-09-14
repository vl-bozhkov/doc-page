$(document).ready(function() {
  $('.js--nav-icon').click(function() {
    var nav = $('.js--mobile-nav');
    var icon = $('.js--nav-icon i');
    console.log(nav);
    console.log(icon);
    nav.slideToggle(200);

    if (icon.hasClass('ion-md-menu')) {
      icon.addClass('ion-md-close');
      icon.removeClass('ion-md-menu');
    } else {
      icon.addClass('ion-md-menu');
      icon.removeClass('ion-md-close');
    }
  });
});

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000
});
