import { isInViewport } from "./viewport.mjs";
// Get the an HTML element
let element = document.querySelector("#industries");
// Get its bounding client rectangle
let bounding = element.getBoundingClientRect();

let design = function () {
  let title = document.querySelector(".keep-inline");
  title.classList.add("big");
};
let undesign = function () {
  let title = document.querySelector(".keep-inline");
  title.classList.remove("big");
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
let bandlenis = new Lenis();

bandlenis.on("scroll", (e) => {
  if (isInViewport(element)) {
    design();
  } else {
    undesign();
  }
});
