// Rotating subtitle script
const titles = [
  "Backend Developer",
  "System Builder",
  "Data Engineer",
  "Problem Solver",
  ".NET Developer",
];
let currentIndex = 0;
const subtitleElement = document.getElementById("rotating-title");

setInterval(() => {
  currentIndex = (currentIndex + 1) % titles.length;
  subtitleElement.style.opacity = "0";
  setTimeout(() => {
    subtitleElement.textContent = titles[currentIndex];
    subtitleElement.style.opacity = "1";
  }, 300);
}, 3000);

subtitleElement.style.transition = "opacity 0.3s ease";
