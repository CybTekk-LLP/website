// import { looper } from "./skew.mjs";
// import { big, big2 } from "./translate-on-scroll.mjs";

let big = function () {
  let titles = document.querySelectorAll(".big");
  let scrollTop = document.documentElement.scrollTop * 0.4;
  for (let title of titles) {
    title.style.transform = "translateX(-" + scrollTop + "px)";
    title.style.transition = "transform .6s cubic-bezier(.215,.61,.355,1)";
  }
};

let big2 = function () {
  let titles = document.querySelectorAll(".big-rev");
  let scrollTop = document.documentElement.scrollTop * 0.4;
  for (let title of titles) {
    title.style.transform = "translateX(+" + scrollTop + "px)";
    title.style.transition = "transform .6s cubic-bezier(.215,.61,.355,1)";
  }
};

const skewEm = document.querySelectorAll(".skewEm");
let currentPixel = window.scrollY;

// const looper = function () {
//   const newPixel = window.scrollY;
//   const diff = newPixel - currentPixel;
//   const speed = diff * 0.08;
//   for (let skew of skewEm) {
//     skew.style.transition = "all 0.6s ease-in-out";
//     skew.style.transform = `skewY(${Math.min(Math.max(speed, -3), 3)}deg)`;
//   }
//   currentPixel = newPixel;
//   requestAnimationFrame(looper);
// };

// SETUP LENIS
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  const newPixel = window.scrollY;
  const diff = newPixel - currentPixel;
  const speed = diff * 0.08;
  for (let skew of skewEm) {
    skew.style.transition = "transform .6s cubic-bezier(.215,.61,.355,1)";
    skew.style.transformOrigin = "50% 50%";
    skew.style.transform = `skewY(${Math.min(Math.max(speed, -3), 3)}deg)`;
  }
  currentPixel = newPixel;
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// looper();

lenis.on("scroll", (e) => {
  big();
  big2();
});

// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000);
// });

const details = document.querySelectorAll("details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});
