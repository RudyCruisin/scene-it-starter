var moviedatasearch;

$(document).ready(() => {
  // console.log("Ready")
  $("#search-form").on("submit", function (e) {
    e.preventDefault();
    var searchfield = e.target[0].value;
    var urlEncodedSearchString = encodeURIComponent(searchfield);
    fetch("http://www.omdbapi.com/?apikey=8534d2a7&s=" + urlEncodedSearchString)
      .then((response) => response.json())
      .then((data) => {
        moviedatasearch = data.Search;
        renderMovie(data.Search);
        console.log("two: " + moviedatasearch);
        // console.log(data);
      });
  });

  console.log("one: " + moviedatasearch);
  // renderMovie(movieData);

  function renderMovie(movieArray) {
    $(".movies-container").empty();
    const movieHTML = movieArray.map((currentMovie) => {
      // console.log(currentMovie.Title)
      $(".movies-container").append(`
                        <div class = "movie">
                            <img class = "movie-image" src = "${currentMovie.Poster}" />
                            <div class = "movie-title-date">
                                <div class = "movie-title">${currentMovie.Title}
                                </div>
                                <div class = "release-date"><span class = "year">${currentMovie.Year}</span>
                                </div>
                            </div>
                            <div class = "card-buttons">
                              <button class = "add-button" onClick = saveToWatchList('${currentMovie.imdbID}') type = "button">ADD</button>
                              <button class = "movie-button" type = "button"><a class = "imdb" href= "https://www.imdb.com/title/${currentMovie.imdbID}">IMDB</a></button>
                            </div>
                        </div>
                `);
    });
    // console.log(movieHTML.join(' '))
    // $('.movies-container').html(movieHTML.join(' '))
  }
  // renderMovie();
});

function saveToWatchList(imdbID) {
  // console.log("happy");
  var movie = moviedatasearch.find((currentMovie) => {
    return currentMovie.imdbID == imdbID;
  });
  var watchlistJSON = localStorage.getItem("watchlist");
  var watchlist = JSON.parse(watchlistJSON);
  // console.log(watchlist);
  if (watchlist == null) {
    watchlist = [];
  }
  watchlist.push(movie);
  watchlistJSON = JSON.stringify(watchlist);
  localStorage.setItem("watchlist", watchlistJSON);
}
