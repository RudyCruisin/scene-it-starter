$(document).ready(() => {
  // console.log("Ready")

  function renderMovie(movieArray) {
    //         console.log("i'm here")
    // console.log(movieArray)
    document
      .getElementById("search-form")
      .addEventListener("submit", function (e) {
        var flag = false;
        const movieHTML = movieArray.map((currentMovie) => {
          if (flag === false) {
            $(".movies-container").empty();
            flag = true;
          }
          // console.log(currentMovie.Title)
          e.preventDefault();
          var searchfield = e.target[0].value;
          if (
            (kmpSearch(
              searchfield.toLowerCase(),
              currentMovie.Title.toLowerCase()
            ) !=
              -1) ===
            true
          ) {
            $(".movies-container").append(`
                        <div class = "movie">
                            <img class = "movie-image" src = "${currentMovie.Poster}" />
                            <div class = "movie-title-date">
                                <div class = "movie-title">${currentMovie.Title}
                                </div>
                                <div class = "release-date"><span class = "year">${currentMovie.Year}</span>
                                </div>
                            </div>
                            <button class = "movie-button" type = "button"><a class = "imdb" href= "https://www.imdb.com/title/${currentMovie.imdbID}"> IMDB</a></button>
                        </div>
                `);
          }

          // document.getElementById('search-form').reset();
        });
      });
    // console.log(movieHTML.join(' '))
    // $('.movies-container').html(movieHTML.join(' '))
  }
  renderMovie(movieData);
});

function kmpSearch(pattern, text) {
  if (pattern.length == 0) return 0; // Immediate match

  // Compute longest suffix-prefix table
  var lsp = [0]; // Base case
  for (var i = 1; i < pattern.length; i++) {
    var j = lsp[i - 1]; // Start by assuming we're extending the previous LSP
    while (j > 0 && pattern.charAt(i) != pattern.charAt(j)) j = lsp[j - 1];
    if (pattern.charAt(i) == pattern.charAt(j)) j++;
    lsp.push(j);
  }

  // Walk through text string
  var j = 0; // Number of chars matched in pattern
  for (var i = 0; i < text.length; i++) {
    while (j > 0 && text.charAt(i) != pattern.charAt(j)) j = lsp[j - 1]; // Fall back in the pattern
    if (text.charAt(i) == pattern.charAt(j)) {
      j++; // Next char matched, increment position
      if (j == pattern.length) return i - (j - 1);
    }
  }
  return -1; // Not found
}
