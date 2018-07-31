$(document).ready(function() {
  /* Navigation scroll */
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

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
