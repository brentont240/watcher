import watchlist from "./watchlist.js";

// const testList = [
// {
//     title: "Interstellar",
//     imageUrl: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
// },
// {
//     title: "Jurrasic Park",
//     imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg"
// },
// {
//     title: "Home Alone",
//     imageUrl: "https://cdn.pastemagazine.com/www/blogs/lists/1990.jpg"
// },
// {
//     title: "National Treasure",
//     imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Movie_national_treasure.JPG/220px-Movie_national_treasure.JPG"
// }
// ];

const endpointBase = "https://film-watcher.herokuapp.com/movies/"

const renderArea = document.querySelector("#watchlist-section");

const userWatchlist = new watchlist(endpointBase, renderArea);
userWatchlist.init();