// Show gallery on click
$('.gallery-reveal').on('click', function() {
  $(this).siblings('.gallery-window').slideToggle();
});

// Change category header background to clicked gallery image
$('.slide').on('click', function(evt) {
  evt.preventDefault();
  var $newImage = $(this).attr('href');
  $(this).parent().parent().siblings('.category-header').css('background-image', 'url(' + $newImage + ')');
});

// Show category overlay on hover
$('.category-header').mouseenter(function() {
  $(this).children('.category-header-overlay').fadeIn('slow');
}).mouseleave(function() {
  $(this).children('.category-header-overlay').fadeOut('slow');
});

// Calculate current image size and account for default left/right margins
function sliderWidth(el) {
  var $imageSize = parseInt($('.image').css('max-width').replace('px', "")) + 4;
  return ($(el + ' .slide').length * $imageSize) + 'px';
}

// Dynamically set each image slider's length, depending on current # of images
$('#kitchen-slider').css('width', sliderWidth('#kitchen-slider'));
$('#bath-slider').css('width', sliderWidth('#bath-slider'));
$('#floor-slider').css('width', sliderWidth('#floor-slider'));
$('#fireplace-slider').css('width', sliderWidth('#fireplace-slider'));
