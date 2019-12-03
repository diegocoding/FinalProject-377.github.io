const L = require('leaflet');

const mymap = L.map("mapid").setView([38.97782697554026, -76.94927215576172], 13);

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox.streets"
  }
).addTo(mymap);

L.marker([51.5, -0.09])
  .addTo(mymap)
  .bindPopup("<b>Hello world!</b><br />I am a popup.");

L.circle([51.5, -76.94927], 500, {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5
})
  .addTo(mymap)
  .bindPopup("I am a circle.");

/*
		L.polygon([
			[51.509, -0.08],
			[51.503, -0.06],
			[51.51, -0.047]
		]).addTo(mymap).bindPopup("I am a polygon.");
	
	*/
var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap);
}

mymap.on("click", onMapClick);

var greenIcon = L.icon({
  iconUrl: "leaf-green.png",
  shadowUrl: "leaf-shadow.png",

  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([38.97782697554026, -76.94927215576172], { icon: greenIcon }).addTo(
  map
);
