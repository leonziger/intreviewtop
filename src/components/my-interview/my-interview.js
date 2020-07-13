import $ from 'jquery';

$('.my-interview__activation-toggle').click(function(e) {
  const parentBlock = $(e.target).parents('.my-interview__item');
  const thumbler = parentBlock.children().find('.my-interview__activation-toggle');

  if ( thumbler.is(":checked")) {
    parentBlock.removeClass('transparent');
  } else {
    parentBlock.addClass('transparent');
  }
});