import $ from 'jquery';
import 'jquery-validation/dist/jquery.validate';
import 'jquery-validation/dist/localization/messages_uk';

const gpForm = $('.reg-form');
const fieldErrorClassName = 'reg-form__field-error';
const fieldValidClassName = 'reg-form__field-valid';

$.validator.addMethod('condition', function(value, element, condition) {
  if (typeof condition !== 'function') {
    throw new Error('"condition" rule must return a function');
  }
  return this.optional(element) || condition(value);
});

const gpValidator = gpForm.validate({
  rules: {
    'password': {
      required: true,
      rangelength: [6, 10]
    },
    'email': {
      required: true,
      condition: () => (value) => {
        const expression = new RegExp(/^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/);
        return expression.test(value);
      }
    },
  },

  messages: {
    'password': {
      required: 'Обов\'язкове поле для заповнення',
      condition: 'Будь ласка, введiть пароль, 2-10 символiв'
    },
    'email': {
      required: 'Обов\'язкове поле для заповнення',
      condition: 'Будь ласка, введiть коректний e-mail'
    }
  },

  highlight: (element) => {
    $(element).addClass(fieldErrorClassName).removeClass(fieldValidClassName);
  },

  unhighlight: (element) => {
    $(element).removeClass(fieldErrorClassName).addClass(fieldValidClassName);
  },

  errorPlacement: function(error, element) {
    error.addClass('reg-form__error-message');
    error.insertAfter(element);
  },

  submitHandler: function(form) {
    gpForm.trigger('reset');
    // openThanksModal();
  }
});

gpForm.click( function() {
  gpValidator.form();
});
