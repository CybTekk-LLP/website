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

//refresh page on browser resize
var prevWidth = window.innerWidth;
$(window).bind("resize", function (e) {
  console.log("window resized..");
  widthScreen = window.innerWidth;
  heightScreen = window.innerHeight;
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

// Setup
const scroller = document.querySelector("#home");

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    if (arguments.length) {
      lenis2.scroll = value;
    }
    return lenis2.scroll;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});

ScrollTrigger.defaults({ scroller: document.body });

window.addEventListener("resize", resize);

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#home",
    start: "top top",
    end: "+=105%",
    duration: 0.1,
    scrub: true,
    pin: true,
    immediateRender: false,
    preventOverlaps: true,
    fastScrollEnd: true,
  },
});

const circleExpandProps = {
  borderWidth: `${(2 / 100) * heightScreen}`,
  duration: 0.2,
  x: `${(-52.5 / 100) * heightScreen}`,
  y: `${(-20 / 100) * heightScreen}`,
  opacity: 0,
  width: "220%",
  height: `${(135 / 100) * heightScreen}`,
  left: `${(17.5 / 100) * widthScreen}`,
};

timeline.fromTo(
  ".circle-1",
  {},
  {
    ...circleExpandProps,
    width: "260%",
    height: `${(165 / 100) * heightScreen}`,
    left: `${(13.5 / 100) * widthScreen}`,
  }
);
timeline.fromTo(".circle-2", {}, circleExpandProps, "<");
timeline.fromTo(
  ".circle-3",
  {},
  {
    ...circleExpandProps,
    width: "150%",
    height: `${(100 / 100) * heightScreen}`,
    left: "350px",
    opacity: 1,
    borderRadius: 0,
  },
  "<"
);
let circle = document.querySelector(".circle");
window.addEventListener("resize", function () {
  scrollTrigger.refresh();
});
gsap.ticker.add(update);

lenis2.on("scroll", (e) => {
  ScrollTrigger.update;
});

ScrollTrigger.normalizeScroll(true);
ScrollTrigger.ignoreMobileResize(true);
