import { sendData } from './api.js';
import { resetMap, renderMarkers } from './map.js';
import { resetFilter } from './filters.js';
import { showErrorMessage, showSuccessMessage } from './modal.js';
import {
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  priceOption,
  roomsOption,
  MAX_PRICE,
  DEFAULT_COORDINATES,
  FILE_TYPES,
  DEFAULT_AVATAR
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
const resetButton = adForm.querySelector('.ad-form__reset');
const avatarUploader = document.querySelector('#avatar');
const avatar = document.querySelector('.ad-form-header__preview img');
const photoUplaoder = document.querySelector('#images');
const photo = document.querySelector('.ad-form__photo');

const typeApprove = (file) => FILE_TYPES.some((mime) => file.name.toLowerCase().endsWith(mime));

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

price.placeholder = priceOption[type.value];
const validatePrice = () => price.value >= priceOption[type.value];

const getPriceErrorMessage = () => `Мин.цена за "${type.options[type.selectedIndex].text}" - ${priceOption[type.value]} рублей!`;

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
  start: 0,
  step: 1,
  connect: 'lower',
  format: {
    to:  (value) => value.toFixed(0),
    from: (value) => parseFloat(value),
  },
});

slider.noUiSlider.on('slide', () => {
  price.value = slider.noUiSlider.get();
  pristine.validate(price);
});

const onTypeChange = () => {
  price.placeholder = priceOption[type.value];
  pristine.validate(price);
};

const onPriceInputchange = () => {
  if (!price.value) {
    slider.noUiSlider.set(0);
  }
  slider.noUiSlider.set(price.value);
};

const resetSlider = () => {
  slider.noUiSlider.reset();
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

const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

const onTimeInChange = () => {timeOut.value = timeIn.value;};
const onTimeOutChange = () => {timeIn.value = timeOut.value;};

address.setAttribute('readonly', 'readonly');
address.value = `${DEFAULT_COORDINATES.lat.toFixed(5)}, ${DEFAULT_COORDINATES.lng.toFixed(5)}`;
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

avatarUploader.addEventListener('change', () => {
  const file = avatarUploader.files[0];

  if (typeApprove(file)) {
    avatar.src = URL.createObjectURL(file);
  }
});

photoUplaoder.addEventListener('change', () => {
  const file = photoUplaoder.files[0];

  if (typeApprove(file)) {
    photo.innerHTML = '';
    const photoPreview = document.createElement('img');
    photoPreview.src = URL.createObjectURL(file);
    photoPreview.style.maxWidth = '100%';
    photoPreview.style.maxHeight = 'auto';
    photo.append(photoPreview);
  }
});

const resetImages = () => {
  photo.innerHTML = '';
  avatar.src = DEFAULT_AVATAR;
};

const resetAll = (evt) => {
  if (evt) {
    evt.preventDefault();
  }

  adForm.reset();
  price.placeholder = priceOption[type.value];
  resetFilter();
  resetMap();
  resetSlider();
  resetImages();
  pristine.reset();
};

resetButton.addEventListener('click', resetAll);


const resetStartMarkers = (offers) => {
  resetButton.addEventListener('click', () => {
    renderMarkers(offers);
  });
};

const resetMarkers = (offers) => {
  adForm.addEventListener('submit', () => {
    renderMarkers(offers);
  });
};


const onformSubmit = (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if (isValid) {
    blockSubmitButton();
    sendData(
      () => {
        showSuccessMessage();
        unblockSubmitButton();
        resetAll();
      },
      () => {
        showErrorMessage();
        unblockSubmitButton();
      },
      new FormData(evt.target),
    );
  }
};

const deactivateForm = () => {
  adForm.classList.add('ad-form--disabled');
  adFormFieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
  type.removeEventListener('change', onTypeChange);
  price.removeEventListener('change', onPriceInputchange);
  capacity.removeEventListener('change', onCapacityChange);
  rooms.removeEventListener('change', onRoomsChange);
  timeIn.removeEventListener('change', onTimeInChange);
  timeOut.removeEventListener('change', onTimeOutChange);
  adForm.removeEventListener('submit', onformSubmit);

};

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormFieldsets.forEach((element) => {
    element.disabled = false;
  });
  type.addEventListener('change', onTypeChange);
  price.addEventListener('change', onPriceInputchange);
  capacity.addEventListener('change', onCapacityChange);
  rooms.addEventListener('change', onRoomsChange);
  timeIn.addEventListener('change', onTimeInChange);
  timeOut.addEventListener('change', onTimeOutChange);
  adForm.addEventListener('submit', onformSubmit);
};

export { deactivateForm, activateForm, setCoordinates, resetStartMarkers, resetMarkers };
