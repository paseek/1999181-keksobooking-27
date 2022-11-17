const formFilters = document.querySelector('.map__filters');
const filterType = formFilters.querySelector('#housing-type');
const filterPrice = formFilters.querySelector('#housing-price');
const filterRooms = formFilters.querySelector('#housing-rooms');
const filterGuests = formFilters.querySelector('#housing-guests');
const filterFeatures = document.querySelectorAll('.map__checkbox');

const filters = [filterType, filterPrice, filterRooms, filterGuests, ...filterFeatures];

// const DEFAULT_VALUE = 'any';
const PRICE_VALUE = {
  min: 10000,
  max: 50000,
};

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
  const checkedFeatures = formFilters.querySelectorAll('[type = "checkbox"]:checked');
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

// const SIMILAR_AD_COUNT = 10;

// const getFilterType = (offers) => filterType.value === offers.offer.type || filterType.value === DEFAULT_VALUE;
// const getFilterPrice = (offers) => {
//   switch (filterPrice.value) {
//     case 'any':
//       return true;
//     case 'low':
//       return offers.offer.price <= PRICE_VALUE.min || offers.offer.price === DEFAULT_VALUE;
//     case 'middle':
//       return offers.offer.price > PRICE_VALUE.min && offers.offer.price <= PRICE_VALUE.max || offers.offer.price === DEFAULT_VALUE;
//     case 'high':
//       return offers.offer.price > PRICE_VALUE.max || offers.offer.price === DEFAULT_VALUE;
//   }
// };
// const getFilterRooms = (offers) => +filterRooms.value === offers.offer.rooms || filterRooms.value === DEFAULT_VALUE;
// const getFilterGuests = (offers) => +filterGuests.value === offers.offer.guests || filterGuests.value === DEFAULT_VALUE;

// const getFilterFeatures = (offers) => {
//   const featuresChecked = [];
//   filterFeatures.forEach((feature) => {
//     if (feature.checked) {
//       featuresChecked.push(feature.value);
//     }
//   });

//   if (featuresChecked.length > 0 && offers.offer.features === undefined) {
//     return false;
//   }
//   return featuresChecked.every((feature) => offers.offer.features.includes(feature));
// };


// const getFilterOffers = (offers) => {

//   const filteredData = [];
//   for (let i = 0; i < offers.length; i++) {
//     const offer = offers[i];
//     if (
//       getFilterType(offer) &&
//       getFilterPrice(offer) &&
//       getFilterRooms(offer) &&
//       getFilterGuests(offer) &&
//       getFilterFeatures(offer)
//     ) {
//       filteredData.push(offer);
//     }
//     if (filteredData.length === SIMILAR_AD_COUNT) {
//       break;
//     }
//   }
//   return filteredData;
// };

const setChangeEventOnFilter = (callback) => {
  filters.forEach((filter) => filter.addEventListener('change', () => {
    callback();
  }));
};

// const resetFilter = () => {
//   filterType.value = DEFAULT_VALUE;
//   filterPrice.value = DEFAULT_VALUE;
//   filterRooms.value = DEFAULT_VALUE;
//   filterGuests.value = DEFAULT_VALUE;

//   filterFeatures.forEach((elem) => {
//     elem.checked = false;
//   });
// };

const resetFilter = () => {
  formFilters.reset();
};

export { setChangeEventOnFilter, resetFilter, filterAdverts };
