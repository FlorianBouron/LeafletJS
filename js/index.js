/**
 * Created by Florian on 17/03/2017.
 */
var mymap = L.map('mapid').setView([46.890, 1.362], 6);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    'by <a href="http://bouronflorian.fr">Florian Bouron</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

//Paris
L.marker([48.8589, 2.3469]).addTo(mymap).bindPopup("<b>Paris</b><br>Capital City").openPopup();

//Lyon
L.marker([45.7578, 4.8351]).addTo(mymap).bindPopup("<b>Lyon</b><br>Food");

//Bordeaux
L.marker([44.8635, -0.5862]).addTo(mymap).bindPopup("<b>Bordeaux</b><br>Wine");

//MAP
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);