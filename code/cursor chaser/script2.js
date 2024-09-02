let eyeballs = document.querySelectorAll(".ball");

document.addEventListener("mousemove", (e) => {
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  eyeballs.forEach((ball) => {
    const eyeRect = ball.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;
    const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
    let translationX = (eyeRect.width / 2 - 10) * Math.cos(angle);
    let translationY = (eyeRect.height / 2 - 10) * Math.sin(angle);
    ball.style.transform = `translate(${translationX}px, ${translationY}px)`;
  });
});