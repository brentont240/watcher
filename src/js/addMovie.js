import { getCookie, alertMessage } from "./utils.js";

let form = document.querySelector("#add_form");
form.addEventListener("submit" , (e) => {
    e.preventDefault();
    // console.log("clicked");
 
    let json = [];
    json.title = document.getElementById("title").value;
    json.yearPublished = document.getElementById("pub_year").value;
    json.rating = document.getElementById("rating").value;
    json.minutes = document.getElementById("minute_slider").value + " min";
    json.genre = document.getElementById("movie_genre").value;
    json.imageUrl = document.getElementById("movie_img").value;
    json.description = document.getElementById("movie_desc").value;
    json.starRating = document.getElementById("starRating").value;

    console.log(json);

    addMovie(json);


});

var slider = document.getElementById("minute_slider");
var output = document.getElementById("movie_length");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
};

async function addMovie(formInput){
  const token = getCookie("token");

  const options = {
      method: "POST",
      headers: {
        // "Access-Control-Allow-Origin":  "https://brentont240.github.io/",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,

      },
      body: JSON.stringify({
        title: formInput.title,
        yearPublished: formInput.yearPublished,
        rating: formInput.rating,
        minutes: formInput.minutes,
        genre: formInput.genre,
        imageUrl: formInput.imageUrl,
        description: formInput.description,
        starRating: formInput.starRating
      }),
    };

  let postMovie = await fetch("https://allow-cors.herokuapp.com/https://film-watcher.herokuapp.com/movies/add-movie", options);
  if(postMovie.ok){
    window.location.replace("index.html");
  } else if(postMovie.status === 500){
    alertMessage("You must be logged in to add a movie.","#add_form");
  } else {
    alertMessage("Error with adding movie.","#add_form");
  }
  // work on what happens
}
