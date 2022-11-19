const typesRus = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const MIN_RANGE = 0;
const MAX_RANGE = 100000;

const START_RANGE = 1000;

const ARRAY_LENGTH = 10;

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const priceOption = {
  'bungalow': 0,
  'flat' : 1000,
  'hotel' : 3000,
  'house' : 5000,
  'palace' : 10000,
};

const MAX_PRICE = 100000;

const roomsOption = {
  1 : ['1'],
  2 : ['2', '1'],
  3 : ['3', '2', '1'],
  100 : ['0'],
};

const DEFAULT_COORDINATES = {
  lat: 35.6895,
  lng: 139.692
};

const DEFAULT_ZOOM = 10;

const SHOW_ALERT_TIME = 5000;

const RENDER_DELAY = 1000;

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const DEFAULT_AVATAR = 'img/muffin-grey.svg';

const PRICE_VALUE = {
  min: 10000,
  max: 50000,
};

export {
  typesRus,
  ARRAY_LENGTH,
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  priceOption,
  PRICE_VALUE,
  MAX_PRICE,
  roomsOption,
  START_RANGE,
  MIN_RANGE,
  MAX_RANGE,
  DEFAULT_ZOOM,
  DEFAULT_COORDINATES,
  DEFAULT_AVATAR,
  SHOW_ALERT_TIME,
  FILE_TYPES,
  RENDER_DELAY,
};
