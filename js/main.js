import { makeFormInactive, makeMapInactive } from './form.js';
import { initMap, renderMarkers } from './map.js';
import { getData } from './api.js';


makeFormInactive();
makeMapInactive();

initMap();
getData((offers) => {
  renderMarkers(offers);
});
