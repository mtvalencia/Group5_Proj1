//News API query

$("#news-button").on('click',function(){
  searchNews("denver")
  })
  
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
  
      function buildHTMLrow(article) {
  
        var divElement = document.createElement("div")
      
        var rowHTML = `
          <div>${article.source.name}</div>
          <div>${article.title}</div>
          <div>${article.author}</div>
          <div>${article.description}</div>
          <div>${article.url}</div>
        `
        divElement.innerHTML = rowHTML
        return divElement
      }