// Show gallery on click
$('.gallery-reveal').on('click', function(){
	$(this).siblings('.gallery-window').slideToggle();
});

// Change category header background clicked gallery image
$('.slide').on('click', function(evt) {
  evt.preventDefault();
  var $newImage = $(this).attr('href');
  $(this).parent().parent().siblings('.category-header').css('background-image', 'url(' + $newImage + ')');
});

// Smooth Scrolling for same=page anchors
// $(function() {
//   $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });

