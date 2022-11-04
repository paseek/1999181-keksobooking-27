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

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
});
// ------- Валидация заголовка ------- //
const validateTitle = (value) => value.length >= 30 && value.length <= 100;

// не работает переменная с текущей длинной введенного текста ${title.value.length}
const getTitleErrorMessage = `Длина заголовка должна быть от ${MIN_TITLE_LENGTH} до ${MAX_TITLE_LENGTH} символов. У вас ${title.value.length}`;

pristine.addValidator(
  title,
  validateTitle,
  getTitleErrorMessage,
);

// ------- Валидация цены ------- //
/* Не могу понять почему после загрузки страницы,
не меняя тип жилья, проверка цены не происходит */
const priceOption = {
  'bungalow': '0',
  'flat' : '1000',
  'hotel' : '3000',
  'house' : '5000',
  'palace' : '10000',
};

const getNumberMinPrice = () => Number(priceOption[type.value]);

const onTypeChange = () => {
  price.placeholder = priceOption[type.value];
  price.min = getNumberMinPrice(); //Что такое min.price?
};

// Почему без Number не работает?
const validatePrice = () => price.value >= Number(price.min);

const getPriceErrorMessage = () => `Мин.цена за "${type.options[type.selectedIndex].text}" - ${price.min} рублей!`;

pristine.addValidator(
  price,
  validatePrice,
  getPriceErrorMessage,
);

// ------- Валидация количества комнат ------- //
/* Не доконца понимаю как работает код.
Так же не происходит валидация если после загрузкистраницы просто вбить цену за ночь, не меняя тип жилья */

const onCapacityChange = () => {
  pristine.validate(capacity);
  pristine.validate(rooms);
};

const onRoomsChange = () => {
  pristine.validate(capacity);
  pristine.validate(rooms);
};

const roomsOption = {
  1 : ['1'],
  2 : ['2', '1'],
  3 : ['3', '2', '1'],
  100 : ['0'],
};

const validateCapacity = () => roomsOption[rooms.value].includes(capacity.value);

const getCapacityErrorMessage = () => 'Недопустимое количество комнат';

pristine.addValidator(
  capacity,
  validateCapacity,
  getCapacityErrorMessage,
);

const onformSubmit = (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if (isValid) {
    adForm.submit();
  }
};

adForm.addEventListener('submit', onformSubmit);


// ------- Включение / выключение формы ------- //
const makeFormInactive = () => {
  adForm.classList.add('ad-form--disabled');

  adFormFieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
  type.removeEventListener('change', onTypeChange);
  price.removeEventListener('change', onTypeChange);
  capacity.removeEventListener('change', onCapacityChange);
  rooms.removeEventListener('change', onRoomsChange);

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
