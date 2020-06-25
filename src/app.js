window.$ = window.jQuery = require('jquery');
import 'jquery.nicescroll';
import 'slick-carousel';
import 'ion-rangeslider';

import './components/main-header/main-header';
import './components/menu-toggle/menu-toggle';
import './components/rangeslider/rangeslider';
import './components/reg-form/reg-form';

const filterTitle = $('.filter__title');
const moreInfo = $('.more-info');
const moreApplicantsSlides = $('.more-applicants__slides');
const applicantAnswersWrap = $('.applicant__answers-wrap');

filterTitle.click(function(e) {
  const filterBody = $(this).siblings('.filter__body');

  $(this).toggleClass('title_active');

  if ($(this).hasClass('title_active')) {
    filterBody.slideDown();
  } else {
    filterBody.slideUp();
  }
});

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

applicantAnswersWrap.niceScroll({
    cursorcolor:"#5B5CEE",
    cursorwidth:"8px",
    cursorborderradius:0
  });

// $('.filter__rangeslider').rangeslider({
//   polyfill: false,
//   onSlide: function(position, value) {
//     videoList.css({
//       transform: `translateX(-${value}px)`
//     });
//   }
// });

// $(".js-range-slider").ionRangeSlider({
//   type: "double",
//   grid: true,
//   min: 0,
//   max: 1000,
//   from: 200,
//   to: 800,
//   prefix: "$"
// });