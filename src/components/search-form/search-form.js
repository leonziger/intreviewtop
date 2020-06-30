import $ from 'jquery';

const searchSubscribe = $('.search-form__subscribe');

if (searchSubscribe.length > 0 ) {
    searchSubscribe.on('click', function(){
        searchSubscribe.toggleClass('subscribed');
    });
}