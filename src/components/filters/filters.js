import $ from 'jquery';

const filterTitle = $('.filter__title');
const moreInfo = $('.more-info');

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

applicantAnswersWrap.niceScroll({
  cursorcolor:"#5B5CEE",
  cursorwidth:"8px",
  cursorborderradius:0
});
