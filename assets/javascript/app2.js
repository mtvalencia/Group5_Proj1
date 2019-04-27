// API token goes here
var key = '9d56d95891b46e';

// Add layers that we need to the map
var streets = L.tileLayer.Unwired({key: key, scheme: "streets"});

// Initialize the map
var map = L.map('map', {
        center: [39.676681, -104.961936], //map loads with this location as center
        zoom: 16,
        layers: [streets] // Show 'streets' by default
});

// Add the 'scale' control
L.control.scale().addTo(map);

// Add the 'layers' control
L.control.layers({
    "Streets": streets
}).addTo(map);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
    }

map.on('click', onMapClick);