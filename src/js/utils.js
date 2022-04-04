// converts the response to text
function convertToText(res) {
  if (res.ok) {
    return res.text();
  } else {
    throw new Error("Bad Response");
  }
}

// loads in a template
export async function loadTemplate(path) {
  const html = await fetch(path).then(convertToText);
  const template = document.createElement("template");
  template.innerHTML = html;
  return template;
}

// helps with rendering with templates
export function renderWithTemplate(template, parent, data, callback) {
  let clone = template.content.cloneNode(true);
  if (callback) {
    clone = callback(clone, data);
  }
  parent.appendChild(clone);
}

// loads the header and the footer
export async function loadHeaderFooter() {
  const token = getCookie("token");
  const head = await chooseHeader(token);
  const foot = await loadTemplate("../partials/footer.html");
  const header = document.getElementById("main-header");
  const footer = document.getElementById("main-footer");
  
  // render the header and footer
  renderWithTemplate(head, header);
  renderWithTemplate(foot, footer);
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navUl = document.getElementById("navbar-ul");
  // add functionality to the hamburger menu
  hamburgerMenu.addEventListener("click", () => {
    navUl.classList.toggle("show");
    hamburgerMenu.classList.toggle("open");
  });

  if(token != ""){
    document.querySelector("#logout").addEventListener("click", () => {
      logoutUser(token);
    })
  }
  // add the current year to the copyright year in the footer
  document.querySelector(".year").innerHTML = new Date().getFullYear();
}

export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const params = urlParams.get(param);
  return params;
}

// functions for handling cookies 

// creates a new cookie with an expiration of 1 hour from when it was created
export function createCookie(cookieName, value){
  const expiration = new Date().addHours(1);
  console.log(expiration);
  const cookieValue = cookieName+"="+value+";expires="+expiration.toUTCString()+";path=/";
  document.cookie = cookieValue;
}

// deletes a cookie
export function deleteCookie(cookieName){
  // sets the expiration to an hour ago and then removes the value
  const expiration = new Date().addHours(-1);
  document.cookie = cookieName+"=; expires="+expiration.toUTCString()+";path=/;";
}

// retrieves the value of a cookie
export function getCookie(cookieName){
  // code from: https://www.w3schools.com/js/js_cookies.asp
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// adds hours (depending on h) to the date for the cookie expiration
Date.prototype.addHours= function(h){
  this.setHours(this.getHours()+h);
  return this;
}

async function chooseHeader(token){
  if (token != ""){
    return await loadTemplate("../partials/header-logged-in.html");
    
  } else {
    return await loadTemplate("../partials/header.html");
  }
}

async function logoutUser(token){

  const logoutOptions = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const logout = await fetch("https://film-watcher.herokuapp.com/auth/logout/", logoutOptions);
  if (logout.ok) {
  deleteCookie("token");
  window.location.replace("index.html");
}
}