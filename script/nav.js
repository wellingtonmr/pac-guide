const navEl = document.getElementById("nav")
const navItems = document.getElementsByClassName("nav__item")
const barOneEl = document.getElementById("bar-one")
const barTwoEl = document.getElementById("bar-two")
const barThreeEl = document.getElementById("bar-three")

let navShown = false;

function toggleNav() {
	if(navShown) {
		navShown = false
		navEl.classList.add("hidden")
		barOneEl.classList.remove("bar-one-open")
		barTwoEl.classList.remove("bar-two-open")
		barThreeEl.classList.remove("bar-three-open")
	} else {
		navShown = true
		navEl.classList.remove("hidden")
		barOneEl.classList.add("bar-one-open")
		barTwoEl.classList.add("bar-two-open")
		barThreeEl.classList.add("bar-three-open")
	}
}

function pageChange(id) {
	for(let i = 0; i < navItems.length; i++) {
		navItems[i].classList.remove("nav__item--active")
	}
	document.getElementById(id).classList.add("nav__item--active")
}

function showPlus(id) {
	let sectionEL = document.getElementById(id)
	if(sectionEL.classList.contains("poke-section--active")) {
		sectionEL.classList.remove("poke-section--active")
		sectionEL.children[4].classList.add("hidden")
	} else {
		sectionEL.classList.add("poke-section--active")
		sectionEL.children[4].classList.remove("hidden")
	}
}
