
// TODO: add a way to add to list (aimilar to add to cart in the other thing)
export default class movieDetails{
    constructor(movieId, dataSource) {
        this.movieId = movieId;
        this.movie = {};
        this.starRating = "";
        this.dataSource = dataSource;
    }

    // look at ways to include more red into this!
    renderMovieDetails(){
      // TODO: add a "add to watchlist" button if the user is logged in
      // something like this: <button class="btn">&#9547;  &nbsp;Add to Watchlist</button>
      return `<section class="movie-details center-text container">
        <h1 class="movie-details-title">${this.movie.name}</h1>
        <hr class="hr-primary-fade">
        <p>${this.movie.year} &#9474; ${this.movie.time} &#9474; ${this.movie.genre}</p>
        <div class="row">
          <div class="column">
            <img src="${this.movie.imgUrl}" class="details-img" alt="${this.movie.name}">
          </div>
          <div class="column left-text details-box-shadow details-box">
            <p class="rating">Rating: ${this.starRating}</p>
            <p class="description">${this.movie.Desc}</p>
          </div>
        </div>
      </section>
      `;
    }

    getStarRating(){
      // add full stars until you get to the rating
      for (let i = 0; i < this.movie.Rate; i++) {
        this.starRating += "&#9733";
      }
      // add in blank stars to fill in the rest
      if (this.movie.Rate != 5){
        for (let i = this.movie.Rate; i < 5; i++) {
          this.starRating += "&#9734;";
        }
      }
    }

    async init(){
      // TODO: use something like this to get the data
      // this.movie = await this.dataSource.findMovieById(this.movieId);

      // testing
      this.movie = {
        "id": "0",
        "name": "Interstellar",
        "imgUrl": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        "Desc": "Best movie ever made",
        "Rate": "5",
        "year": "2014",
        "time": "2hr 49min",
        "genre": "Sci-Fi"
      };
      this.getStarRating();
      document.querySelector("main").innerHTML = this.renderMovieDetails();
    }

}