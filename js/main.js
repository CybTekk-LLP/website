import { menu } from "./menu.mjs";
import { looper } from "./skew.mjs";
import { animateSequence, animateRandom } from "./fly.mjs";
import { big, big2 } from "./translate-on-scroll.mjs";
import { initMap } from "./map.mjs";
menu(); // toggle menu
looper();
window.addEventListener("load", function () {
  animateSequence();
  animateRandom();
  initMap();
});
window.addEventListener("scroll", () => {
  big();
  big2();
});

document.querySelectorAll(".main-nav ul li").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("open");
    document.querySelector(".ham").classList.remove("active");
  });
});
