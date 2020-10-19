const map = L.map('mapid').setView([-27.2148773,-49.6489251], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29,68],
});

let marker;

//create and add marker

map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  //to get the values from the map stored into the hidden inputs
  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  //remove previous icons onclick
  marker && map.removeLayer(marker)

  //add icon Layer
  marker = L.marker([lat, lng], { icon })
  .addTo(map)
})


//add more photos to the page

function addPhotoField() {

  //get photo container #images
  const container = document.querySelector('#images')
  
  //get conteiner .new-image to duplicate
  const fieldsContainer = document.querySelectorAll('.new-upload')

  //clone last image added
  const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

  //See if input is empty if input is empty (has value = '') don't add
  const input = newFieldContainer.children[0]
  
  if (input == '') {
    return
  }

  //Clear the input before adding it to the page
  input.value = ''

  //add clone to #images container
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget
  
  const fieldsContainer = document.querySelectorAll('.new-upload');

  if (fieldsContainer.length < 2) {
    //clean field value of the first field
    span.parentNode.children[0].value = "";
    return
  }

  //delete whole field
  span.parentNode.remove();
}

//Select yes or no buttons

function toggleSelect(event) {
  //remove .active class from buttons
  document.querySelectorAll('.button-select button')
  .forEach(button => button.classList.remove('active'))

  //get clicked button
  const button = event.currentTarget

  //add class .active to the clicked button
  button.classList.add('active')

  //update the hidden input with the selected value
  const input = document.querySelector('[name="open_on_weekends"]')

  //see if it's yes or no with data-value
  input.value = button.dataset.value
}