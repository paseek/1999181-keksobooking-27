function randomNumber (min, max) {
  min = Math.ceil (min); //минимальное значение округленное до целого
  max = Math.floor (max); //максимальное значение округленное до целого
  if (max <= min || max < 0 || min < 0) {
    return NaN;
  }
  return Math.random() * ((max - min + 1) + min).toFixed(digits);

}
randomNumber(0, 1);
