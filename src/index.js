const mapboxgl = require("mapbox-gl");
const addMarker = require('./marker');
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhdW5vZmYiLCJhIjoiY2phOXQ0N2ZiMGwyMDJ3cWl1bDh6aGs0YiJ9.qtvi4QzR0QJvDuKT5xGdWw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
const newMarker = addMarker('hotel',-73.937699,  40.665817);
newMarker.addTo(map)