document.addEventListener("DOMContentLoaded", () => {
  const progressBarElement = document.querySelector(".progress-bar");
  const progressBar = new ProgressBar(progressBarElement);

  const progressInput = document.getElementById("progress-value");
  const animateToggle = document.getElementById("animate-check");
  const hiddenToggle = document.getElementById("hide-check");

  progressInput.addEventListener("input", (e) =>
    progressBar.setValue(e.target.value)
  );
  animateToggle.addEventListener("change", (e) =>
    progressBar.setAnimation(e.target.checked)
  );
  hiddenToggle.addEventListener("change", (e) =>
    progressBar.setVisibility(e.target.checked)
  );

  // Определяем элемент для window, чтобы тестировать в консоли
  window.progressBar = progressBar;
});
