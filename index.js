const progressBar = document.querySelector(".progress-bar");
const progressInput = document.getElementById("progress-value");

progressInput.addEventListener("input", function () {
  const currentInputValue = this.value;
  progressBar.setAttribute("style", `--progress: ${currentInputValue || 0}`);
});
