const map = L.map('mapid').setView([-27.2148773,-49.6489251], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29,68],
  popupAnchor: [170, 2]
});

//create popup overlay 
const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240
}).setContent('Lar das Meninas <a href="orphanage-profile.html?id=1" class="chose-orphanage"><img src="./public/images/arrow-white.svg"></a>');


// create and add marker 

L.marker([-27.2148773,-49.6489251], { icon })
  .addTo(map)
  .bindPopup(popup);