import { makeFormInactive, makeMapInactive, makeMapActive, makeFormActive } from './form.js';
import { renderMarkers, initMap } from './map.js';
import { getData } from './api.js';
import { debounce } from './utils.js';
import { setChangeEventOnFilter, filterAdverts } from './filters.js';

const RENDER_DELAY = 1000;

makeFormInactive();
makeMapInactive();

initMap(makeFormActive);
getData((offers) => {
  renderMarkers(offers);
  makeMapActive();
  setChangeEventOnFilter(debounce(() => renderMarkers(offers.filter(filterAdverts)), RENDER_DELAY,));
});
