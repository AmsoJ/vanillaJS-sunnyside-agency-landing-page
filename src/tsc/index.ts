// Selected elements 
const menuBar = document.querySelector(".menubar") as HTMLSpanElement;
const navBar = document.querySelector(".compass") as HTMLHtmlElement;

// event listeners
menuBar.addEventListener("click", () => {
    navBar.classList.toggle("show");
})