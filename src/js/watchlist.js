// TODO: WORK ON JS TO IMPLEMENT THE WATCHLIST AND LOAD EVERYTHING IN
import { getCookie } from "./utils.js";
export default class watchlist{
constructor(endpointBase, renderLocation) {
    this.endpointBase = endpointBase;
    this.movielist = [];
    this.renderLocation = renderLocation;
    this.token = getCookie("token");
}    

renderWatchlist(){
let watchlistHTML = `<div class="watchlist">`;
// TODO: format this to make it look better
// TODO: Make it look better on mobile!!!
// TODO: FIX THE REMOVE BUTTON ON MOBILE
// TODO: Add the add to watchlist functionality
// TODO: add a read more link that goes to the movie details page!!!
// TODO: make it so that the add to watchlist button doesn't show up if the movie is in the watchlist!!!
// TODO: do something else if the watchlist is empty!
this.movielist.forEach( movie => {
    watchlistHTML += `
    <div class="watchlist-item">
    <img src="${movie.imageUrl}" alt="${movie.title}" class="watchlist-img">    
    <div>
        <h3>${movie.title}</h3>
        <p class="watchlist-movie-details">${movie.yearPublished} &#9474; ${movie.minutes} &#9474; ${movie.genre} &#9474; ${movie.rating}</p>
        <p><small>${movie.description.substring(0,50)}...</small></p>
        <button class="watchlist-btn watchlist-remove" id="${movie._id}">&#9472; &nbsp;Remove from list</button>
    </div>      
</div>
    `
});

// adds the closing div to the watchlist class and adds the clear watchlist button (the other div is used to center the button)
watchlistHTML += `</div>
<div class="clear-watchlist-container">
<button class="watchlist-btn" id="clear-watchlist">X &nbsp;Clear watchlist</button>
</div>
`

this.renderLocation.innerHTML = watchlistHTML;
}

renderError(){
    return `<h2 class="center-text">Error: Problem with retrieving watchlist!</h2>
    <p class="center-text">Please go to a different page or try again.</p>
    `;
}

renderUnauthorizedError(){
    return `<h2 class="center-text">Error: Unauthorized!</h2>
    <p class="center-text">You must be logged in to use the watchlist feature. Please log in or create an account with the "sign up" button above.</p>
    `;
}

renderEmptyWatchlist(){
   return `<h2 class="center-text">No movies in watchlist!</h2>
    <p class="center-text">Visit the homepage to find movies to add to your watchlist.</p>
    `;
}

// makes sure that the user wants to clear the whole watch list
async clearWatchlistAlert(){
    let clearlist = confirm("Are you sure you want to clear the watchlist?\nNote: this action cannot be undone!");
    // do this if ok is pressed
    if(clearlist){
        // clear the watchlist (need to call the api to do it)
        const token = getCookie("token");
        const clearOptions = { method: "DELETE", 
        headers: {
            Authorization: `Bearer ${token}`
        }};
        await fetch("https://film-watcher.herokuapp.com/movies/watchlist", clearOptions);
        return location.reload();
    }
}

async init(){
// TODO: do something else if the watchlist is empty!
 let getWatchlistOptions = {
    method: "GET",
    headers: {
        Authorization: `Bearer ${this.token}`
    }};
 let getWatchlist = await fetch(this.endpointBase+"watchlist", getWatchlistOptions);
 if(getWatchlist.ok){
    this.movielist = await getWatchlist.json();
    this.movielist = this.movielist.movies;

    // if the watchlist is empty, then tell the user it is empty


    console.log(this.movielist);
    this.renderWatchlist();
    document.querySelector("#clear-watchlist").addEventListener("click", this.clearWatchlistAlert);
    document
      .querySelector(".watchlist")  
      .addEventListener("click", async function (e) {
        if (e.target.classList.contains("watchlist-remove")) {
          // gets the movie id, then makes a request to remove it from the watchlist
          const token = getCookie("token");
          let movieId = e.target.id;
          const removeOptions = { method: "DELETE",    
           headers: {
            Authorization: `Bearer ${token}`
        }};
          await fetch("https://film-watcher.herokuapp.com/movies/watchlist/"+movieId, removeOptions);
          return location.reload();
        }
      });
 }  else if (!this.movielist || this.movielist.length === 0){
    this.renderLocation.innerHTML = this.renderEmptyWatchlist();
    return;
}
 else if (getWatchlist.status === 401){
    this.renderLocation.innerHTML = this.renderUnauthorizedError();
 } else {
    this.renderLocation.innerHTML = this.renderError();
 }

}
}
