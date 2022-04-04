
import { loadHeaderFooter } from "./utils.js";
loadHeaderFooter();
checkPassword();
  let form = document.querySelector("#blob-btn")
  console.log("hello")
  form.addEventListener("submit", (e) =>{
    console.log("hello")

  e.preventDefault()
  let json = []
  json.name = document.getElementById("name").value
  json.email = document.getElementById("email").value
  json.password = document.getElementById("typedPassword").value
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
    };

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