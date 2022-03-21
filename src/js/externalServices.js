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
        console.log('made it to get data');
        let movie_data = await fetch("../dummy_movies.json").then(convertToJson).then((data) => data);
        movie.movieGenerator(movie_data);
    }

    // function to grab one movie

    // function to handle the search

    // function to login

    // functions to update, create, and retrieve a watchlist
}