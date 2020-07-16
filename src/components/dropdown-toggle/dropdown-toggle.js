import $ from 'jquery';

const dropdownIcon = $('.dropdown-toggle__icon');

if (dropdownIcon.length > 0) {

  dropdownIcon.click(function() {
    const dropdownContainer = $(this).siblings('.dropdown-toggle__container');

    dropdownContainer.toggle();
    $(this).toggleClass('dropdown_active');
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest('.dropdown-toggle').length) {
      $('.dropdown-toggle__container').hide();

      if ($('.dropdown-toggle__icon').hasClass('dropdown_active')) {
        $('.dropdown-toggle__icon').removeClass('dropdown_active');
      }
    }
    e.stopPropagation();
  });
}