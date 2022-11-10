import { showAlert } from './utils.js';

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    })
    .catch(() => {
      showAlert('Не удалось загрузить данные с сервера. Попробуйте ещё раз');
    });
};

const sendData = (onSuccess, body) => {

  fetch(
    'https://27.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      showAlert('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
