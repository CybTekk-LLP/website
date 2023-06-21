import { isInViewport } from "./viewport.mjs";
let underline = document.querySelector(".underline");

let underlinedesign = function () {
  underline.classList.add("animate-underline");
};
// window.addEventListener(
//   "scroll",
//   function (event) {
//     if (isInViewport(element)) {
//       design();
//     } else {
//       undesign();
//     }
//   },
//   false
// );
let underlinelenis = new Lenis();

underlinelenis.on("scroll", (e) => {
  if (isInViewport(underline)) {
    underlinedesign();
  }
});
