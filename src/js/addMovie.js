let form = document.querySelector("#add_form");
form.addEventListener("submit" , (e) => {
    e.preventDefault();
    // console.log("clicked");
 
    let json = [];
    json.title = document.getElementById("title").value;
    json.yearPublished = document.getElementById("pub_year").value;
    json.rating = document.getElementById("rating").value;
    json.minutes = document.getElementById("minute_slider").value;
    json.genre = document.getElementById("movie_genre").value;
    json.imageUrl = document.getElementById("movie_img").value;
    json.description = document.getElementById("movie_desc").value;
    json.starRating = document.getElementById("starRating").value;

    // console.log(json);

    const options = {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin":  "https://brentont240.github.io/",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
      };

    let message = fetch("https://film-watcher.herokuapp.com/user/addMovie", options);
    console.log("fetch message", message);

});

var slider = document.getElementById("minute_slider");
var output = document.getElementById("movie_length");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
};

