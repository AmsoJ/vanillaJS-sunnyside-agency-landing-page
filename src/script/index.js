"use strict";
// Selected elements 
const menuBar = document.querySelector(".menubar");
const navBar = document.querySelector(".compass");
// event listeners
menuBar.addEventListener("click", () => {
    navBar.classList.toggle("show");
});
