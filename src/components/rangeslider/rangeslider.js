window.$ = window.jQuery = require('jquery');

function addSeparator(nStr) {
  nStr += '';
  let x = nStr.split('.');
  let x1 = x[0];
  let x2 = x.length > 1 ? '.' + x[1] : '';
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + '.' + '$2');
  }
  return x1 + x2;
}

function rangeInputChangeEventHandler(e){
  const rangeGroup = $(this).attr('name'),
    minBtn = $(this).parent().children('.min'),
    maxBtn = $(this).parent().children('.max'),
    range_min = $(this).parent().children('.range_min'),
    range_max = $(this).parent().children('.range_max');
  let minVal = parseInt($(minBtn).val()),
    maxVal = parseInt($(maxBtn).val()),
    origin = $(this).context.className;

  if(origin === 'min' && minVal > maxVal-5){
    $(minBtn).val(maxVal-5);
  }
  minVal = parseInt($(minBtn).val());
  $(range_min).html(addSeparator(minVal*1000) + ' €');


  if(origin === 'max' && maxVal-5 < minVal){
    $(maxBtn).val(5+ minVal);
  }
  maxVal = parseInt($(maxBtn).val());
  $(range_max).html(addSeparator(maxVal*1000) + ' €');
}

$('input[type="range"]').on( 'input', rangeInputChangeEventHandler);