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
