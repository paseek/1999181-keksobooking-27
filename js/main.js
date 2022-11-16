import { makeFormInactive, makeMapInactive } from './form.js';
import { initMap, renderMarkers } from './map.js';
import { getData } from './api.js';
import { debounce } from './utils.js';
import { setChangeEventOnFilter, getFilterOffers } from './filters.js';


makeFormInactive();
makeMapInactive();


getData((offers) => {
  initMap();
  renderMarkers(offers);
  setChangeEventOnFilter(
    debounce(() => {
      renderMarkers(getFilterOffers(offers));
    })
  );
});
