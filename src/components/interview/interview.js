import $ from 'jquery';
import vex from 'vex-js';

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

if ( $('.scheduled-interviews__button').length > 0 ) {

  $('.scheduled-interviews__button').click(function (e) {
    e.preventDefault();
    const modal = $(`[data-modal=callback]`);

    if (!modal.length) {
      return console.error('Modal is not exist!');
    }

    vex.open({
      unsafeContent: modal.html(),
      closeClassName: 'modal__close',

      afterOpen: function() {
        const applicantAnswersWrap = $('.callback-form__candidates');

        if (applicantAnswersWrap.length > 0) {
          applicantAnswersWrap.niceScroll({
            cursorcolor:"#5B5CEE",
            cursorwidth:"8px",
            cursorborderradius:0
          });
        }
      }
    });
  });
}
