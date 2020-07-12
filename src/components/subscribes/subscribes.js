import $ from 'jquery';

$('.subscribes__activation-title').click(function(e){
  const parentBlock = $(e.target).parents('.subscribes__block');
  const title = parentBlock.children().find('.subscribes__activation-title');
  const thumbler = parentBlock.children().find('.subscribes__activation-toggle');
  const form = parentBlock.children('.subscribes-form');

  if ( title.hasClass('activated') ) {
    title.removeClass('activated');
    thumbler.prop('checked', false);
    form.addClass('transparent');
  } else {
    title.addClass('activated');
    thumbler.prop('checked', true);
    form.removeClass('transparent');
  }

});

$('.subscribes__activation-toggle').click(function(e) {
  const parentBlock = $(e.target).parents('.subscribes__block');
  const title = parentBlock.children().find('.subscribes__activation-title');
  const thumbler = parentBlock.children().find('.subscribes__activation-toggle');
  const form = parentBlock.children('.subscribes-form');

  if ( thumbler.is(":checked")) {
    form.removeClass('transparent');
  } else {
    form.addClass('transparent');
  }
});