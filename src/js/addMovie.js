let form = document.querySelector("#add_form");
form.addEventListener("submit" , (e) => {
    e.preventDefault();
    console.log("clicked");
    let title = document.getElementById("title").value;
    let year = document.getElementById("pub_year").value;
    let rating = document.getElementById("rating").value;
    let minute_slider = document.getElementById("minute_slider").value;
    let movie_genre = document.getElementById("movie_genre").value;
    let movie_img = document.getElementById("movie_img").value;
    let movie_desc = document.getElementById("movie_desc").value;
   
   
    console.log(e)

});