import { RENDER_DELAY, PRICE_VALUE } from './const.js';
import { resetStartMarkers, resetMarkers } from './form.js';
import { renderMarkers } from './map.js';
import { debounce } from './utils.js';

const mapFilters = document.querySelector('.map__filters');
const mapFilter = mapFilters.querySelectorAll('.map__filter');
const mapFeatures = mapFilters.querySelector('.map__features');
const mapElements = [...mapFilter, mapFeatures];
const filterType = mapFilters.querySelector('#housing-type');
const filterPrice = mapFilters.querySelector('#housing-price');
const filterRooms = mapFilters.querySelector('#housing-rooms');
const filterGuests = mapFilters.querySelector('#housing-guests');

const filterByType = (advert) => {
  if (filterType.value === 'any') {
    return true;
  }
  return advert.offer.type === filterType.value;
};

const filterByPrice = (advert) => {
  switch (filterPrice.value) {
    case 'any':
      return true;
    case 'low':
      return advert.offer.price <= PRICE_VALUE.min;
    case 'middle':
      return advert.offer.price > PRICE_VALUE.min && advert.offer.price <= PRICE_VALUE.max;
    case 'high':
      return advert.offer.price > PRICE_VALUE.max;
  }
};

const filterByRooms = (advert) => {
  if (filterRooms.value === 'any') {
    return true;
  }
  return advert.offer.rooms === Number(filterRooms.value);
};

const filterByGuests = (advert) => {
  if (filterGuests.value === 'any') {
    return true;
  }
  return advert.offer.guests === Number(filterGuests.value);
};

const filterByFeatures = (advert) => {
  const checkedFeatures = mapFilters.querySelectorAll('[type = "checkbox"]:checked');
  if (!checkedFeatures.length) {
    return true;
  }
  if (!advert.offer.features) {
    return false;
  }

  const checkedValues = Array.from(checkedFeatures).map((checkedFeature) => checkedFeature.value);

  return checkedValues.every((checkedValue) => advert.offer.features.includes(checkedValue));
};

const filterAdverts = (advert) => filterByType(advert) && filterByPrice(advert) && filterByRooms(advert) && filterByGuests(advert) && filterByFeatures(advert);

const deactivateFilters = () => {
  mapFilters.classList.add('map__filters--disabled');

  mapElements.forEach((element) => {
    element.disabled = true;
  });
};

const activateFilters = (offers) => {
  mapFilters.classList.remove('map__filters--disabled');

  mapElements.forEach((element) => {
    element.disabled = false;
  });

  resetStartMarkers(offers);
  resetMarkers(offers);

  const onFiltersChange = (debounce(() => renderMarkers(offers.filter(filterAdverts)), RENDER_DELAY,));

  mapFilters.addEventListener('change', onFiltersChange);
};

const resetFilter = () => {
  mapFilters.reset();
};


export { resetFilter, deactivateFilters, activateFilters };
