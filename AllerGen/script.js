let prefs = [];
let diet = [];
let favs = [];

let hamburgerMenu = document.getElementById("hamburger-menu");
let hamburgerSubMenu = document.getElementById("hamburger-submenu");
let favIcon = document.getElementsByClassName("fav-container");

let hamburgerSubMenuState = 1;

hamburgerMenu.onclick = function () {
  if (hamburgerSubMenuState == 1) {
    hamburgerSubMenuState = 2;
    hamburgerSubMenu.style.display = "none";
  } else {
    hamburgerSubMenuState = 1;
    hamburgerSubMenu.style.display = "flex";
  }
};
