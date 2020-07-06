import $ from 'jquery';

const wFormInputFile = $('.worksheet-form__input-file');

wFormInputFile.change(({ target: { files } }) => handleFiles(files));

function handleFiles(files) {
  const arr = [ files ];

  const filesList = $('.worksheet-form__files');
  const div = document.createElement('div');

  filesList.addClass('files-list');
  div.textContent = arr[0][0].name;
  div.className = 'worksheet-form__files-item';
  filesList.html('');
  filesList.append(div);

  $(div).click(function(){
    const currentIndex = $(this).index();

    arr.splice(currentIndex, 1);
    $(this).remove();
    filesList.html('Виберiть файл з CV');
  });
}