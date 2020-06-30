import $ from 'jquery';

const dropdownIcon = $('.dropdown__icon');

dropdownIcon.click(function() {
  const dropdownContainer = $(this).siblings('.dropdown__container');

    dropdownContainer.toggle();
    $(this).toggleClass('dropdown_active');

});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".dropdown").length) {
    $('.dropdown__container').hide();

    if ($('.dropdown__icon').hasClass('dropdown_active')) {
      $('.dropdown__icon').removeClass('dropdown_active');
    }
  }
  e.stopPropagation();
});