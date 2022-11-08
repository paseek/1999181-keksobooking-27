const offerTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const renderSimilarOffer = (author, offer) => {
  const { avatar } = author;
  const { title, address, price, type, rooms, guests, checkin, checkout, features, description, photos } = offer;

  const offerElement = offerTemplate.cloneNode(true);

  const avatarContainer = offerElement.querySelector('.popup__avatar');
  const descriptionContainer = offerElement.querySelector('.popup__description');
  const titleContainer = offerElement.querySelector('.popup__title');
  const addressContainer = offerElement.querySelector('.popup__text--address');
  const typeContainer = offerElement.querySelector('.popup__type');
  const priceContainer = offerElement.querySelector('.popup__text--price');
  const timeContainer = offerElement.querySelector('.popup__text--time');
  const featureContainer = offerElement.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('.popup__feature');
  const photoContainer = offerElement.querySelector('.popup__photos');
  const photoElement = photoContainer.querySelector('.popup__photo');
  const capacityContainer = offerElement.querySelector('.popup__text--capacity');

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

  if (avatar) {
    avatarContainer.src = avatar;
  }
  else {
    avatarContainer.remove();
  }

  if (price) {
    priceContainer.firstChild.textContent = price;
  }
  else {
    priceContainer.remove();
  }

  if (checkin && checkout) {
    timeContainer.textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  }
  else {
    timeContainer.remove();
  }

  if (features) {
    const modifiers = features.map((feature) => `popup__feature--${feature}`);
    featureList.forEach((offerListItem) => {
      const modifier = offerListItem.classList[1];
      if (!modifiers.includes(modifier)) {
        offerListItem.remove();
      }
    });
  }
  else {
    featureContainer.remove();
  }

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

  if (rooms && guests) {
    if (rooms === 1) {
      capacityContainer.textContent = `${rooms} комната для ${guests} ${guests === 1 ? 'гостя' : 'гостей'}`;
    }
    else if (rooms < 5) {
      capacityContainer.textContent = `${rooms} комнаты для ${guests} ${guests === 1 ? 'гостя' : 'гостей'}`;
    }
    else {
      capacityContainer.textContent = `${rooms} комнат для ${guests} ${guests === 1 ? 'гостя' : 'гостей'}`;
    }
  }
  else {
    capacityContainer.remove();
  }

  return offerElement;
};

export { renderSimilarOffer };
