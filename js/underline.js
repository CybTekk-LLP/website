import { isInViewport } from "./viewport.mjs";
let underline = document.querySelector(".underline");

let underlinedesign = function () {
  underline.classList.add("animate-underline");
};
let underlinelenis = new Lenis();

underlinelenis.on("scroll", (e) => {
  if (isInViewport(underline)) {
    underlinedesign();
  }
});
