
// TODO: add a way to add to list (aimilar to add to cart in the other thing)
export default class movieDetails{
    constructor(movieId, endpointURL) {
        this.movieId = movieId;
        this.movie = {};
        this.starRating = "";
        this.endpointURL = endpointURL;
    }

    // look at ways to include more red into this!
    renderMovieDetails(){
           // TODO: add a "add to watchlist" button if the user is logged in
      // something like this: <button class="btn">&#9547;  &nbsp;Add to Watchlist</button>
      return `<section class="movie-details center-text container">
        <h1 class="movie-details-title">${this.movie.title}</h1>
        <hr class="hr-primary-fade">
        <p>${this.movie.yearPublished} &#9474; ${this.movie.minutes} &#9474; ${this.movie.genre} &#9474; ${this.movie.rating}</p>
        <div class="row">
          <div class="column">
            <img src="${this.movie.imageUrl}" class="details-img" alt="Poster for ${this.movie.title}.">
          </div>
          <div class="column left-text details-box-shadow details-box">
            <p class="rating">Rating: ${this.starRating} (Do we want to add this)</p>
            <p class="description">${this.movie.description}</p>
            <button class="watchlist-btn">&#9547; &nbsp;Add to Watchlist</button>
          </div>
        </div>
      </section>
      `;
    }

    renderError(){
      return `<h1 class="center-text">Error: No movie found!</h1>
      <p class="center-text">Please go to a different page or try again.</p>
      `
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
      const detailsBody = document.querySelector("main");
      let response = await fetch(this.endpointURL+this.movieId);
      // if the response is ok, then render the page normally
      if(response.ok){
        response = await response.json();
        this.movie = response.movie;
      // TODO: do we want them to add a star rating system?!!!!!!
       // this.getStarRating();
        detailsBody.innerHTML = this.renderMovieDetails();
      }  else {
        // if there is a problem, alert the user!
        detailsBody.innerHTML = this.renderError();
      }
    }
}