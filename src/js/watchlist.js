// TODO: WORK ON JS TO IMPLEMENT THE WATCHLIST AND LOAD EVERYTHING IN

export default class watchlist{
constructor(endpointBase, renderLocation) {
    this.endpointBase = endpointBase;
    this.movielist = [];
    this.renderLocation = renderLocation;
}    

renderWatchlist(){
let watchlistHTML = `<div class="watchlist">`;
// TODO: format this to make it look better
// TODO: FIX THE REMOVE BUTTON ON MOBILE
// TODO: Add the add to watchlist functionality
this.movielist.forEach( movie => {
    watchlistHTML += `
    <div class="watchlist-item">
    <img src="${movie.imageUrl}" alt="${movie.title}" class="watchlist-img">    
    <div>
        <h3>${movie.title}</h3>
        <p>${movie.yearPublished} &#9474; ${movie.minutes} &#9474; ${movie.genre} &#9474; ${movie.rating}</p>
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
    return `<h1 class="center-text">Error: Problem with retrieving watchlist!</h1>
    <p class="center-text">Please go to a different page or try again.</p>
    `
}

// makes sure that the user wants to clear the whole watch list
clearWatchlistAlert(){
    let clearlist = confirm("Are you sure you want to clear the watchlist?\nNote: this action cannot be undone!");
    // do this if ok is pressed
    if(clearlist){
        // clear the watchlist (need to call the api to do it)
        const clearOptions = { method: "PUT"};
        return fetch(this.endpointBase+"clear-watchlist", clearOptions);
    } 
}

async init(){
// TODO: do something else if the watchlist is empty!

 let getWatchlist = await fetch(this.endpointBase+"watchlist");
 if(getWatchlist.ok){
    this.movielist = await getWatchlist.json();
    this.movielist = this.movielist.movies;
    console.log(this.movielist);
    this.renderWatchlist();
    document.querySelector("#clear-watchlist").addEventListener("click", this.clearWatchlistAlert);
    document
      .querySelector(".watchlist")
      .addEventListener("click", function (e) {
        if (e.target.classList.contains("watchlist-remove")) {
          // gets the movie id, then makes a request to remove it from the watchlist
          let movieId = e.target.id;
          const removeOptions = { method: "PUT"};
          return fetch(this.endpointBase+"remove-from-watchlist/"+movieId, removeOptions);
        }
      });
 }  else {
    this.renderLocation = this.renderError();
 }

}
}
