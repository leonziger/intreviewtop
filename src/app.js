window.$ = window.jQuery = require('jquery');
import 'jquery.nicescroll';
import 'slick-carousel';

import './components/main-header/main-header';
import './components/menu-toggle/menu-toggle';
import './components/reg-form/reg-form';

const moreInfo = $('.more-info');
const moreApplicantsSlides = $('.more-applicants__slides');
const applicantAnswersWrap = $('.applicant__answers-wrap');

moreInfo.click(function(e) {
  const candidateItemBlocks = $(this).parent().siblings('.candidate__item-blocks');

  $(this).toggleClass('active');

  if ($(this).hasClass('active')) {
    candidateItemBlocks.slideDown(function(){
      if (applicantAnswersWrap) {
        applicantAnswersWrap.getNiceScroll().resize();
      }
    });
      } else {
    candidateItemBlocks.slideUp(function() {
      if (applicantAnswersWrap) {
        applicantAnswersWrap.getNiceScroll().resize();
      }
    });
  }
});

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

applicantAnswersWrap.niceScroll(
  {
    cursorcolor:"#5B5CEE",
    cursorwidth:"8px",
    cursorborderradius:0
  }
);