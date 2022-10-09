// Функция возвращает целое число из диапазона положительных чисел где max всегда больше или равен min.
function randomNumber (min, max) {
  min = Math.ceil (min);
  max = Math.floor (max);
  if (max <= min || max < 0 || min < 0) {
    return NaN;
  }
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

// Функция возвращает число с указанным количеством знаков после запятой из диапазона положительных чисел где max всегда больше или равен min.
function randomGeoNumber (min, max, digits) {
  min = Math.ceil (min);
  max = Math.floor (max);
  if (max <= min || max < 0 || min < 0) {
    return NaN;
  }
  return (Math.random() * (max - min + 1) + min).toFixed(digits);
}

randomNumber(0, 1);
randomGeoNumber(0, 100, 10);
