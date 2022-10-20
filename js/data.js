import { getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement } from './utils.js';
import {
  titles,
  Price,
  types,
  times,
  features,
  descriptions,
  photos,
  Locations,
  MAX_ROOMS,
  MAX_GUEST,
  ARRAY_LENGTH,} from './const.js';

const getRandomLat = () => getRandomPositiveFloat(Locations.MIN_LAT, Locations.MAX_LAT, 5);
const getRandomLong = () => getRandomPositiveFloat(Locations.MIN_LONG, Locations.MAX_LONG, 5);

const createAuthor = (elem) => ({
  avatar: `img/avatars/user${elem.toString().padStart(2, '0')}.png`
});

const createOfferResult = (lat, lng) => ({
  title: getRandomArrayElement(titles),
  address: `${lat}, ${lng}`,
  price: getRandomPositiveInteger(Price.MIN_PRICE, Price.MAX_PRICE),
  type: getRandomArrayElement(types),
  numbers: getRandomPositiveInteger(1, MAX_ROOMS),
  guests: getRandomPositiveInteger(1, MAX_GUEST),
  checkin: getRandomArrayElement(times),
  checkout: getRandomArrayElement(times),
  features: getRandomArrayElement(features),
  description: getRandomArrayElement(descriptions),
  photos: getRandomArrayElement(photos),
});

const createLocation = (lat, lng) => ({
  lat,
  lng,
});

const createOffers = (elem) => {
  const lat = getRandomLat();
  const lng = getRandomLong();

  return {

    author: createAuthor(elem),
    offer: createOfferResult(lat, lng),
    location: createLocation(lat, lng),
  };
};

const getOffers = () =>
  Array.from({ length: ARRAY_LENGTH }, (_, offersIndex) => createOffers(offersIndex + 1));

export {getOffers};
