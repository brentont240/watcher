
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
      return `<section class="movie-details center-text">
        <h1 class="movie-title-details">${this.movie.name}</h1>
        <img src="" alt="">
        <p class="rating">${this.starRating}</p>
        <p class="description">${this.movie.Desc}</p>
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
      this.movie =       {
        "id": "0",
        "name": "Interstellar",
        "url": "https://something",
        "Desc": "Best movie ever made",
        "Rate": "5",
        "year": "20??",
        "time": "2hr ?min",
        "genre": "Sci-Fi"
      };

      this.getStarRating();
      document.querySelector("main").innerHTML = this.renderMovieDetails();
    }

}