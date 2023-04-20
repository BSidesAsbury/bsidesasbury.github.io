
 /* jQuery Pre loader
  -----------------------------------------------*/
  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


/* Mobile Navigation
    -----------------------------------------------*/
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-img").addClass("navbar-img-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-img").removeClass("navbar-img-collapse");
    }
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


 /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#intro').parallax("100%", 0.1);
    // $('#overview').parallax("100%", 0.3);
    // $('#detail').parallax("100%", 0.2);
    // $('#video').parallax("100%", 0.3);
    // $('#speakers').parallax("100%", 0.1);
    // $('#program').parallax("100%", 0.2);
    // $('#register').parallax("100%", 0.1);
    // $('#faq').parallax("100%", 0.3);
    // $('#venue').parallax("100%", 0.1);
    // $('#sponsors').parallax("100%", 0.3);
    // $('#contact').parallax("100%", 0.2);
    $('#mailinglist').parallax("100%", 0.1);

  }
  initParallax();


  /* Owl Carousel
  -----------------------------------------------*/
  // $(document).ready(function() {
  //   $("#owl-speakers").owlCarousel({
  //     autoPlay: 6000,
  //     items : 4,
  //     itemsDesktop : [1199,2],
  //     itemsDesktopSmall : [979,1],
  //     itemsTablet: [768,1],
  //     itemsTabletSmall: [985,2],
  //     itemsMobile : [479,1],
  //   });
  // });


  /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })

      // TODO: Fix this later
      $('.smoothScroll').click(function(){
        if((typeof $(this).attr('href')) !== 'undefined') { 
          $('html, body').animate({
          'scrollTop': $($(this).attr('href')).offset().top
          }, 1000);
        }
    });

  /* Form submission
  -----------------------------------------------*/

  $("#subscribeform").submit(function(e) {

    e.preventDefault();
    var form = $(this);
    var actionUrl = form.attr('action');
    if ($('#email').val().trim() == '') {
      $('#subscribe-response').text('Please enter an email address.');
    } else {
      $.ajax({
        type: "POST",
        url: actionUrl,
        data: form.serialize(),
        success: function(data) {
          console.log(data)
          if (data.hasOwnProperty('success') && data.success == 'true') {
            $('#subscribe-response').text('Got it! Thanks for signing up!');
            $('#email').val('');
          } else {
            if (data.hasOwnProperty('error')) {
              $('#subscribe-response').text(data.error);
            } else {
              $('#subscribe-response').text('This email could not be subscribed at this time. Please try again later or contact newsletter@bsidesnj.net if this error persists.');
            }
            
          }
        },
        error: function(data) {
          $('#subscribe-response').text('This email could not be subscribed at this time. Please try again later or contact newsletter@bsidesnj.net if this error persists.');
      }
    });
    }
    
    
  });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

