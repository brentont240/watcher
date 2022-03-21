export default class MovieCard {
    constructor() {

    }
    init() {

    }

    movieCardTemplate(movie) {
        console.log("made it to movie data");
        // console.log(movie);
        // console.log(movie.movies[1].name);
        
        // console.log(movie.movies);
        // i need to pass in one movie
        let card = document.createElement("div");
        // document.querySelector(".movies");

        card.innerHTML = `<div class="movie-card">
        <a href="signup.html"> <img class="movie-img" alt="movie art" src="../interstellar.jpeg"></a>
        <div class="movie-text">
            <a href="signup.html"> <p class="name">${movie.name}</p> </a>
            <p class="genre">${movie.genre}</p>
            <p class="desc">${movie.Desc}</p>
        </div>
        </div>   `;
        let list = document.querySelector(".movies");
        list.appendChild(card);
        
    }
    // function to generate all the needed movies for the page
    movieGenerator(movies) {
        // gets one movie and passes it to movieCardTemplate
        movies.movies.map(item => {
            let movie = [];
            movie.name = item.name;
            movie.id = item.id;
            movie.genre = item.genre;
            movie.desc = item.Desc;
            this.movieCardTemplate(movie);
        })
    }
    // It will need all of the movie data and call movie card template
}