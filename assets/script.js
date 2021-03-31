//get the api keys from the websites I want to use
//api key= AIzaSyDFJN8KsV0vonVDnuMQg39pedzZxhh7rVs
//above is for geolocation api https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY


let map;

function initMap(){
  map = new google.maps.Map(document.getElementById('map'),{
    center: { lat: -34.397, lng: 150.644},
    zoom:8,
  });
}

// function to start the map location from google maps api
let venueMap; 
function init() {
  var mapOptions = {                        // set up the map options
    center: new google.maps.LatLng("0.0", "0.0"),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 13
  };
                                      //Map() draws a map
  venueMap = new google.maps.Map(document.getElementById('mapDiv'), mapOptions);
}

function loadScript() {
  var script = document.createElement('script');                           //Create <script> element
  script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyDFJN8KsV0vonVDnuMQg39pedzZxhh7rVs&callback=init';

  var mapDiv = document.getElementById("mapDiv");
  mapDiv.appendChild(script); //add element to page
};


window.onload = loadScript; //Onload call





