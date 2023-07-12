import { animateSequence, animateRandom } from "./fly.mjs";
// import { initMap } from "./map.mjs";

window.addEventListener("load", function () {
  animateSequence();
  animateRandom();
  // initMap();
});

window.addEventListener(`scroll`, function (e) {
  const scroll_Y = (this.scrollY / 1000) * 5;
  let home = document.querySelector("#home .left");
  if (scroll_Y === 0) {
    home.style.opacity = 1;
  }
  if (scroll_Y > 0) {
    home.style.opacity = `${1 - scroll_Y}`;
  }
});

// 4 lines related to dark theme google map are commented out - 2 in js, 2 in html
