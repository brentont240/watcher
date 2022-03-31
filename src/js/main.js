import ExternalServices from "./externalServices.js";
import { loadHeaderFooter } from "./utils.js";

const data = new ExternalServices;
loadHeaderFooter();
data.getData();

function showView() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
function checkCredentials()
{
  fetch('https://film-watcher.herokuapp.com/api-docs/#/visitor/logIn')
  .then(response => response.json())
  .then(json => {
    let username = json.username;
    let password = json.password;
    let isAdmin = json.isAdmin;
    let enteredUsername = getElementById("email").value;
    let enteredPassword = getElementById("password").value;
    if(enteredUsername == username && enteredPassword == password && isAdmin == true)
    {

    }
    else if(enteredUsername == username && enteredPassword == password && isAdmin == false)
    {

    }
    else
    {
      let failedLogin = document.createElement("h3");
      failedLogin.innerText("Incorrect username or password!");
      
    }
    {

    }

    
  });
  

}

function checkPassword()
{
  let password = getElementById("typedPassword");
  let confirmedPassword = getElementById("typedPasswordConfirm");
  if(password == confirmedPassword)
  {

  }
  else
  {
    errorMessage = document.createElement("h3");
    errorMessage.innerText = "Passwords do not match!";

  }
}

var slider = document.getElementById("minute_slider");
var output = document.getElementById("movie_length");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
