import { price } from './form.js';
import { MIN_RANGE, MAX_RANGE, START_RANGE } from './const.js';

const sliderElement = document.querySelector('.ad-form__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: MIN_RANGE,
    max: MAX_RANGE,
  },
  start: START_RANGE,
  step: 1,
  connect: 'upper',
  format: {
    to: (value) => Number(value.toFixed(0)),
    from: (value) => parseFloat(value),
  },
});

const onSliderChange = () => {
  price.value = sliderElement.noUiSlider.get();
};

const initSlider = () => {
  sliderElement.noUiSlider.on('update', onSliderChange);
};

export { initSlider, sliderElement };
