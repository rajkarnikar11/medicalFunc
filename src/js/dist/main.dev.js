"use strict";

var menu = document.querySelector(".navbar__burger-container");
var toggler = 0;

function toggleMenu() {
  if (toggler === 0) {
    toggler = 1;
    document.querySelector(".navbar__list-container-small").style.opacity = "1";
    document.querySelector(".navbar__right-small").style.display = "flex";
  } else {
    toggler = 0;
    document.querySelector(".navbar__list-container-small").style.opacity = "0";
    document.querySelector(".navbar__right-small").style.display = "none";
  }
}

menu.addEventListener("click", toggleMenu);