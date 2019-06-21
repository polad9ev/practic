// MODAL
$(function() {
  $('#button, #close').click(function() {
    $('#modal').toggleClass('modal_active');
  });

  $(window).scroll(function() {
    if($(this).scrollTop() > 250) {
      $('#toTop').css('opacity' , '1');
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });

  $('#toTop').click(function() {
    $('body, html').animate({scrollTop: 0}, 500);
  });
});

// SLIDER
$(function() {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: $(".arrows__left"),
    nextArrow: $(".arrows__right"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1 
        }
      }
    ]
  });
});

// ANIMATE/wow.js
new WOW().init();

