import ExternalServices from "./externalServices.js";
import { loadHeaderFooter } from "./utils.js";

const data = new ExternalServices;
loadHeaderFooter();
data.getData();

var slider = document.getElementById("minute_slider");
var output = document.getElementById("movie_length");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
};

