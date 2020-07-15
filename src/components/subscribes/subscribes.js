import $ from 'jquery';

$('.subscribes__activation-title').click(function(e){
  const parentBlock = $(e.target).parents('.subscribes__block');
  const title = parentBlock.children().find('.subscribes__activation-title');
  const thumbler = parentBlock.children().find('.subscribes__activation-toggle');
  const add = parentBlock.children('.subscribes__add');
  const form = parentBlock.children('.subscribes-form');

  if ( title.hasClass('activated') ) {
    title.removeClass('activated');
    thumbler.prop('checked', false);
    add.addClass('gray-block');
    form.addClass('transparent');
  } else {
    title.addClass('activated');
    thumbler.prop('checked', true);
    add.removeClass('gray-block');
    form.removeClass('transparent');
  }

});

$('.subscribes__activation-toggle').click(function(e) {
  const parentBlock = $(e.target).parents('.subscribes__block');
  const title = parentBlock.children().find('.subscribes__activation-title');
  const thumbler = parentBlock.children().find('.subscribes__activation-toggle');
  const add = parentBlock.children('.subscribes__add');
  const form = parentBlock.children('.subscribes-form');

  if ( thumbler.is(":checked")) {
    add.removeClass('gray-block');
    form.removeClass('transparent');
  } else {
    add.addClass('gray-block');
    form.addClass('transparent');
  }
});

$('.subscribes__add').click(function(e){
  const parentBlock = $(e.target).parents('.subscribes__block');
  const add = parentBlock.children('.subscribes__add');

  if( add.length > 0) {
    add.toggleClass('subscribed');
  }
});