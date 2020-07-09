import $ from 'jquery';

$('.vacancy__thumbler-toggle').click(function(e) {
  const parentBlock = $(e.target).parents('.vacancy');
  const title = parentBlock.children().find('.candidate__name');
  const thumbler = parentBlock.children().find('.vacancy__thumbler-toggle');
  const trash = parentBlock.children().find('.vacancy__trash');

  console.log(e.target);
  console.log(parentBlock);

  if ( thumbler.is(":checked")) {
    parentBlock.removeClass('transparent');
    title.removeClass('lightgray');
    trash.removeClass('ready');
  } else {
    parentBlock.addClass('transparent');
    title.addClass('lightgray');
    trash.addClass('ready');
  }
});
