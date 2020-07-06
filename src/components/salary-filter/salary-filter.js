import $ from 'jquery';
import rangesliderJs from 'rangeslider-js';

const leftSlider = $('.multi-range__left');
const rightSlider = $('.multi-range__right');

const upperSlider = document.querySelector('.multi-range__right');
const lowerSlider = document.querySelector('.multi-range__left');
let upperVal = parseInt(upperSlider.value);
let lowerVal = parseInt(lowerSlider.value);

  rangesliderJs.create(leftSlider, {
    polyfill: false,
    onSlide: (value, percent, position) => {
      document.querySelector('.salary-filter__salary-min').innerHTML = value;


      if (value > upperVal - 200) {
        upperSlider.value = value + 200;

        if (upperVal === upperSlider.max) {
          lowerSlider.value = parseInt(upperSlider.max) - 200;
        }

      }
    }
  });

  rangesliderJs.create(rightSlider, {
    polyfill: false,
    onSlide: (value, percent, position) => {
      document.querySelector('.salary-filter__salary-max').innerHTML = value;

      if (value < lowerVal + 200) {
        lowerSlider.value = value - 200;

        if (lowerVal === lowerSlider.min) {
          upperSlider.value = 200;
        }
      }
    }
  });
