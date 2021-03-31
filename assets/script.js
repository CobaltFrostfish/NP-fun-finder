//get the api keys from the websites I want to use
//api key= AIzaSyDFJN8KsV0vonVDnuMQg39pedzZxhh7rVs
//above is for geolocation api https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY

// function initMap() {
//     // The location of Uluru
// const uluru = { lat: -25.344, lng: 131.036 };
// // The map, centered at Uluru
// const map = new google.maps.Map(document.getElementById("map"), {
//   zoom: 4,
//   center: uluru,
// });
// }
// Initialize and add the map
// function initMap(lat, lng, mapId) {
//     // The location of Uluru
//     const uluru = { lat: lat, lng: lng };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById(mapId), {
//       zoom: 4,
//       center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//       position: uluru,
//       map: map,
//     });
//   }
//   searchButton.addEventListener('click', function (event) {
//     var searchValue = event.target.value;
//     fetch('https://ridb.recreation.gov/api76e06162-0598-4be3-8b25-6c6a2574810f/v1/recareas/USFS/' + searchValue) // rec api
//       .then(response => response.json())
//       .then(data => {
//         for (var i = 0; i < data.length; i++) {
//           // new div with a class of row 
//           var newDiv = document.createElement('div');
//           var recName = document.createElement('h2');
//           recName.textContent = data[i].city;
//           var recPara = document.createElement('p');
//           recPara.textContent = data[i].address;
//           newDiv.appendChild(recName, recPara);
//           var newMapDiv = document.createElement('div');
//           newMapDiv.setAttribute('id', 'map' + i);
//           initMap(data[i].lat, data[i].lng, 'map' + i);
//         }
//       });
//   })
// function to start the map location from google maps api
function init() {
  var mapOptions = {                        // set up the map options
    center: new google.maps.LatLng("0.0","0.0"),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 13
  };
  var venueMap;                                     //Map() draws a map
  venueMap = new google.maps.Map(document.getElementById('mapDiv'), mapOptions);
}

function loadScript() {                   
  var script = document.createElement('script');                           //Create <script> element
  script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyDFJN8KsV0vonVDnuMQg39pedzZxhh7rVs&callback=init';
 
  var mapDiv= document.getElementById("mapDiv"); 
  mapDiv.appendChild(script); //add element to page
}

window.onload = loadScript; //Onload call


  

// $.ajax({
//     url: url,
//     method: "GET",
// }).then(response => {
//     console.log(response)
// })