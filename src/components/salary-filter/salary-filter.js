import $ from 'jquery';
import rangesliderJs from 'rangeslider-js';

const leftSlider = $('.multi-range__left');
const rightSlider = $('.multi-range__right');

if (leftSlider.length > 0) {
  rangesliderJs.create(leftSlider, {
    polyfill: false,
    onSlide: function(position, value) {
      document.querySelector('.salary-filter__salary-min').innerHTML = position;
    }
  });

  if (rightSlider.length > 0) {
    rangesliderJs.create(rightSlider, {
      polyfill: false,
      onSlide: function (position, value) {
        document.querySelector('.salary-filter__salary-max').innerHTML = position;
      }
    });
  }
}

//   const lowerSlider = document.querySelector('#lower');
//   const upperSlider = document.querySelector('#upper');
//   let lowerVal = parseInt(lowerSlider.value);
//   let upperVal = parseInt(upperSlider.value);
//
// upperSlider.oninput = function() {
//   lowerVal = parseInt(lowerSlider.value);
//   upperVal = parseInt(upperSlider.value);
//
//   if (upperVal < lowerVal + 4) {
//     lowerSlider.value = upperVal - 4;
//
//     if (lowerVal === lowerSlider.min) {
//       upperSlider.value = 4;
//     }
//   }
// };


// lowerSlider.oninput = function() {
//   lowerVal = parseInt(lowerSlider.value);
//   upperVal = parseInt(upperSlider.value);
//
//   if (lowerVal > upperVal - 4) {
//     upperSlider.value = lowerVal + 4;
//
//     if (upperVal === upperSlider.max) {
//       lowerSlider.value = parseInt(upperSlider.max) - 4;
//     }
//
//   }
// };