import $ from 'jquery';

const tab = $('.candidates-settings__tab');
const content = $('.candidates-settings__content');

tab.each(function() {
  tab.click(function() {
    const index = $(this).index();
    tab.eq(index).addClass('active-tab').siblings().removeClass('active-tab');
    content.eq(index).addClass('active-content').siblings().removeClass('active-content');
  });
});
