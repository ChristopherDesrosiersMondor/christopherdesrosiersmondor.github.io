/*https://developer.mapquest.com/documentation/mapquest-js/v1.3/examples/basic-map*/

window.onload = function() {
  L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

  var map = L.mapquest.map('map', {
    center: [45.550561, -73.542126],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  });

  map.addControl(L.mapquest.control());
}