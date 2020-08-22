// document.addEventListener('DOMContentLoaded', function() {
//     console.log('doc is loaded!');
//     renderMovies (movieData)
//     // console.log(movieData);
// });

// function renderMovies (movieArray) {
//     const movieHTML = movieArray.map((currentMovie, index) => {
//         console.log(`The current movie is ${currentMovie.Title}`)
//         document.getElementsByClassName("movie-title")[index].appendChild(currentMovie.Title);
//         return currentMovie;
        
//     });

//     // console.log(movieHTML);
//     return movieHTML;
// };
// // console.log(renderMovies);


$(document).ready( ()=> {
    console.log("Ready")

    function renderMovie(movieArray) {
//         console.log("i'm here")
        console.log(movieArray)

        const movieHTML = movieArray.map((currentMovie) => {
            console.log(currentMovie.Title)
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
            // return `<img src = ${currentMovie.Poster} /> <div>${currentMovie.Title}</div>`
        })

//         // console.log(movieHTML.join(' '))

        // $('.movies-container').html(movieHTML.join(' '))
    }

    renderMovie(movieData)
    document.getElementById('search-form').addEventListener('submit', function(e){
        console.log(e);
        e.preventDefault();
    })
});