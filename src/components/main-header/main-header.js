import $ from 'jquery';

const url = document.location.pathname;

const isUser = $('.main-header__user');
if (isUser && url != '/registration.html') {
  isUser.addClass('logged');
} else {
  isUser.removeClass('logged');
}