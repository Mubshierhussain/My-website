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
/* ===== Typing Animation ===== */

const text = [
  "Web Developer 💻",
  "HTML & CSS Learner 🚀",
  "GitHub Portfolio Creator 🌐",
  "Welcome To My Website ❤️"
];

let index = 0;
let charIndex = 0;
let typing = true;

const typingText = document.getElementById("typing-text");

function typeEffect() {

  if (!typingText) return;

  if (typing) {

    typingText.textContent = text[index].substring(0, charIndex++);
    
    if (charIndex > text[index].length) {
      typing = false;
      setTimeout(typeEffect, 1200);
      return;
    }

  } else {

    typingText.textContent = text[index].substring(0, charIndex--);

    if (charIndex < 0) {
      typing = true;
      index = (index + 1) % text.length;
    }

  }

  setTimeout(typeEffect, typing ? 100 : 60);

}

typeEffect();