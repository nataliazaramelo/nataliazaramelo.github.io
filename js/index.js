
var initialCoordinates = [-22.91, -43.20];
var initialZoomLevel = 15;
var muxiCoordinates = [40.6567847,-7.914078];
var muxiMarkerMessage = "Centro";
var muxiIconProperties = {
    iconUrl: "contrib/leaflet-0.7.7/leaflet.css/images/marker-icon.png"
  , iconSize: [44, 59]
  , iconAnchor: [22, 59]
  , popupAnchor: [0, -50]
  };

// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView(muxiCoordinates, initialZoomLevel);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var muxiIcon = L.icon(muxiIconProperties);

L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();
    
    //document.getElementsByTagName("h1")[0].style.fontSize = "80px";