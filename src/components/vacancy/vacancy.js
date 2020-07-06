import $ from 'jquery';

$('.vacancy__thumbler-toggle').click(function(e) {
  const parentBlock = $(e.target).parents('.vacancy');
  const title = parentBlock.children().find('.candidate__name');
  console.log(title);
  const thumbler = parentBlock.children().find('.vacancy__thumbler-toggle');

  if ( thumbler.is(":checked")) {
    parentBlock.removeClass('transparent');
    title.removeClass('lightgray');
  } else {
    parentBlock.addClass('transparent');
    title.addClass('lightgray');
  }
});