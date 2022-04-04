import { loadHeaderFooter, createCookie } from "./utils.js";
loadHeaderFooter();

let form = document.querySelector("#signinButton");
console.log("hello")
form.addEventListener("click", (e) =>{
  e.preventDefault();

  let json = [];
  json.email = document.getElementById("email").value;
  json.password = document.getElementById("password").value;

loginUser(json);


//   checkPassword()
});

function checkCredentials()
{
fetch('https://film-watcher.herokuapp.com/api-docs/#/auth/login')
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


};

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
};

async function loginUser(userInfo){
  const loginOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email: userInfo.email, password: userInfo.password})
  }
  const getLogin = await fetch("https://film-watcher.herokuapp.com/auth/login", loginOptions);
  if (getLogin.ok) {
  const token = await getLogin.json();
  createCookie("token", token.token);
  }
  else
  {
    alert("Invalid username or password!")
  }
}