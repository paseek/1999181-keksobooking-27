import { getOffers } from './data.js';

const mapCanvas = document.querySelector('#map-canvas');
const offerTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
const similarOffers = getOffers();

const similarListFragment = document.createDocumentFragment();

similarOffers.forEach(({ author, offer }) => {

  const { avatar } = author;
  const { title, address, price, type, rooms, guests, checkin, checkout, features, description, photos } = offer;

  const offerElement = offerTemplate.cloneNode(true);
  offerElement.querySelector('.popup__title').textContent = title;
  offerElement.querySelector('.popup__text--address').textContent = address;
  offerElement.querySelector('.popup__text--price').firstChild.textContent = price;
  offerElement.querySelector('.popup__type').textContent = type;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  offerElement.querySelector('.popup__avatar').src = avatar;

  const descriptionContainer = offerElement.querySelector('.popup__description');
  const titleContainer = offerElement.querySelector('.popup__title');
  const addressContainer = offerElement.querySelector('.popup__text--address');
  const typeContainer = offerElement.querySelector('.popup__type');

  const checkDataAvailable = (selector, selectorData) => {
    if (selectorData) {
      selector.textContent = selectorData;
    } else {
      selector.remove();
    }
  };

  checkDataAvailable(descriptionContainer, description);
  checkDataAvailable(titleContainer, title);
  checkDataAvailable(addressContainer, address);
  checkDataAvailable(typeContainer, type);

  const featureContainer = offerElement.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('.popup__feature');
  const modifiers = features.map((feature) => `popup__feature--${feature}`);
  featureList.forEach((offerListItem) => {
    const modifier = offerListItem.classList[1];

    if (!modifiers.includes(modifier)) {
      offerListItem.remove();
    }
  });

  const photoContainer = offerElement.querySelector('.popup__photos');
  const photoElement = photoContainer.querySelector('.popup__photo');
  photoElement.remove();
  if (photos) {
    photos.forEach((photo) => {
      const photoItemElement = photoElement.cloneNode(true);
      photoItemElement.src = photo;
      photoContainer.append(photoItemElement);
    });
  }
  else {
    photoContainer.remove();
  }

  const getCapacity = () => {
    const guestsNumber = `${guests} ${guests === 1 ? 'гостя' : 'гостей'}`;
    switch (true) {
      case rooms < 2:
        return `${rooms} комната для ${guestsNumber}`;
      case rooms < 5:
        return `${rooms} комнаты для ${guestsNumber}`;
      default:
        return `${rooms} комнат для ${guestsNumber}`;
    }
  };
  offerElement.querySelector('.popup__text--capacity').textContent = getCapacity();

  similarListFragment.append(offerElement);
});

const renderSimilarOffers = () =>
  mapCanvas.append(similarListFragment);

export { renderSimilarOffers };
