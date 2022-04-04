// import ExternalServices from "./externalServices.js";
import { loadHeaderFooter } from "./utils.js";


loadHeaderFooter();

function showView() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

var slider = document.getElementById("minute_slider");
var output = document.getElementById("movie_length");
output.innerHTML = slider.value; // Display the default slider value

