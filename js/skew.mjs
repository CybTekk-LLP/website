const skewEm = document.querySelectorAll(".skewEm");
let currentPixel = window.pageYOffset;

const looper = function () {
  const newPixel = window.pageYOffset;
  const diff = newPixel - currentPixel;
  const speed = diff * 0.08;

  for (let skew of skewEm) {
    skew.style.transition = "all 0.6s ease-in-out";
    skew.style.transform = `skewY(${Math.min(Math.max(speed, -3), 3)}deg)`;
  }
  currentPixel = newPixel;

  requestAnimationFrame(looper);
};
export { looper };
