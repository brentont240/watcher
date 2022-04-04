
import { loadHeaderFooter } from "./utils.js";
loadHeaderFooter();
checkPassword();
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

function checkPassword()
{
  let password = getElementById("typedPassword");
  let confirmedPassword = getElementById("typedPasswordConfirm");
  if(password != confirmedPassword)
  {
    alert("Passwords do not match!")
  }
  else
  {
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