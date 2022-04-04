import movieDetails from "./movieDetails.js";
import { getParams } from "./utils.js";

// TODO: CHANGE 1,2 TO THE ACTUAL VALUES
const endpointBase = "https://film-watcher.herokuapp.com/movies/"
// TODO: Change it so it gets the id from the parameters
const movieId = getParams("movieId");
// const MovieId = "62336331c6977d973559befb";
// testing a bad id
// const MovieId = "62336331c6977d973559b";
const movie = new movieDetails(movieId, endpointBase);

movie.init();
