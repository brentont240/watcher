export default class MovieCard {
    constructor() {

    }
    init() {

    }

    movieCardTemplate(movie) {
        // one movie is passed in and this function generates html for that movie.
        let card = document.createElement("div");
        card.innerHTML = `<div class="movie-card">
        <a href="signup.html"> <img class="movie-img" alt="movie art" src="../interstellar.jpeg"></a>
        <div class="movie-text">
            <a href="signup.html"> <p class="name">${movie.name}</p> </a>
            <p class="genre">${movie.genre}</p>
            <p class="desc">${movie.desc}</p>
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
}