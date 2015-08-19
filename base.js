var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"

var map;

$(document).ready(function(){

//Create Map
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 8
  });

//Fetch Quake Data
  $.get("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson", function(data) {
            data.features.forEach (function (quake) {
            var title =  quake.properties.title 
            $("#info").append("<p>" + title + "</p>");
      });

  });

/** Create Marker */

var myLatLng = {lat: -25.363, lng: 131.044};

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title:"Hello World!"
});



})


/** 
-Grabs Time
  $.get("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson", function(response_data) {
            response_data.features.forEach (function (title_data) {
	            $("#info").append("<p>" + title_data.properties.title + "</p>");

      });


data.features[0].properties.time

-Grabs title 
GLOBAL_MOCK_DATA_OBJECT.data[0].features[0].properties.title

-Grabs coordinates
GLOBAL_MOCK_DATA_OBJECT.data[0].features[0].geometry.coordinates;
*/

/** Giffaw
$( "#button" ).click(function() {
		  var pick = $("input").val();
		   $.get("http://api.giphy.com/v1/gifs/search", {"q": pick, "api_key": "dc6zaTOxFJmzC"}, function(response_data) {
		 	response_data.data.forEach (function (element) {
		 			$(".container").append("<img src=" + element.images.fixed_height.url + ">");


*/