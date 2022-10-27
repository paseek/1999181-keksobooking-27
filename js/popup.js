import { getOffers } from './data.js';

const mapCanvas = document.querySelector('#map-canvas');
const offerTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
const offertElementsList = [];
const similarOffers = getOffers();

const similarListFragment = document.createDocumentFragment();

similarOffers.forEach(({ author, offer }) => { // подскажи подробнее про приведение данных {} и где почитать
  const offerElement = offerTemplate.cloneNode(true);
  offerElement.querySelector('.popup__title').textContent = offer.title;
  offerElement.querySelector('.popup__text--address').textContent = offer.address;
  offerElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`; //Обернуть в тег <span>
  offerElement.querySelector('.popup__type').textContent = offer.type;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  offerElement.querySelector('.popup__avatar').src = author.avatar;

  const descriptionArray = offer.description;
  const descriptionContainer = offerElement.querySelector('.popup__description');
  if (descriptionArray) {
    descriptionContainer.textContent = descriptionArray;
  }
  else {
    descriptionContainer.remove();
  }

  const featureContainer = offerElement.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('.popup__feature');
  const featuresArray = offer.features;

  // прошу тебя объясить по шагам как работает этот блок кода
  const modifiers = featuresArray.map((feature) => 'popup__feature--' + feature); // покажи как исправить ошибку линтера
  featureList.forEach((offerListItem) => {
    const modifier = offerListItem.classList[1]; // подскажи что означает [1]

    if (!modifiers.includes(modifier)) {
      offerListItem.remove();
    }
  });

  const photoContainer = offerElement.querySelector('.popup__photos');
  const photoElement = photoContainer.querySelector('.popup__photo');
  const photoArray = offer.photos;
  photoElement.remove();
  if (photoArray) {
    photoArray.forEach((photo) => {
      const photoItemElement = photoElement.cloneNode(true);
      photoItemElement.src = photo;
      photoContainer.append(photoItemElement);
    });
  }
  else {
    photoContainer.remove();
  }

  similarListFragment.append(offerElement);
  offertElementsList.push(offerElement);
});

const randomElement = offertElementsList[Math.floor(Math.random() * offertElementsList.length)];
mapCanvas.appendChild(randomElement);
