$(function(){$("#button, #close").click(function(){$("#modal").toggleClass("modal_active")}),$(window).scroll(function(){250<$(this).scrollTop()?($("#toTop").css("opacity","1"),$("#toTop").fadeIn()):$("#toTop").fadeOut()}),$("#toTop").click(function(){$("body, html").animate({scrollTop:0},500)})}),$(function(){$(".slider").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,prevArrow:$(".arrows__left"),nextArrow:$(".arrows__right"),responsive:[{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{autoplay:!1,slidesToShow:1,slidesToScroll:1}}]}),(new WOW).init(),$("#phone").mask("+7 (999) 999-99-99")});