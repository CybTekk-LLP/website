const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#workflow",
    start: "top top",
    end: "+=500%",

    scrub: true,
    pin: true,
    anticipatePin: 1,
  },
});

timeline.from(".iphone-frame", {
  opacity: 0,
  y: 150,
  x: -30,
  transform: "rotate(20deg)",
});

timeline.from("#consultation", { opacity: 0, y: 20 });
timeline.from("#consultation-content .title", { opacity: 0, y: 20 });
timeline.from("#consultation-content p", { opacity: 0, y: 20 });

timeline.to(".iphone-frame", {
  opacity: 1,
  immediateRender: false,
  duration: 1.5,
});
timeline.to("#consultation", {
  opacity: 1,
  immediateRender: false,
  duration: 1.5,
});

timeline.to("#consultation-content .title", {
  opacity: 1,
  immediateRender: false,
  duration: 1.5,
});
timeline.to("#consultation-content p", {
  opacity: 1,
  immediateRender: false,
  duration: 1.5,
});

timeline.to("#consultation", { opacity: 0, y: 20, duration: 1.5 });
timeline.to(
  ".iphone-frame",
  {
    y: 50,
    transform: "rotate(-10deg) translateX(-10%)",
  },
  "<"
);
timeline.to("#consultation-content p", {
  opacity: 0,
  x: 100,
  duration: 0.1,
});

timeline.to("#consultation-content .title", {
  opacity: 0,
  x: 100,
  duration: 0.1,
});

// app design

timeline.from("#app-design", { opacity: 0, y: 20 });
timeline.from("#app-design-content .title", { opacity: 0, y: 20 });
timeline.from("#app-design-content p", { opacity: 0, y: 20 });

timeline.to("#app-design", {
  opacity: 1,
  immediateRender: false,
  duration: 1.5,
});

timeline.to("#app-design-content .title", {
  opacity: 1,
  immediateRender: false,
  duration: 1.5,
});
timeline.to("#app-design-content p", {
  opacity: 1,
  immediateRender: false,
  duration: 1.5,
});

timeline.to("#app-design", { opacity: 0, y: 20, duration: 1.5 });
timeline.to("#app-design-content p", {
  opacity: 0,
  x: 100,
  duration: 1.5,
});

timeline.to("#app-design-content .title", {
  opacity: 0,
  x: 100,
  duration: 1.5,
});

// app dev

timeline.from("#app-dev", { opacity: 0, y: 20 });
timeline.from("#app-dev .app", { opacity: 0, y: 20 });
timeline.from("#app-dev-content .title", { opacity: 0, y: 20 });
timeline.from("#app-dev-content p", { opacity: 0, y: 20 });

timeline.to("#app-dev", {
  opacity: 1,
  immediateRender: false,
  duration: 1.5,
});

timeline.to("#app-dev-content .title", {
  opacity: 1,
  immediateRender: false,
  duration: 1.5,
});

timeline.to("#app-dev-content p", {
  opacity: 1,
  immediateRender: false,
  duration: 1.5,
});
timeline.to("#app-dev .app", {
  opacity: 1,
  immediateRender: false,
  duration: 1.5,
});

/*
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
      .querySelector(".phone-animation .phone-animation-container")
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
      .querySelector(".phone-animation .phone-animation-container")
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
*/
