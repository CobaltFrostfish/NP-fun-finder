//get the api keys from the websites I want to use
//api key= AIzaSyDFJN8KsV0vonVDnuMQg39pedzZxhh7rVs
//above is for geolocation api https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY

var url = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDFJN8KsV0vonVDnuMQg39pedzZxhh7rVs"

$.ajax({
    url: url,
    method: "GET",
}).then(response => {
    console.log(response)
})