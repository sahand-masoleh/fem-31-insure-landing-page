const body = document.querySelector("body");

const navButton = document.querySelector(".nav__button");
navButton.addEventListener("click", handleMenu);
const hamburgerOpen = document.querySelector(".hamburger--open");
const hamburgerClose = document.querySelector(".hamburger--close");

const navMenu = document.querySelector(".nav__menu--mobile");

function handleMenu() {
	navMenu.classList.toggle("hidden");
	hamburgerOpen.classList.toggle("hidden");
	hamburgerClose.classList.toggle("hidden");
	body.classList.toggle("no-scroll");
}
