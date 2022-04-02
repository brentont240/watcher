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

    console.log(json);

    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
      };

    fetch("https://film-watcher.herokuapp.com/user/addMovie", options);
    console.log(e)

});