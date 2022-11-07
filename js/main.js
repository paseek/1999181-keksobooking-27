import { getOffers } from './data.js';
import { makeFormInactive, makeFormActive, makeMapInactive, makeMapActive } from './form.js';
import { renderSimilarOffers } from './popup.js';

makeFormInactive();
makeMapInactive();

renderSimilarOffers(getOffers());

makeFormActive();
makeMapActive();

