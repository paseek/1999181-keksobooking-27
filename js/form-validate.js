// ------ Перенес все в form.js так как не понял как подключить этот файл ------ //

// const adForm = document.querySelector('.ad-form');
// const title = adForm.querySelector('#tiile');


// const pristine = new Pristine(adForm, {
//   classTo: 'ad-form__element',
//   errorTextParent: 'ad-form__element',
//   errorTextClass: 'ad-form__element--invalid',
// }, true);

// const validateTitle = (value) => value.length >= 30 && value.length <= 100;

// pristine.addValidator(
//   title,
//   validateTitle,
//   'От 30 до 100 символов',
// );

// const onformSubmit = (evt) => {
//   evt.preventDefault();

//   const isValid = pristine.validate();

//   if (isValid) {
//     adForm.submit();
//   }
// };

// adForm.addEventListener('submit', onformSubmit);

// export { pristine };
