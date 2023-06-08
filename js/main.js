import { menu } from "./menu.mjs";
import { looper } from "./skew.mjs";
import { animateSequence, animateRandom } from "./fly.mjs";
import { big, big2 } from "./translate-on-scroll.mjs";
menu(); // toggle menu
looper();
window.addEventListener("load", function () {
  animateSequence();
  animateRandom();
});
window.addEventListener("scroll", () => {
  big();
  big2();
});
