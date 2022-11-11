import { SHOW_ALERT_TIME } from './const.js';

const isEscapeKey = (evt) => evt.key === 'Escape';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const errorMessage = errorTemplate.cloneNode(true);
errorMessage.classList.add('hidden');
document.body.append(errorMessage);

const successMessage = successTemplate.cloneNode(true);
successMessage.classList.add('hidden');
document.body.append(successMessage);

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeErrorModal();
    closeSuccessModal();
  }
};

function closeErrorModal () {
  errorMessage.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
}
function closeSuccessModal () {
  successMessage.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

const addButtonHandler = (message) => {
  const errorButton = message.querySelector('.error__button');
  errorButton.addEventListener('click', closeErrorModal);
};

const showErrorMessage = () => {
  errorMessage.classList.remove('hidden');
  addButtonHandler(errorMessage);
  document.addEventListener('keydown', onPopupEscKeydown);
};

const showSuccessMessage = () => {
  successMessage.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
  successMessage.addEventListener('click', closeSuccessModal);
};

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

export {showAlert, showErrorMessage, showSuccessMessage};
