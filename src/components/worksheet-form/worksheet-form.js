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

const tab = $('.worksheet-form__tab');
const content = $('.worksheet-form__content');

tab.each(function() {
  tab.click(function() {
    const index = $(this).index();
    const parentTabs = tab.eq(index).parents('.worksheet-form__tabs');
    const parentContainer = tab.eq(index).parents('.candidates-profile__worksheet-container');
    tab.eq(index).addClass('active-tab').siblings().removeClass('active-tab');
    content.eq(index).addClass('active-content').siblings().removeClass('active-content');

    if (index === 2) {
      if ( parentContainer.hasClass('fraim') ) {
        parentContainer.removeClass('fraim');
        parentTabs.addClass('fraim')
      }
    } else {
      parentContainer.addClass('fraim');
      parentTabs.removeClass('fraim')
    }

  });
});