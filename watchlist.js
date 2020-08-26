$(document).ready(() => {
    // console.log("Ready")
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
    // console.log(watchlist);
  
    function renderMovie(movieArray) {
          $(".movies-container").empty();
          const movieHTML = watchlist.map((currentMovie) => {
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
                                <button class = "remove-button" onClick = removeFromWatchList("${currentMovie.imdbID}") type = "button">REMOVE</button>
                                <button class = "movie-button" type = "button"><a class = "imdb" href= "https://www.imdb.com/title/${currentMovie.imdbID}">IMDB</a></button>
                              </div>
                          </div>
                  `);  
          });
      // console.log(movieHTML.join(' '))
      // $('.movies-container').html(movieHTML.join(' '))
    };
    renderMovie(movieData);
  });
  
function removeFromWatchList(imdbID) {
    var movie = movieData.find((currentMovie) => {
        return currentMovie.imdbID == imdbID;
      });
    var removewatchlistJSON = localStorage.removeItem('watchlist');
}


//   function saveToWatchList(imdbID) {

//     var watchlistJSON = localStorage.getItem('watchlist');
//     var watchlist = JSON.parse(watchlistJSON);
//     // console.log(watchlist);
//     if (watchlist == null) {
//       watchlist = [];
//     }
//     watchlist.push(movie);
//     watchlistJSON = JSON.stringify(watchlist);
//     localStorage.setItem("watchlist", watchlistJSON);
//   }