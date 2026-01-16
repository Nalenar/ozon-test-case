class ProgressBar {
  constructor(element) {
    this.element = element;
    this.value = 25;

    this.#update();
  }

  #update() {
    const valueInDeg = (this.value * 360) / 100;
    this.element.style = `background: conic-gradient(#005cff, #005cff ${valueInDeg}deg, #eaf0f6 ${valueInDeg}deg, #eaf0f6`;
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    if ((value < 0) | !value) value = 0;
    if (value > 100) value = 100;

    this.value = value;
    this.#update();

    return this;
  }

  setAnimation(bool) {
    this.isAnimated = bool;

    if (bool) this.element.classList.add("animation-rotate");
    else this.element.classList.remove("animation-rotate");

    return this;
  }

  setVisibility(bool) {
    this.isHidden = bool;

    if (bool) this.element.classList.add("hidden");
    else this.element.classList.remove("hidden");

    return this;
  }

  reset() {
    this.value = 0;
    this.#update();
    return this;
  }

  increment(i) {
    this.value += i;
    this.#update();
    return this;
  }

  decrement(i) {
    this.value -= i;
    this.#update();
    return this;
  }
}
