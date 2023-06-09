import { isInViewport } from "./viewport.mjs";
// Get the an HTML element
let element = document.querySelector(".phone-animation");
// Get its bounding client rectangle
let bounding = element.getBoundingClientRect();

let design = function () {
  let titles = document.querySelectorAll(".phone-animation img");
  for (let title of titles) {
    title.style.transform = "rotate(-" + 30 + "deg)";
    title.style.transition = "all 0.6s ease-in-out";
    document
      .querySelector(".phone-animation img.shapes")
      .classList.add("appear");
    document
      .querySelector(".phone-animation .design-gradient")
      .classList.add("lift-up");
  }
};
let undesign = function () {
  let titles = document.querySelectorAll(".phone-animation img");
  for (let title of titles) {
    title.style.transform = "rotate(" + 0 + "deg)";
    title.style.transition = "all 0.6s ease-in-out";
    document
      .querySelector(".phone-animation img.shapes")
      .classList.remove("appear");
    document
      .querySelector(".phone-animation .design-gradient")
      .classList.remove("lift-up");
  }
};

window.addEventListener(
  "scroll",
  function (event) {
    if (isInViewport(element)) {
      design();
    } else {
      undesign();
    }
  },
  false
);
