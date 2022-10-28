const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');

const mapFilters = document.querySelector('.map__filters');
const mapFilter = mapFilters.querySelectorAll('.map__filter');
const mapFeatures = mapFilters.querySelector('.map__features');
const mapElements = [...mapFilter, mapFeatures];

const makeFormInactive = () => {
  adForm.classList.add('ad-form--disabled');

  adFormFieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
};

const makeFormActive = () => {
  adForm.classList.remove('ad-form--disabled');

  adFormFieldsets.forEach((element) => {
    element.disabled = false;
  });
};

const makeMapInactive = () => {
  mapFilters.classList.add('map__filters--disabled');

  mapElements.forEach((element) => {
    element.disabled = true;
  });
};

const makeMapActive = () => {
  mapFilters.classList.remove('ad-form--disabled');

  mapElements.forEach((element) => {
    element.disabled = false;
  });
};

export { makeFormInactive, makeFormActive, makeMapInactive, makeMapActive };
