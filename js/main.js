import { getOffers } from './data.js';
import { makeFormInactive, makeMapInactive } from './form.js';
// import { renderSimilarOffers } from './popup.js';
import { renderMarkers } from './map.js';


makeFormInactive();
makeMapInactive();


renderMarkers(getOffers());

// makeFormActive();
// makeMapActive();
