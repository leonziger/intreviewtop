import $ from'jquery';
import rangesliderJs from 'rangeslider-js';

const leftSlider = $('.multi-range__left');
const rightSlider = $('.multi-range__right');

if ( leftSlider.length > 0 ) {

  rangesliderJs.create(leftSlider, {
    polyfill: false,
    onSlide: (value, percent, position) => {
      document.querySelector('.salary-filter__salary-min').innerHTML = value;
    }
  });

}

if ( rightSlider.length > 0 ) {

  rangesliderJs.create(rightSlider, {
    polyfill: false,
    onSlide: (value, percent, position) => {
      document.querySelector('.salary-filter__salary-max').innerHTML = value;
    }
  });

}