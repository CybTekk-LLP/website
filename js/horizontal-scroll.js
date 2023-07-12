let panel = document.querySelectorAll(".panel");
let panelsSection = document.querySelector("#panels");
function sizer() {
  let i = 0;
  for (let p of panel) {
    i++;
  }
  if (window.matchMedia("(orientation: landscape)").matches)
    document.querySelector("#panels-container").style.width =
      60 * i + 150 + "%";
  if (window.matchMedia("(orientation: portrait)").matches)
    document.querySelector("#panels-container").style.width = 200 * i + "%";
}
sizer();

var ts;
$(panelsSection).bind("touchstart", function (e) {
  ts = e.originalEvent.touches[0].clientX;
});

$(panelsSection).bind("touchend", function (e) {
  var te = e.originalEvent.changedTouches[0].clientX;
  if (ts > te + 5) {
    slide_down(ts, te);
  } else if (ts < te - 5) {
    slide_up(ts, te);
  }
});
function slide_down(start, end) {
  if (window.matchMedia("(orientation: portrait)").matches)
    window.scrollBy(0, start - end);
}
function slide_up(start, end) {
  if (window.matchMedia("(orientation: portrait)").matches)
    window.scrollBy(0, start - end);
}

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true, smooth: true });
/* Main navigation */

let panelsContainer = document.querySelector("#panels-container"),
  tween;
document.querySelectorAll(".anchor").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    let targetElem = document.querySelector(e.target.getAttribute("href")),
      y = targetElem;
    if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
      let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
        totalMovement = (panels.length - 1) * targetElem.offsetWidth;
      y = Math.round(
        tween.scrollTrigger.start +
          (targetElem.offsetLeft / totalMovement) * totalScroll
      );
    }
    gsap.to(window, {
      scrollTo: {
        y: y,
        autoKill: false,
      },
      duration: 1,
    });
  });
});

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
  // xPercent: -100 * ( panels.length - 1 ),
  x: () => -1 * (panelsContainer.scrollWidth - innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container",
    pin: true,
    start: "top top",
    scrub: 1,
    // snap: {
    // 	snapTo: 1 / (panels.length - 1),
    // 	inertia: false,
    // 	duration: {min: 0.1, max: 0.1}
    // },
    end: () => "+=" + (panelsContainer.scrollWidth - innerWidth),
  },
});

const lenishorizontal = new Lenis();
lenishorizontal.on("scroll", (e) => {
  ScrollTrigger.update;
});

$(window).bind("resize", function (e) {
  sizer();
});
