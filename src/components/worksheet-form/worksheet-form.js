import $ from 'jquery';

const wFormInputFile = $('.worksheet-form__input-file');

if (wFormInputFile.length > 0) {
  wFormInputFile.change(({ target: { files } }) => handleFiles(files));
}

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

const tabs = $('.worksheet-form__tabs');

if (tabs.length > 0) {
  tabs.click(function(e){
    const target = e.target || window.event.srcElement;
    console.log(target);
    const tabInterview  = $(e.target).siblings('.tab-interview');
    const parentContainer = $(e.target).parents('.candidates-profile__worksheet-container');

    if (tabInterview.length > 0) {
      parentContainer.removeClass('fraimed-container');
    }  else {
      parentContainer.addClass('fraimed-container');
    }
  });
}