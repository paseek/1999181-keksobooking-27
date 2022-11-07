import { makeFormActive, makeMapActive } from './form.js';
// import { renderSimilarOffers } from './popup.js';

const DEFAULTLAT = 35.6895.toFixed(5);
const DEFAULTLNG = 139.692.toFixed(5);
const address = document.querySelector('#address');

address.value = `${DEFAULTLAT}, ${DEFAULTLNG}`;

const map = L.map('map-canvas')
  .on('load', () => {
    makeMapActive();
    makeFormActive();
  })
  .setView({
    lat: DEFAULTLAT,
    lng: DEFAULTLNG,
  }, 11);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const markerIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: DEFAULTLAT,
    lng: DEFAULTLNG,
  },
  {
    draggable: true,
    icon: markerIcon,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const latLng = evt.target.getLatLng();
  address.value = `${latLng.lat.toFixed(5)}, ${latLng.lng.toFixed(5)}`; // не понимаю это строку
});

const resetMainMarker = () => {
  mainMarker.setLatLng({
    lat: DEFAULTLAT,
    lng: DEFAULTLNG,
  });
};

const markerOfferIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const renderMarkers = (list) => {

  list.forEach(({location, offer}) => {
    const marker = L.marker(
      {
        lat: location.lat,
        lng: location.lng,
      },
      {
        markerOfferIcon,
      },
    );

    marker
      .addTo(map)
      .bindPopup(offer.title);
  });

};

export {renderMarkers, resetMainMarker};

