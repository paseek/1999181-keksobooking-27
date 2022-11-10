import { makeFormActive, makeMapActive, setCoordinates } from './form.js';
import { DEFAULTLAT, DEFAULTLNG, DEFAULT_ZOOM, ARRAY_LENGTH } from './const.js';
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
  setCoordinates(latLng);
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

  list.slice(0, ARRAY_LENGTH).forEach(({author, location, offer}) => {
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
      lat: DEFAULTLAT,
      lng: DEFAULTLNG,
    }, DEFAULT_ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(markerGroup);
};

export {renderMarkers, resetMainMarker, initMap};

