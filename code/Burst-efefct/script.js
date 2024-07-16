let btn = document.querySelector(".btn");
let animationInProgress = false;
let animationId;
btn.addEventListener("click", (e) => {
  const clickEffect = document.querySelector(".click-effect");

  if (animationInProgress) {
    clearTimeout(animationId);
    clickEffect.classList.remove("effect");
    void clickEffect.offsetWidth;
  }

  clickEffect.style.top = e.clientY + window.scrollY + "px";
  clickEffect.style.left = e.clientX + window.scrollX + "px";
  clickEffect.classList.add("effect");
  animationInProgress = true;

  animationId = setTimeout(() => {
    clickEffect.classList.remove("effect");
    animationInProgress = false;
  }, 750);
});