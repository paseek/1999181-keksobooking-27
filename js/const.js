const titles = [
  'Wija House - Unawatuna',
  'Nooit Gedacht Heritage Hotel (Original Dutch Governors House)',
  'Beach Grove Villas',
  'Rock Fort Hotel & SPA Unawatuna',
  'Epic Unawatuna',
  'The Dream House',
  'Hotel J, Unawatuna',
  'Lands End Villa',
  'Agnus Unawatuna',
  'Villa Gaetano Unawatuna',
  'Villa Thalpe Breeze',
  'Anara Villa',
  'Nirmala Villa',
];

const Price = {
  MIN_PRICE: 0,
  MAX_PRICE: 100000,
};

// const types = ['palace', 'flat', 'house', 'bungalow', 'hotel',];

const times = ['12:30', '13:00', '14:00',];

const typesRus = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',];

const descriptions = [
  'Вилла Nirmala находится в Хабарадуве, 8 км от японской Пагода мира. К услугам гостей бесплатный Wi-Fi на всей территории и бесплатная частная парковка.',
  'Комфортабельная вилла Anara находится в тихом месте недалеко от пляжа. В зонах общественного пользования действует бесплатный WiFi.',
  'Лаконично обставленная вилла располагает частным входом, вентилятором, свежим постельным бельем, шкафом и противомоскитной сеткой. К вашим услугам смежная ванная комната с душем, биде, феном и бесплатными туалетно-косметическими принадлежностями.',
  'Вилла Thalpe Breeze расположена в городе Унаватуна, всего в 1,7 км от пляжа Михирипенна. К услугам гостей ресторан, общий лаундж, частный пляж и бесплатный Wi-Fi. К услугам гостей бесплатная частная парковка и общая кухня.',
  'Курортный отель Blue Sky Beach расположен в Унаватуне, на берегу Далавелла и Михирипенна. К услугам гостей комфортабельные номера, массажные процедуры и бесплатный Wi-Fi на всей территории отеля.',
  'Четырехзвездочный комплекс вилл Beach Grove находится в 10 минутах ходьбы от прекрасного пляжа Унаватуна. К услугам гостей открытый бассейн, собственные зоны для барбекю и бесплатная парковка.',
  'Спа-отель Rock Fort расположен в городе Унаватуна. На всей территории отеля предоставляется бесплатный Wi-Fi. Открытый бассейн работает круглый год.',
  'Гостевой дом Wija House - Unawatuna расположен на курорте Унаватуна, в 650 метрах от пляжа Унаватуны. К услугам гостей общий лаундж, бесплатная частная парковка, сад, принадлежности для барбекю, терраса и семейные номера.',
  'Отель Epic Unawatuna с бесплатным Wi-Fi и садом расположен в городе Унаватуне, в 1,8 км от Японской пагоды мира. В распоряжении гостей общий лаундж и ресторан.',
  'Вилла Lands End находится в городе Унаватуна, в регионе Галле Дистрикт, в 800 метрах от Японской пагоды мира.',
  'Отель The Dream House с террасой и видом на сад расположен в 3,3 км от маяка Галле. На территории работает бар.',
  'Отель Nooit Gedacht Heritage занимает отреставрированное голландское колониальное здание. К услугам гостей 2 бассейна, огромный сад и бесплатная парковка на территории.',
  'Бизнес-отель J, Unawatuna расположен в городе Унаватуна округа Галле, в 1,2 км от Японской пагоды мира. В отеле обустроен открытый бассейн, работающий круглый год.',
  'Отель Agnus Unawatuna - Unawatuna с панорамным видом на Индийский океан и пейзажным бассейном расположен в городе Унаватуна, менее чем в 1 км от Японской пагоды мира.',
];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const Locations = {
  MIN_LAT: 35.65,
  MAX_LAT: 35.7,
  MIN_LONG: 139.7,
  MAX_LONG: 139.8,
};

const MAX_ROOMS = 5;

const MAX_GUEST = 9;

const ARRAY_LENGTH = 10;

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const priceOption = {
  'bungalow': '0',
  'flat' : '1000',
  'hotel' : '3000',
  'house' : '5000',
  'palace' : '10000',
};

const MAX_PRICE = 100000;

const roomsOption = {
  1 : ['1'],
  2 : ['2', '1'],
  3 : ['3', '2', '1'],
  100 : ['0'],
};

const DEF_COORDINATES = {
  lat: 35.6895.toFixed(5),
  lng: 139.692.toFixed(5)
};

// const DEFAULTLAT = 35.6895.toFixed(5);
// const DEFAULTLNG = 139.692.toFixed(5);

// const DEFAULT_COORDINATES = {
//   lat: 35.68256,
//   lng: 139.75114
// };

const DEFAULT_ZOOM = 10;

const SHOW_ALERT_TIME = 5000;

export {
  titles,
  Price,
  // types,
  typesRus,
  times,
  features,
  descriptions,
  photos,
  Locations,
  MAX_ROOMS,
  MAX_GUEST,
  ARRAY_LENGTH,
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  priceOption,
  roomsOption,
  MAX_PRICE,
  // DEFAULTLAT,
  // DEFAULTLNG,
  DEFAULT_ZOOM,
  SHOW_ALERT_TIME,
  DEF_COORDINATES,
};
