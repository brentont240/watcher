export default class MovieCard {
    constructor() {

    }
    init() {

    }

    movieCardTemplate(movie) {
        // one movie is passed in and this function generates html for that movie.
        let card = document.createElement("div");
        card.innerHTML = `<div class="movie-card">
        <a href="movie-details.html/${movie.id}"> <img class="movie-img" alt="movie art" src="${movie.url}"></a>
        <div class="movie-text">
            <a href="movie-details.html/${movie.id}"> <p class="name">${movie.name}</p> </a>
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
            movie.name = item.title;
            movie.id = item._id;
            movie.genre = item.genre;
            movie.desc = item.Desc;
            movie.url = item.imageUrl;
            this.movieCardTemplate(movie);
        })
    }
}