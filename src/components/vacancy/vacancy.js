import $ from 'jquery';

$('.vacancy__thumbler-toggle').click(function(e) {
  const parentBlock = $(e.target).parents('.vacancy');
  const title = parentBlock.children().find('.candidate__name');
  const thumbler = parentBlock.children().find('.vacancy__thumbler-toggle');
  const recruiter = parentBlock.children().find('.vacancy__recruiter');
  const comments = parentBlock.children().find('.vacancy__comments');
  const trash = parentBlock.children().find('.vacancy__trash');
  const star = parentBlock.children().find('.star');

  if ( thumbler.is(":checked")) {
    title.removeClass('lightgray');
    recruiter.removeClass('lightgray');
    comments.removeClass('lightgray');
    trash.removeClass('ready');

    if (star.length > 0 ) {
      star.removeClass('gray');
    }
  } else {
    title.addClass('lightgray');
    recruiter.addClass('lightgray');
    comments.addClass('lightgray');
    trash.addClass('ready');

    if (star.length > 0 ) {
      star.addClass('gray');
    }
  }
});
