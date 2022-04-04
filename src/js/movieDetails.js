
// TODO: add a way to add to list (aimilar to add to cart in the other thing)
import { getCookie } from "./utils.js";
export default class movieDetails{
    constructor(movieId, endpointBase) {
        this.movieId = movieId;
        this.movie = {};
        this.starRating = "";
        this.endpointBase = endpointBase;
        this.token = getCookie("token");
    }

    // look at ways to include more red into this!
    renderMovieDetails(){
           // TODO: add a "add to watchlist" button if the user is logged in
      // something like this: <button class="btn">&#9547;  &nbsp;Add to Watchlist</button>
      // TODO: only show this button if the user is logged in and if the movie is not in their watchlist
      return `<section class="movie-details center-text container">
        <h1 class="movie-details-title">${this.movie.title}</h1>
        <hr class="hr-primary-fade">
        <p>${this.movie.yearPublished} &#9474; ${this.movie.minutes} &#9474; ${this.movie.genre} &#9474; ${this.movie.rating}</p>
        <div class="row">
          <div class="column">
            <img src="${this.movie.imageUrl}" class="details-img" alt="Poster for ${this.movie.title}.">
          </div>
          <div class="column left-text details-box-shadow details-box">
            <p class="rating">Rating: ${this.starRating}</p>
            <p class="description">${this.movie.description}</p>
            <button class="watchlist-btn add-watchlist" id="${this.movie._id}">&#9547; &nbsp;Add to Watchlist</button>
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
      console.log(this.movie.starRating);
      for (let i = 0; i < this.movie.starRating; i++) {
        this.starRating += "&#9733";
      }
      // add in blank stars to fill in the rest
      if (this.movie.starRating != 5){
        for (let i = this.movie.starRating; i < 5; i++) {
          this.starRating += "&#9734;";
        }
      }
    }

    async init(){
      // TODO: use something like this to get the data
      const detailsBody = document.querySelector("main");
      let response = await fetch(this.endpointBase+"details/"+this.movieId);
      // if the response is ok, then render the page normally
      if(response.ok){
        response = await response.json();
        this.movie = response.movie;
      // TODO: do we want them to add a star rating system?!!!!!!
        this.getStarRating();
        detailsBody.innerHTML = this.renderMovieDetails();

        // TODO: hide the watchlist button when a user is not logged in, or if the movie is in their watchlist!
        // TODO: or change the button to say in watchlist or something and make it orange and a checkmark and have it take them to watchlist

        // add functionality to the add to watchlist buttons
        document
        .querySelector(".add-watchlist")
        .addEventListener("click", function (e) {
            let movieId = e.target.id;
            const addOptions = { method: "POST", 
             headers: {
              Authorization: `Bearer ${this.token}`
          } };
            return fetch("https://film-watcher.herokuapp.com/movies/add-to-watchlist/"+movieId, addOptions);
          });
      }  else {
        // if there is a problem, alert the user!
        detailsBody.innerHTML = this.renderError();
      }
    }
}