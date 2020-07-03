import $ from 'jquery';

const wFormInputFile = $('.worksheet-form__input-file');

// wFormInputFile.change(function(){
//   const filename = $(this).val().replace(/.*\\/, "");
//
//   if ( filename.length > 0 ) {
//     $('.worksheet-form__input').html(filename);
//     $('.worksheet-form__input-wrapper').addClass('after-off');
//   }
// });

wFormInputFile.change(({ target: { files } }) => handleFiles(files));

function handleFiles(files) {
  let arr = [ files ];
  let nameOfFile = arr[0][0].name;

  const filename = nameOfFile.replace(/.*\\/, "");

  if ( filename.length > 0 ) {
    $('.worksheet-form__input').html(filename);
    $('.worksheet-form__input-wrapper').addClass('after-off');
  }
}