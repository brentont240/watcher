import MovieCard from "./movieCard.js";

const movie = new MovieCard;

function convertToJson(res) {
    let jsonResponse = res.json();
    if (res.ok) {
      return jsonResponse;
    } else {
      throw { name: "services error", message: jsonResponse };
    }
  }

export default class ExternalServices {
    constructor() {}
    async getData() {
        let movie_data = await fetch("https://film-watcher.herokuapp.com/movies").then(convertToJson).then((data) => data);
        // console.log(movie_data);
        movie.movieGenerator(movie_data);
    }


    // function to handle the search

    // function to login

    // functions to update, create, and retrieve a watchlist
    
}