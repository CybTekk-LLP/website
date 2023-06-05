import { menu } from "./menu.mjs";
import { tl } from "./timeline.mjs";
import { animateSequence, animateRandom } from "./fly.mjs";
import { big, big2 } from "./translate-on-scroll.mjs";
menu(); // toggle menu
tl;
window.onload = function () {
  animateSequence();
  animateRandom();
};

window.onscroll = function () {
  big();
  big2();
};
