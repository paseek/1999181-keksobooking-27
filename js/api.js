import { showAlert } from './modal.js';

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


const sendData = (onSuccess, onFail, body) => {

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
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
