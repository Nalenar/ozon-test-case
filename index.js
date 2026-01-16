const progressBar = document.querySelector(".progress-bar");
const progressInput = document.getElementById("progress-value");
const animateToggle = document.getElementById("animate-check");
const hideToggle = document.getElementById("hide-check");

progressInput.addEventListener("input", function () {
  const currentInputValue = this.value;
  progressBar.setAttribute("style", `--progress: ${currentInputValue || 0}`);
});

animateToggle.addEventListener("change", function () {
  progressBar.classList.toggle("animation-rotate");
});

hideToggle.addEventListener("change", function () {
  progressBar.classList.toggle("hidden");
});
