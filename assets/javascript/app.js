//News API query

var queryURL = "https://newsapi.org/v2/everything?q="    "&domains="    "&apiKey=ae1ba1afbec248f99dc29c98209f1741"

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});
