const progressBar = document.querySelector(".progress-bar");
const progressInput = document.getElementById("progress-value");

progressInput.addEventListener("input", function () {
  const progressInDeg = (this.value * 360) / 100;
  progressBar.style = `background: conic-gradient(
    #005cff,
    #005cff ${progressInDeg}deg,
    #eaf0f6 ${progressInDeg}deg,
    #eaf0f6
  );`;
});

const switchAnimateState = () => {
  progressBar.classList.toggle("animation-rotate");
};

const switchHideState = () => {
  progressBar.classList.toggle("hidden");
};
