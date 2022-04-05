import { getCookie, alertMessage } from "./utils.js";

let update_form = document.querySelector("#update_form");
let delete_form = document.querySelector("#delete_form");
update_form.addEventListener("submit" , (e) => {
    e.preventDefault();
    // console.log("clicked");
 
    let json = [];
    json._id = document.getElementById("_id").value;
    json.title = document.getElementById("title").value;
    json.yearPublished = document.getElementById("pub_year").value;
    json.rating = document.getElementById("rating").value;
    json.minutes = document.getElementById("minute_slider").value + " min";
    json.genre = document.getElementById("movie_genre").value;
    json.imageUrl = document.getElementById("movie_img").value;
    json.description = document.getElementById("movie_desc").value;
    json.starRating = document.getElementById("starRating").value;
    updateMovie(json);
});

delete_form.addEventListener("submit" , (e) => {
  e.preventDefault();
  // console.log("clicked");

  let json = [];
  json._id = document.getElementById("delete-id").value;
  console.log(json);
  deleteMovie(json);
});

var slider = document.getElementById("minute_slider");
var output = document.getElementById("movie_length");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
};

async function updateMovie(formInput){
  const token = getCookie("token");

  const options = {
      method: "PUT",
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

  let update = await fetch("https://allow-cors.herokuapp.com/https://film-watcher.herokuapp.com/movies/update-movie/"+formInput._id, options);
  if(update.ok){
    window.location.replace("index.html");
  } else if(update.status === 500){
    alertMessage("You must be logged in and be an admin to update a movie.","#update_form");
  } else {
    alertMessage("Error with updating movie.","#update_form");
  }
  // work on what happens next!!!
}


async function deleteMovie(formInput){
  const token = getCookie("token");

  const options = {
      method: "DELETE",
      headers: {
        // "Access-Control-Allow-Origin":  "https://brentont240.github.io/",
        Authorization: `Bearer ${token}`
      }
    };

  let deleteMov = await fetch("https://allow-cors.herokuapp.com/https://film-watcher.herokuapp.com/movies/delete-movie/"+formInput._id, options);
  if(deleteMov.ok){
    window.location.replace("index.html");
  } else if(deleteMov.status === 500){
    alertMessage("You must be logged in and be an admin to delete a movie.","#update_form");
  } else {
    alertMessage("Error with deleting movie, make sure that the id is correct.","#update_form");
  }
  // work on what happens next!!!
}