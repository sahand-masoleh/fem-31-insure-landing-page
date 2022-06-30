const navButton = document.querySelector(".nav__button");
navButton.addEventListener("click", handleMenu);
const hamburgerOpen = document.querySelector(".hamburger--open");
const hamburgerClose = document.querySelector(".hamburger--close");

const navMenu = document.querySelector(".nav__menu");

function handleMenu() {
	navMenu.classList.toggle("hidden");
	hamburgerOpen.classList.toggle("hidden");
	hamburgerClose.classList.toggle("hidden");
}
