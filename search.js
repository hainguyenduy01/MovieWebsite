const searchResultDiv = document.querySelector('.search_result_div');
const searchBtn = document.querySelector('.search');
const searchHeader = document.getElementById('search_header');
const hamburgerPhone = document.querySelector('.hamburgerphone');
const hamburger = document.querySelector('.hamburger');
const overlaySideNavabar = document.querySelector('.overlay_side_navabar');
const lightDarkmode = document.querySelector('.light_darkmode');
const arrowLeft = document.querySelector('.arrow_left');
const sidenavChildContainer = document.querySelector(
	'.sidenav_child_container',
);
const title = document.querySelector('.title');

hamburgerPhone.addEventListener('click', function () {
	sidenavChildContainer.classList.add('sidenav_container_active');
	overlaySideNavabar.classList.add('sidenav_container_active');
	hamburgerPhone.classList.add('hamburgerphonedeactive');
});

overlaySideNavabar.addEventListener('click', function () {
	sidenavChildContainer.classList.remove('sidenav_container_active');
	overlaySideNavabar.classList.remove('sidenav_container_active');
	document.body.classList.remove('minimize_siderbar');
	hamburgerPhone.classList.remove('hamburgerphonedeactive');
});

arrowLeft.addEventListener('click', function () {
	document.body.classList.remove('minimize_siderbar');
});

lightDarkmode.addEventListener('click', function () {
	document.body.classList.toggle('light');
	if (document.body.classList.contains('light')) {
		localStorage.setItem('theme', 'light');
	} else {
		localStorage.setItem('theme', 'dark');
	}
});

hamburger.addEventListener('click', function () {
	document.body.classList.add('minimize_siderbar');
});

function settheme() {
	let currtheme = localStorage.getItem('theme');
	if (currtheme == 'light') {
		document.body.classList.add('light');
	} else {
		document.body.classList.remove('light');
	}
}

settheme();

window.onload = function () {
	searchBtn.focus();
};
title.addEventListener('click', function () {
	location.replace('./index.html');
});
