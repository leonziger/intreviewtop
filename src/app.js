window.$ = window.jQuery = require('jquery');
import 'jquery.nicescroll';
import 'slick-carousel';

import './components/main-header/main-header';
import './components/menu-toggle/menu-toggle';
import './components/reg-form/reg-form';

const moreInfo = $('.more-info');
const moreApplicantsSlides = $('.more-applicants__slides');
const candidateItemBlocks = $('.candidate__item-blocks');
const applicantAnswersWrap = $('.applicant__answers-wrap');

moreInfo.click(function() {
  moreInfo.toggleClass('active');

  if (moreInfo.hasClass('active')) {
    candidateItemBlocks.slideDown(function(){
      applicantAnswersWrap.getNiceScroll().resize();
    });
      } else {
    candidateItemBlocks.slideUp(function() {
      applicantAnswersWrap.getNiceScroll().resize();
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
      breakpoint: 872,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
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