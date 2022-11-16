import { makeFormActive, makeMapActive, setCoordinates } from './form.js';
import { DEFAULT_ZOOM, ARRAY_LENGTH, DEF_COORDINATES } from './const.js';
import { renderSimilarOffer } from './popup.js';

const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);

const markerIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: DEF_COORDINATES.lat,
    lng: DEF_COORDINATES.lng,
  },
  {
    draggable: true,
    icon: markerIcon,
  },
);

mainMarker.addTo(map);


mainMarker.on('moveend', (evt) => {
  const latLng = evt.target.getLatLng();
  setCoordinates(latLng);
});


const markerOfferIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const renderMarkers = (offers) => {
  markerGroup.clearLayers();

  offers.slice(0, ARRAY_LENGTH).forEach(({author, location, offer}) => {
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
      .addTo(markerGroup)
      .bindPopup(renderSimilarOffer(author, offer));
  });
};


const initMap = () => {
  map.on('load', () => {
    makeMapActive();
    makeFormActive();
  })
    .setView({
      lat: DEF_COORDINATES.lat,
      lng: DEF_COORDINATES.lng,
    }, DEFAULT_ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

const resetMap = () => {
  map.setView(DEF_COORDINATES, DEFAULT_ZOOM);
  mainMarker.setLatLng(DEF_COORDINATES);
  setCoordinates(DEF_COORDINATES);
  map.closePopup();
};

export {renderMarkers, resetMap, initMap};

