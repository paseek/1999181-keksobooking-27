import { getOffers } from './data.js';
import { makeFormInactive, makeMapInactive } from './form.js';
// import { renderSimilarOffers } from './popup.js';
import { initMap, renderMarkers } from './map.js';


makeFormInactive();
makeMapInactive();

initMap();
renderMarkers(getOffers());

// makeFormActive();
// makeMapActive();
