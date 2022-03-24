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
    const head = await loadTemplate("../partials/header.html");
    const foot = await loadTemplate("../partials/footer.html");
    const header = document.getElementById("main-header");
    const footer = document.getElementById("main-footer");
    renderWithTemplate(head, header);
    renderWithTemplate(foot, footer);
    document.querySelector(".year").innerHTML = new Date().getFullYear();

}

export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const params = urlParams.get(param);
  return params;
}