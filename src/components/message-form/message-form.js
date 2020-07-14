import $ from 'jquery';

const mesFormInputFile = $('.messages-form__input-file');

if (mesFormInputFile.length > 0) {
  mesFormInputFile.change(({ target: { files } }) => handleFiles(files));
}

function handleFiles(files) {
  const arr = [ files ];

  const filesList = $('.messages-form__files');
  const div = document.createElement('div');

  filesList.addClass('files-list');
  div.textContent = arr[0][0].name;
  div.className = 'messages-form__files-item';
  filesList.html('');
  filesList.append(div);

  $(div).click(function(){
    const currentIndex = $(this).index();

    arr.splice(currentIndex, 1);
    $(this).remove();
  });
}