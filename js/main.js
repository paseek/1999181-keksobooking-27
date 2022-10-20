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

const types = ['palace', 'flat', 'house', 'bungalow', 'hotel',];

const times = ['12:30', '13:00', '14:00',];

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

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomPositiveFloat = (a, b, digits = 1) => {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

const getRandomArrayElement = (array) => array[getRandomPositiveInteger(0, array.length - 1)];

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

getOffers();
