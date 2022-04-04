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