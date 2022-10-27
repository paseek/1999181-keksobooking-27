import { getOffers } from './data.js';

const mapCanvas = document.querySelector('#map-canvas');
const offerTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const similarOffers = getOffers();

const similarListOffer = document.createDocumentFragment();

similarOffers.forEach((item) => {
  const offerElement = offerTemplate.cloneNode(true);
  offerElement.querySelector('.popup__title').textContent = item.offer.title;
  offerElement.querySelector('.popup__title').textContent = item.offer.title;
  offerElement.querySelector('.popup__text--address').textContent = item.offer.address;
  offerElement.querySelector('.popup__text--price').textContent = `${item.offer.price} ₽/ночь`; //Обернуть в тег <span>
  offerElement.querySelector('.popup__type').textContent = item.offer.type;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${item.offer.checkin}, выезд до ${item.offer.checkout}`;
  offerElement.querySelector('.popup__description').textContent = item.offer.description;
  offerElement.querySelector('.popup__avatar').src = item.author.avatar;

  const featureContainer = offerElement.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('.popup__feature');
  const featuresArray = item.offer.features;
  const modifiers = featuresArray.map((feature) => 'popup__feature--' + feature);

  featureList.forEach((offerListItem) => {
    const modifier = offerListItem.classList[1];

    if (!modifiers.includes(modifier)) {
      offerListItem.remove();
    }
  });

  similarListOffer.append(offerElement);
});

mapCanvas.append(similarListOffer);
