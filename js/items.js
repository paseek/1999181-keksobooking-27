import './items.js';
import { getOffers } from './data.js';
// import { types } from './const.js';

// const map = document.querySelector('.map');
// const similarOfferElement = map.querySelector('#map__canvas');
const similarOfferElement = document.querySelector('#map__canvas');


// Записываем в переменную шаблон .popup
const similarOfferTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarOffer = getOffers();
// Массив данных для отрисовки
const offerElementsList = [];

const offerListFragment = document.createDocumentFragment();
const hideElement = (element) => element.classList.add('hidden');

similarOffer.forEach((item) => {
// Клонируем шаблон
  const offerElement = similarOfferTemplate.cloneNode(true);
  // Добавляем моковые данные
  offerElement.querySelector('.popup__title').textContent = item.offer.title;
  offerElement.querySelector('.popup__text--address').textContent = item.offer.address;
  offerElement.querySelector('.popup__text--price').textContent = `${item.offer.price} ₽/ночь`; //Обернуть в тег <span>
  offerElement.querySelector('.popup__type').textContent = item.offer.type;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${item.offer.checkin}, выезд до ${item.offer.checkout}`;
  offerElement.querySelector('.popup__description').textContent = item.offer.description;
  offerElement.querySelector('.popup__avatar').src = item.author.avatar;
  // offerElement.querySelector('.popup__text--capacity').textContent = `${item.offer.numbers} комнаты для ${item.offer.guests} гостей`;
  // offerElement.querySelector('.popup__features').textContent = item.offer.features;
  // offerElement.querySelector('.popup__photo').src = item.offer.photos;

  // Создаем правильную словоформу слов "гостей" и "комнат"
  const getWordForms = () => {
    const guestsNumber = `${item.offer.guests} ${item.offer.guests === 1 ? 'гостя' : 'гостей'}`; // Не до конца понял этот блок кода - тернарный оператор?
    switch (true) {
      case item.offer.numbers < 2:
        return `${item.offer.numbers} комната для ${guestsNumber}`;
      case item.offer.numbers < 5:
        return `${item.offer.numbers} комнаты для ${guestsNumber}`;
      default:
        return `${item.offer.numbers} комнат для ${guestsNumber}`;
    }
  };
  offerElement.querySelector('.popup__text--capacity').textContent = getWordForms();

  // Сверяем типы помещений в массиве с теми что есть в разметке
  // const getFeatures = () => {
  //   const featureItems = item.offer.features;
  //   const featureListContainer = offerElement.querySelector('.popup__features');
  //   const featureList = featureListContainer.querySelectorAll('.popup__feature');
  //   console.log(featureItems);
  //   featureList.forEach((featuresListItem) => {
  //     const isNecessary = featureItems.map(
  //       (feature) => featuresListItem.classList.contains('popup__feature--' + feature),
  //     );
  //     if (!isNecessary) {
  //       featuresListItem.remove();
  //     }
  //   });
  // };
  // offerElement.querySelector('.popup__features').textContent = getFeatures();

  // Добавляем все фотографии объекта из массива.
  // const card = similarOfferTemplate.cloneNode(true);
  // const photoContainer = card.querySelector('.popup__photos');
  // if (!item.offer.photos) {
  //   hideElement(photoContainer);
  // } else {
  //   const imageTemplate = photoContainer.querySelector('.popup__photo');
  //   photoContainer.innerHTML = '';
  //   item.offer.photos.forEach((photo) => {
  //     const image = imageTemplate.cloneNode(true);
  //     const similarPhotoFragment = document.createDocumentFragment();
  //     image.src = photo;
  //     similarPhotoFragment.append(image);
  //     photoContainer.append(similarPhotoFragment);
  //   });
  // };
});

// Как вывести все фотографии массива;
// Как сопоставить и вывести все "features";
// Как прятать блоки в случае отсутсвия данных;
// Не понимаю как добавить один элемент получившегося объявления в разметку;

