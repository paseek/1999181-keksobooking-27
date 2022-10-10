// Функция возвращает целое число из диапазона положительных чисел где max всегда больше или равен min.
// function randomNumber (min, max) {
const getRandomNumber = (min, max) => {
  const smaller = Math.ceil (min);
  const bigger = Math.floor (max);
  if (bigger <= smaller || bigger < 0 || smaller < 0) {
    return NaN;
  }
  return Math.floor((Math.random() * (bigger - smaller + 1)) + smaller);
};

// Функция возвращает число с указанным количеством знаков после запятой из диапазона положительных чисел где max всегда больше или равен min.
const getRandomGeo = (min, max, digits) => {
  const smaller = min;
  const bigger = max;
  if (bigger <= smaller || bigger < 0 || smaller < 0) {
    return NaN;
  }
  return (Math.random() * (bigger - smaller + 1) + smaller).toFixed(digits);
};

getRandomNumber(0, 1);
getRandomGeo(0, 100, 10);
