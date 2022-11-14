$(document).ready(function(){
    $('#mainSlider').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        dots: true,
        prevArrow:'<div class="arrow"><button class="prev"><img src="assets/images/arrow-prev.png" alt="prev" /></button></div>',
        nextArrow:'<div class="arrow"><button class="next"><img src="assets/images/arrow-next.png" alt="next" /></button></div>',
        appendArrows: '.main-slider-controller .slider-arrows',
        appendDots: '.main-slider-controller .slider-dots',
        customPaging: function (slider, i) {
            return  (i + 1) + '&nbsp; / ' + '<span> &nbsp;' + slider.slideCount + '</span>';
        },
    }).on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        $('#mainSlider .main-slider-item .inner').removeClass('is-active');
        $('#mainSlider .slick-current .inner').addClass('is-active');
    });
    $('#mainSlider .slick-current .inner').addClass('is-active');
})