// API token goes here
var key = '9d56d95891b46e';

// Add layers that we need to the map
var streets = L.tileLayer.Unwired({key: key, scheme: "streets"});

// Initialize the map
var map = L.map('map', {
        center: [39.676681, -104.961936], //map loads with this location as center
        zoom: 11,
        layers: [streets] // Show 'streets' by default
});

// Add the 'scale' control
L.control.scale().addTo(map);

// Add the 'layers' control
L.control.layers({
    "Streets": streets
}).addTo(map);

// var popup = L.popup();

//     function onMapClick(e) {
//         popup.setLatLng(e.latlng)
//             .setContent("You clicked the map at " + e.latlng.toString())
//             .openOn(map);
//     }

// map.on('click', onMapClick);

map.on("click", function (e) {
    var coord = e.latlng.toString().split(',');
    var latitudeSplit = coord[0].split('LatLng(');
    var longitudeSplit = coord[1].split(')');
    var latStr = latitudeSplit.toString();
    var longStr = longitudeSplit.toString();
    var lat = latStr.replace(/,/g, "");
    var long = longStr.replace(/,/g, "");
    console.log(lat);
    console.log(long);

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://us1.locationiq.com/v1/reverse.php?key=" + key + "&lat=" + lat + "&lon=" + long + "&format=json",
    "method": "GET"
  }
  //searchNews with  locationIQ API response
  $.ajax(settings).done(function (response) {
    var cityState = "%22" + response.address.city + "%22%2C%20" + response.address.state;
    console.log(cityState);
    searchNews(cityState);
  });
});
  //News API query
    var searchNews = function(location) {
      var queryURL = "https://newsapi.org/v2/everything?q=" + location + "&apiKey=ae1ba1afbec248f99dc29c98209f1741"

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        document.querySelector("#newsArticle").innerHTML = ""
        for (var i = 0; i < 3; ++i){
          var newsHTML = buildHTMLrow(response.articles[i])
          document.querySelector("#newsArticle").appendChild(newsHTML)
        }
      })};
  //Append API query response into newsArticle table
  
      function buildHTMLrow(article) {
  
        var divElement = document.createElement("tr")
      
        var rowHTML = `
          <td>${article.source.name}</td>
          <td>${article.title}</td>
          <td>${article.description}</td>
          <td><a href="${article.url}">Link</a></td>
        `
        divElement.innerHTML = rowHTML
        return divElement
      }