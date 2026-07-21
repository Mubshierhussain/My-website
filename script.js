document.addEventListener("DOMContentLoaded", () => {

console.log("Welcome to Mubshier Hussain's Website 🚀");

const heading = document.querySelector("h1");

heading.addEventListener("mouseover", () => {
heading.style.transform = "scale(1.08)";
heading.style.transition = "0.3s";
});

heading.addEventListener("mouseout", () => {
heading.style.transform = "scale(1)";
});

const button = document.querySelector(".btn");

button.addEventListener("click", (e) => {
e.preventDefault();
alert("✨ Welcome to Mannu's Professional Website! ✨");
});

});