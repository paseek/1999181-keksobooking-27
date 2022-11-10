import { SHOW_ALERT_TIME } from './const.js';

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

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.height = '90px';
  alertContainer.style.zIndex = '999999';
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '30px 3px';
  alertContainer.style.fontSize = '18px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.color = '#000';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, SHOW_ALERT_TIME);
};

export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, showAlert};
