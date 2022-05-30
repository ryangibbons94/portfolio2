// making things into variables
const burger = document.querySelector("#icon");
const ul = document.querySelector("nav ul");
const logo = document.querySelector("#logo");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");
//removes nav list from screen when my logo is clicked
logo.addEventListener("click", () => {
  ul.classList.remove("show");
  document.getElementById("icon").classList.remove("change");
});

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
    document.getElementById("icon").classList.toggle("change");
  })
);

burger.addEventListener("click", onClickMenu);

function onClickMenu() {
  document.getElementById("icon").classList.toggle("change");
}

//make h1 diff size
