import movieDetails from "./movieDetails.js";
import { getParams } from "./utils.js";

// TODO: CHANGE 1,2 TO THE ACTUAL VALUES
const EndpointURL = "https://film-watcher.herokuapp.com/movies/details/"
// TODO: Change it so it gets the id from the parameters
// const MovieId = getParams("movieId");
const MovieId = "62336331c6977d973559befb";
// testing a bad id
// const MovieId = "62336331c6977d973559b";
const movie = new movieDetails(MovieId, EndpointURL);

movie.init();
