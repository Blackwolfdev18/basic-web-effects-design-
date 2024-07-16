const cube = document.querySelector(".cube");
let isMouseDown = false;
let startX, startY;
let currentX = 0;
let currentY = 0;

cube.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  startX = e.clientX;
  startY = e.clientY;
  cube.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (isMouseDown) {
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    currentX += deltaY / 2;
    currentY += deltaX / 2;
    cube.style.transformOrigin = "center";
    cube.style.transform = `rotateX(${-currentX}deg) rotateY(${currentY}deg)`;

    startX = e.clientX;
    startY = e.clientY;
  }
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
  cube.style.cursor = "grab";
});