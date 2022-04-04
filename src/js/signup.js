
import { loadHeaderFooter } from "./utils.js";
loadHeaderFooter();
  let form = document.querySelector("#blob-btn")
  console.log("hello")
  form.addEventListener("click", (e) =>{
    console.log("hello")

  e.preventDefault()
  let json = []
  json.name = document.getElementById("nameOfUser").value
  json.email = document.getElementById("email").value
  json.password = document.getElementById("typedPassword").value
  // const options = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(json),
  //   };
  signupUser(json);

  // let message = fetch("https://film-watcher.herokuapp.com/auth/signup", options);
//   checkPassword()
  // console.log(message)
})

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

async function signupUser(userInfo){
  const loginOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name: userInfo.name, email: userInfo.email, password: userInfo.password})
  }
  const getLogin = await fetch("https://film-watcher.herokuapp.com/auth/signup", loginOptions);
  if (getLogin.ok) {
    window.location.replace("signup.html");
  }
  // do an error if there is an error
}