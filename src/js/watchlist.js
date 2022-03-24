// TODO: WORK ON JS TO IMPLEMENT THE WATCHLIST AND LOAD EVERYTHING IN

export default class watchlist{
constructor(list, renderLocation) {
    this.movielist = list;
    this.renderLocation = renderLocation;
}    

renderWatchlist(){
let watchlistHTML = `<div class="watchlist">`;
this.movielist.forEach( movie => {
    watchlistHTML += `
    <div class="watchlist-item">
    <img src="${movie.imageUrl}" alt="${movie.title}" class="watchlist-img">    
    <div>
        <h3>${movie.title}</h3>
        <p>${movie.details}</p>
        <button class="watchlist-btn">&#9472; &nbsp;Remove from list</button>
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

// makes sure that the user wants to clear the whole watch list
clearWatchlistAlert(){
    let clearlist = confirm("Are you sure you want to clear the watchlist? Note: this action cannot be undone!");
    if(clearlist){
        // clear the watchlist (need to call the api to do it)
    } 
}

init(){
// TODO: do something else if the watchlist is empty!
 this.renderWatchlist();

 document.querySelector("#clear-watchlist").addEventListener("click", this.clearWatchlistAlert);

}

}
