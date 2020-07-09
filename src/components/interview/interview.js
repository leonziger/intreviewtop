import $ from 'jquery';

const interviewsSlides = $('.scheduled-interviews__slides');

if (interviewsSlides.length > 0) {
  interviewsSlides.slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
}
