const TITLE = [
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

const PRICE = {
  MIN_PRICE: 0,
  MAX_PRICE: 100000,
};

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel',];

const TIMES = ['12:30', '13:00', '14:00',];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',];

const DESCRIPTIONS = [
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

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const LOCATION = {
  MIN_LAT: 35.65,
  MAX_LAT: 35.7,
  MIN_LONG: 139.7,
  MAX_LONG: 139.8,
};

const MAX_ROOMS = 5;

const MAX_GUEST = 9;

// const AVATAR_PHOTOS_ID = Array.from({ length: 10 }, (v, i) =>  i + 1);
// Array.from({length: 10}, (_, i) => i + 1)

const AUTHOR_MAX_PHOTOS = 10;

const ARRAY_LENGTH = 10;

// ищем случайное целое число
function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// ищем случайное число с висячей точкой
function getRandomPositiveFloat (a, b, digits = 1) {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

// ?Не понимаю почему тут у функции опущены скобки {}
const getRandomArrayElement = (array) => array[getRandomPositiveInteger(0, array.length - 1)];

// ?Не понимаю почему тут у функции опущены скобки {}
const getRandomLat = () => getRandomPositiveFloat (LOCATION.MIN_LAT, LOCATION.MAX_LAT, 5);
const getRandomLong = () => getRandomPositiveFloat(LOCATION.MIN_LONG, LOCATION.MAX_LONG, 5);

// ?Не понимаю почему тут тело функции обернуто в скобки ()
// ?Не понимаю как реализовать вывод номера фото по очереди от 01 до 10
const createAuthor = () => ({
  avatar: `img/avatars/user${getRandomPositiveInteger(1, AUTHOR_MAX_PHOTOS).toString().padStart(2, '0')}.png`
});

const createOfferResult = () => ({
  title: getRandomArrayElement(TITLE),
  address: `${getRandomLat()}, ${getRandomLong()}`, // Не понимаю почему на выходе получаем строку а не число
  price: getRandomPositiveInteger(PRICE.MIN_PRICE, PRICE.MAX_PRICE),
  type: getRandomArrayElement(TYPE),
  numbers: getRandomPositiveInteger(1, MAX_ROOMS),
  guests: getRandomPositiveInteger(1, MAX_GUEST),
  checkin: getRandomArrayElement(TIMES),
  checkout: getRandomArrayElement(TIMES),
  features: getRandomArrayElement(FEATURES),
  description: getRandomArrayElement(DESCRIPTIONS),
  photos: getRandomArrayElement(PHOTOS),
});

const createLocation = () => ({
  lat: getRandomPositiveFloat (LOCATION.MIN_LAT, LOCATION.MAX_LAT, 5),
  lng: getRandomPositiveFloat(LOCATION.MIN_LONG, LOCATION.MAX_LONG, 5),
});

const createOffers = () => ({
  author: createAuthor(),
  offer: createOfferResult(),
  location: createLocation(),
});

const getOffers = () =>
  Array.from({ length: ARRAY_LENGTH }, (_, offersIndex) => createOffers(offersIndex + 1));

getOffers();
