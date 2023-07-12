var state = history.state || {};
let widthScreen = window.innerWidth;
let heightScreen = window.innerHeight;
var reloadCount = state.reloadCount || 0;

if (PerformanceNavigationTiming.type === 1) {
  // Reload
  state.reloadCount = ++reloadCount;
  history.replaceState(state, null, document.URL);
} else if (reloadCount) {
  reloadCount = 0;
  delete state.reloadCount;
  history.replaceState(state, null, document.URL);
}

ScrollTrigger.config({
  ignoreMobileResize: true,
  force3d: true,
});

//refresh page on browser resize
var prevWidth = window.innerWidth;
$(window).bind("resize", function (e) {
  console.log("window resized..");
  widthScreen = window.innerWidth;
  heightScreen = window.clientHeight;
  if (
    window.matchMedia("(orientation: landscape)").matches &&
    window.innerWidth !== prevWidth
  ) {
    this.location.reload(false); /* false to get page from cache */
    /* true to fetch page from server */
  }
});

const lenis2 = new Lenis({
  duration: 0.7,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  infinite: false,
});

gsap.registerPlugin(ScrollTrigger);
const resize = (e) => {
  ScrollTrigger.refresh();
};
const update = (time, deltaTime, frame) => {
  lenis2.raf(time * 1000);
};

// Setup;
// const scroller = document.querySelector("#home");

// ScrollTrigger.scrollerProxy(document.body, {
//   scrollTop(value) {
//     if (arguments.length) {
//       lenis2.scroll = value;
//     }
//     return lenis2.scroll;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
// });

// ScrollTrigger.defaults({ scroller: document.body });

window.addEventListener("resize", resize);

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#home",
    start: "top top",
    end: "+=105%",
    duration: 1,
    scrub: true,
    pin: true,
    normalizeScroll: true,
    // immediateRender: false,
  },
});

console.log(heightScreen);
timeline.fromTo(
  ".circle-1",
  {
    x: `${0 * widthScreen - (widthScreen < 1000 ? 200 : 0)}`,
  },
  {
    width: "260%",
    height: `${1.65 * heightScreen}`,
    x: `-${2 * widthScreen}`,
    y: `${(-20 / 100) * heightScreen}`,
  }
);
timeline.fromTo(
  ".circle-2",
  {
    x: `${0.15 * widthScreen - (widthScreen < 1000 ? 170 : 0)}`,
  },
  {
    x: `-${1.5 * widthScreen}`,
    width: "220%",
    height: `${1.5 * heightScreen}`,
    // opacity: 0,
    y: `-${0.2 * heightScreen}`,
  },
  "<"
);
timeline.fromTo(
  ".circle-3",
  {
    x: 0.3 * widthScreen - (widthScreen < 1000 ? 140 : 0),
  },
  {
    x: `-${1 * widthScreen}`,
    width: "150%",
    height: `${1 * heightScreen}`,
    opacity: 1,
    borderRadius: 0,
    y: -0.2 * heightScreen,
  },
  "<"
);
let circle = document.querySelector(".circle");
window.addEventListener("resize", function () {
  scrollTrigger.refresh();
});
gsap.ticker.add(update);

lenis2.on("scroll", (e) => {
  ScrollTrigger.update();
});

const elScrollable = document.querySelector("html");
const elNav = document.querySelector(".field");

const handleNav = () => {
  const viewportHeight = window.innerHeight;
  const scrollTop = elScrollable.scrollTop;
  // elNav.textContent = `Scrolled: ${scrollTop / viewportHeight}`;
  elNav.classList.toggle("is-hidden", scrollTop >= viewportHeight);
};

addEventListener("scroll", handleNav);
addEventListener("resize", handleNav);
handleNav();
