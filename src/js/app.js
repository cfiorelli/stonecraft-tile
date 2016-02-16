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

// Show category overlay on hover
$('.category-header').mouseenter(function(){
   $(this).children('.category-header-overlay').fadeIn('slow');
}).mouseleave(function(){
  $(this).children('.category-header-overlay').fadeOut('slow');
});

// Calculate current image size
var $pureImageSize = parseInt($('.image').css('max-width').replace('px', ""));

// Account for default left/right margins
var $ImageSize = $pureImageSize + 4;

// # of images in each image slider
var $kitchenSliderLength = $('#kitchen-slider .slide').length;
var $bathSliderLength = $('#bath-slider .slide').length;
var $floorSliderLength = $('#floor-slider .slide').length;
var $fireplaceSliderLength = $('#fireplace-slider .slide').length;

// Dynamically set each image slider's length, depending on current # of images
$('#kitchen-slider').css('width', ($ImageSize * $kitchenSliderLength) + 'px');
$('#bath-slider').css('width', ($ImageSize * $bathSliderLength) + 'px');
$('#floor-slider').css('width', ($ImageSize * $floorSliderLength) + 'px');
$('#fireplace-slider').css('width', ($ImageSize * $fireplaceSliderLength) + 'px');

