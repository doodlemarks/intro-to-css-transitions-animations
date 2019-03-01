// $(document).keyup(function(e){
//   if (e.which == 40) {
//
//     var windowHeight = $(window).height();
//     var currentScroll = $(document).scrollTop();
//     var scrollPlusHeight = windowHeight + currentScroll;
//
// 		$('html, body').animate({ scrollTop: scrollPlusHeight }, 500);
//
//     event.preventDefault();
//   }
//
//   if (e.which == 38) {
//     var windowHeight = $(window).height();
//     var currentScroll = $(document).scrollTop();
//     var scrollMinusHeight = currentScroll - windowHeight;
//
//     $('html, body').animate({ scrollTop: scrollMinusHeight }, 500);
//
//     event.preventDefault();
//   }
// });
//
//
// if ('scrollRestoration' in history) {
//   history.scrollRestoration = 'manual';
// }


$(document).ready(function() {
  $('#open-flyout').click(function() {
    $('.flyout').toggleClass('show');
  });

  $('.approve').click(function() {
    $(this).parent('li').addClass('status approved');
  });

  $('.deny').click(function() {
    $(this).parent('li').addClass('status denied');
  });
});
