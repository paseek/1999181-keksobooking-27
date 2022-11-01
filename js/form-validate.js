const adForm = document.querySelector('.ad-form');
const price = adForm.querySelector('#price');
const type = adForm.querySelector('#type');

const priceSettings = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element--invalid',
}, true);

const getTypeChange = () => {
  price.placeholder = priceSettings[type.value];
  price.min = priceSettings[type.value];
  price.dataset.pristineMinMessage = `минимальное значение ${priceSettings[type.value]}`;
  pristine.validate(price);
};

type.addEventListener('change', getTypeChange);
price.addEventListener('change', getTypeChange);

const validateTitle = (value) => value.length >= 30 && value.length <= 100;

pristine.addValidator(
  adForm.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов',
);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
