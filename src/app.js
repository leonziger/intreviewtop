window.$ = window.jQuery = require('jquery');
import 'slick-carousel';

import './components/main-header/main-header';
import './components/menu-toggle/menu-toggle';
import './components/reg-form/reg-form';

$('.more-info').click(function() {
  console.log('.more-info clicked');
  $('.more-info').toggleClass('active');

  if ($('.more-info').hasClass('active')) {
    $('.candidate__item-blocks').slideDown();
  } else {
    $('.candidate__item-blocks').slideUp();
  }
});

$('.more-applicants__slides').slick({
  dots: false,
  arrows: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,

  responsive: [
    {
      // breakpoint: 1099,
      // settings: {
      //   slidesToShow: 4,
      //   slidesToScroll: 1,
      // }
    }
  ]
});