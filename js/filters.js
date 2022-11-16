const formFilters = document.querySelector('.map__filters');
const filterType = formFilters.querySelector('#housing-type');
const filterPrice = formFilters.querySelector('#housing-price');
const filterRooms = formFilters.querySelector('#housing-rooms');
const filterGuests = formFilters.querySelector('#housing-guests');
const filterFeatures = document.querySelectorAll('.map__checkbox');

const DEFAULT_VALUE = 'any';
const PRICE_VALUE = {
  min: 10000,
  max: 50000,
};
const SIMILAR_AD_COUNT = 10;

const getFilterType = (offers) => filterType.value === offers.offer.type || filterType.value === DEFAULT_VALUE;
const getFilterPrice = (offers) => {
  switch (filterPrice.value) {
    case 'any':
      return true;
    case 'low':
      return offers.offer.price <= PRICE_VALUE.min || offers.offer.price === DEFAULT_VALUE;
    case 'middle':
      return offers.offer.price > PRICE_VALUE.min && offers.offer.price <= PRICE_VALUE.max || offers.offer.price === DEFAULT_VALUE;
    case 'high':
      return offers.offer.price > PRICE_VALUE.max || offers.offer.price === DEFAULT_VALUE;
  }
};
const getFilterRooms = (offers) => +filterRooms.value === offers.offer.rooms || filterRooms.value === DEFAULT_VALUE;
const getFilterGuests = (offers) => +filterGuests.value === offers.offer.guests || filterGuests.value === DEFAULT_VALUE;

const getFilterFeatures = (offers) => {
  const featuresChecked = [];
  filterFeatures.forEach((feature) => {
    if (feature.checked) {
      featuresChecked.push(feature.value);
    }
  });

  if (featuresChecked.length > 0 && offers.offer.features === undefined) {
    return false;
  }
  return featuresChecked.every((feature) => offers.offer.features.includes(feature));
};


const filters = [filterType, filterPrice, filterRooms, filterGuests, ...filterFeatures];


const getFilterOffers = (offers) => {

  const filteredData = [];
  for (let i = 0; i < offers.length; i++) {
    const offer = offers[i];
    if (
      getFilterType(offer) &&
      getFilterPrice(offer) &&
      getFilterRooms(offer) &&
      getFilterGuests(offer) &&
      getFilterFeatures(offer)
    ) {
      filteredData.push(offer);
    }
    if (filteredData.length === SIMILAR_AD_COUNT) {
      break;
    }
  }
  return filteredData;
};

const setChangeEventOnFilter = (callback) => {
  filters.forEach((filter) => filter.addEventListener('change', () => {
    callback();
  }));
};

const resetFilter = () => {
  filterType.value = DEFAULT_VALUE;
  filterPrice.value = DEFAULT_VALUE;
  filterRooms.value = DEFAULT_VALUE;
  filterGuests.value = DEFAULT_VALUE;

  filterFeatures.forEach((elem) => {
    elem.checked = false;
  });
};

export { setChangeEventOnFilter, getFilterOffers, resetFilter };
