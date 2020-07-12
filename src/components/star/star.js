import $ from 'jquery';

$('.star').click(function(e) {
    const starParent = $(e.target).parents('.candidate__rating');
    const star = starParent.children('.star');
    const starContainer = starParent.children().find('.star__container');
    star.toggleClass('star_rated');
  });