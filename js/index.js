var initialCoordinates = [-22.91, -43.20];
var initialZoomLevel = 15;
var muxiCoordinates = [40.6560292,-7.9148723,1110];
var muxiMarkerMessage = "Centro";

// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView(initialCoordinates, initialZoomLevel);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();
    
    //document.getElementsByTagName("h1")[0].style.fontSize = "80px";