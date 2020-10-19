const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

const map = L.map('mapid', options).setView([-27.2148773,-49.6489251], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29,68],
  popupAnchor: [170, 2]
});



// create and add marker 

L.marker([-27.2148773,-49.6489251], { icon })
  .addTo(map);

// Image Gallery

function selectImage(event) {
  const button = event.currentTarget

  //remove all .active classes
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)

  function removeActiveClass(button) {
    button.classList.remove("active")
  }

  //select the clicked image
  const image = button.children[0]

  const imageContainer = document.querySelector(".orphanage-details > img")


  //atualizar o container de imagem
  imageContainer.src = image.src


  //adicionar a classe .active para este botão
  buttonclassList.add("active")
}
