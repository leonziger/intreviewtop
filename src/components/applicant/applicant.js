import $ from 'jquery';

const moreApplicantsSlides = $('.more-applicants__slides');

if (moreApplicantsSlides.length > 0) {
  moreApplicantsSlides.slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 3,
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
