import {
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  priceOption,
  roomsOption,
} from './const.js';

const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');

const title = adForm.querySelector('#title');
const type = adForm.querySelector('#type');
const price = adForm.querySelector('#price');
const capacity = adForm.querySelector('#capacity');
const rooms = adForm.querySelector('#room_number');
const mapFilters = document.querySelector('.map__filters');
const mapFilter = mapFilters.querySelectorAll('.map__filter');
const mapFeatures = mapFilters.querySelector('.map__features');
const mapElements = [...mapFilter, mapFeatures];

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
});

const validateTitle = (value) => value.length >= 30 && value.length <= 100;

const getTitleErrorMessage = () => `Длина заголовка должна быть от ${MIN_TITLE_LENGTH} до ${MAX_TITLE_LENGTH} символов. Cейчас ${title.value.length} символов`;

pristine.addValidator(
  title,
  validateTitle,
  getTitleErrorMessage,
);

const getNumberMinPrice = () => Number(priceOption[type.value]);

const validatePrice = () => {
  price.min = getNumberMinPrice();

  return price.value >= Number(price.min);
};

const getPriceErrorMessage = () => `Мин.цена за "${type.options[type.selectedIndex].text}" - ${price.min} рублей!`;

pristine.addValidator(
  price,
  validatePrice,
  getPriceErrorMessage,
);

const onTypeChange = () => {
  price.placeholder = priceOption[type.value];
  pristine.valadate(price);
};

const validateCapacity = () => roomsOption[rooms.value].includes(capacity.value);

const getCapacityErrorMessage = () => 'Недопустимое количество комнат';

pristine.addValidator(
  capacity,
  validateCapacity,
  getCapacityErrorMessage,
);

const onCapacityChange = () => pristine.validate(capacity);
const onRoomsChange = () => pristine.validate(capacity);

const onformSubmit = (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if (isValid) {
    adForm.submit();
  }
};

const makeFormInactive = () => {
  adForm.classList.add('ad-form--disabled');

  adFormFieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
  type.removeEventListener('change', onTypeChange);
  price.removeEventListener('change', onTypeChange);
  capacity.removeEventListener('change', onCapacityChange);
  rooms.removeEventListener('change', onRoomsChange);
  adForm.removeEventListener('submit', onformSubmit);

};

const makeFormActive = () => {
  adForm.classList.remove('ad-form--disabled');

  adFormFieldsets.forEach((element) => {
    element.disabled = false;
  });
  type.addEventListener('change', onTypeChange);
  price.removeEventListener('change', onTypeChange);
  capacity.addEventListener('change', onCapacityChange);
  rooms.addEventListener('change', onRoomsChange);
  adForm.addEventListener('submit', onformSubmit);
};

const makeMapInactive = () => {
  mapFilters.classList.add('map__filters--disabled');

  mapElements.forEach((element) => {
    element.disabled = true;
  });
};

const makeMapActive = () => {
  mapFilters.classList.remove('map__filters--disabled');

  mapElements.forEach((element) => {
    element.disabled = false;
  });
};


export { makeFormInactive, makeFormActive, makeMapInactive, makeMapActive };
