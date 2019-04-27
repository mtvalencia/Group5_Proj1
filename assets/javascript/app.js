//News API query

// var location = 



// .then(function(response) {
//   var results = response.data;

//   for (var i = 0; i < results.length; i++) {



function queryNews(location) {
  let queryURL = "https://newsapi.org/v2/everything?q=" + location + "&apiKey=ae1ba1afbec248f99dc29c98209f1741"

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  });

  let htmlRequest = new XMLHttpRequest();
  htmlRequest.onload = function () {
    if (htmlRequest.response) {
      let object = JSON.parse(htmlRequest.response);
    } else {
      console.log("error");
    }
  };
  htmlRequest.open("GET", queryURL, true);
  htmlRequest.send();
}
queryNews("denver", function (results) {
  console.log(results);
});