import { sendData } from './api.js';

// import { resetMap } from './map.js';

import { showErrorMessage, showSuccessMessage } from './modal.js';

import {
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  priceOption,
  roomsOption,
  MAX_PRICE,
  // DEFAULTLAT,
  // DEFAULTLNG,
  DEF_COORDINATES,
} from './const.js';

const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');

const title = adForm.querySelector('#title');
const type = adForm.querySelector('#type');
const price = adForm.querySelector('#price');
const capacity = adForm.querySelector('#capacity');
const rooms = adForm.querySelector('#room_number');
const address = adForm.querySelector('#address');
const slider = adForm.querySelector('.ad-form__slider');
const submitButton = adForm.querySelector('.ad-form__submit');
// const resetButton = adForm.querySelector('.ad-form__reset');
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

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: MAX_PRICE,
  },
  // start: getNumberMinPrice(),
  start: getNumberMinPrice(),
  step: 1,
  connect: 'lower',
  format: {
    to:  (value) => value.toFixed(0),
    from: (value) => parseFloat(value),
  },
});

slider.noUiSlider.on('update', () => {
  price.value = slider.noUiSlider.get();
  pristine.validate(price);
});

const onTypeChange = () => {
  price.placeholder = priceOption[type.value];
  slider.noUiSlider.updateOptions({
    // start: price.placeholder,
    range: {
      min: priceOption[type.value],
      max: 100000
    }
  });
  pristine.validate(price);
};

const onPriceInputchange = () => {
  if (!price.value) {
    slider.noUiSlider.set(0);
  }
  slider.noUiSlider.set(price.value);
};

// const resetSlider = () => {
//   slider.noUiSlider.reset();
// };


const validateCapacity = () => roomsOption[rooms.value].includes(capacity.value);

const getCapacityErrorMessage = () => 'Недопустимое количество комнат';

pristine.addValidator(
  capacity,
  validateCapacity,
  getCapacityErrorMessage,
);

const onCapacityChange = () => pristine.validate(capacity);
const onRoomsChange = () => pristine.validate(capacity);

const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

const onTimeInChange = () => {timeOut.value = timeIn.value;};
const onTimeOutChange = () => {timeIn.value = timeOut.value;};

address.setAttribute('readonly', 'readonly');
// address.value = `${DEFAULTLAT}, ${DEFAULTLNG}`;
address.value = `${DEF_COORDINATES.lat.toFixed(5)}, ${DEF_COORDINATES.lng.toFixed(5)}`;
const setCoordinates = (coordinates) => {
  address.value = `${(coordinates.lat).toFixed(5)}, ${(coordinates.lng).toFixed(5)}`;
};

const blockSubmitButton = () => {
  submitButton.setAttribute('disabled', true);
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.removeAttribute('disabled');
  submitButton.textContent = 'Сохранить';
};

// const resetForm = () => {
//   address.value = setCoordinates(DEF_COORDINATES);
//   title.value = '';
//   type.value = 'bungalow';
//   slider.noUiSlider.set(0);
//   price.value = '0';
//   rooms.value = '1';
//   capacity.value = '1';
//   timeIn.value = '12:00';
// };

// const resetAll = () => {
//   adForm.reset();
//   resetMap();
//   resetSlider();
// };

// resetButton.addEventListener('click', resetForm);

const onformSubmit = (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if (isValid) {
    blockSubmitButton();
    sendData(
      () => {
        showSuccessMessage();
        unblockSubmitButton();
        // resetAll();
      },
      () => {
        showErrorMessage();
        unblockSubmitButton();
      },
      new FormData(evt.target),
    );
  }
};


const makeFormInactive = () => {
  adForm.classList.add('ad-form--disabled');

  adFormFieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
  type.removeEventListener('change', onTypeChange);
  // price.removeEventListener('change', onTypeChange);
  price.removeEventListener('change', onPriceInputchange);
  capacity.removeEventListener('change', onCapacityChange);
  rooms.removeEventListener('change', onRoomsChange);
  timeIn.removeEventListener('change', onTimeInChange);
  timeOut.removeEventListener('change', onTimeOutChange);
  adForm.removeEventListener('submit', onformSubmit);

};

const makeFormActive = () => {
  adForm.classList.remove('ad-form--disabled');

  adFormFieldsets.forEach((element) => {
    element.disabled = false;
  });
  type.addEventListener('change', onTypeChange);
  // price.addEventListener('change', onTypeChange);
  price.addEventListener('change', onPriceInputchange);
  capacity.addEventListener('change', onCapacityChange);
  rooms.addEventListener('change', onRoomsChange);
  timeIn.addEventListener('change', onTimeInChange);
  timeOut.addEventListener('change', onTimeOutChange);
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


export { makeFormInactive, makeFormActive, makeMapInactive, makeMapActive, setCoordinates };
