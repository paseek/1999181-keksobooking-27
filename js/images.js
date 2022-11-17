// const FILE_TYPES = ['jpg', 'jpeg', 'png'];
// const DEFAULT_AVATAR = 'img/muffin-grey.svg';

// const avatarUploader = document.querySelector('#avatar');
// const avatar = document.querySelector('.ad-form-header__preview img');

// const photoUplaoder = document.querySelector('#images');
// const photo = document.querySelector('.ad-form__photo');

// const typeApprove = (file) => FILE_TYPES.some((mime) => file.name.toLowerCase().endsWith(mime));

// avatarUploader.addEventListener('change', () => {
//   const file = avatarUploader.files[0];

//   if (typeApprove(file)) {
//     avatar.src = URL.createObjectURL(file);
//   }
// });

// photoUplaoder.addEventListener('change', () => {
//   const file = photoUplaoder.files[0];

//   if (typeApprove(file)) {
//     photo.innerHTML = '';
//     const photoPreview = document.createElement('img');
//     photoPreview.src = URL.createObjectURL(file);
//     photoPreview.style.maxWidth = '100%';
//     photoPreview.style.maxHeight = 'auto';
//     photo.append(photoPreview);
//   }
// });

// const resetImages = () => {
//   photo.innerHTML = '';
//   avatar.src = DEFAULT_AVATAR;
// };

// export { resetImages };
