import { SHOW_ALERT_TIME } from './const.js';

const isEscapeKey = (evt) => evt.key === 'Escape';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const renderModal = (template) => {
  const modalTemplate = template.cloneNode(true);
  document.body.append(modalTemplate);
  const closeModal = () => {
    modalTemplate.remove();
    document.removeEventListener('keydown', onEscKeydown);
  };
  function onEscKeydown () {
    if (isEscapeKey) {
      closeModal();
    }
  }
  modalTemplate.addEventListener('click', closeModal);
  document.addEventListener('keydown', onEscKeydown);
};

const showErrorMessage = () => renderModal(errorTemplate);
const showSuccessMessage = () => renderModal(successTemplate);


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
