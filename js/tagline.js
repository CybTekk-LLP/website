const lenis3 = new Lenis();

ScrollTrigger.config({
  ignoreMobileResize: true,
  force3d: true,
  normalizeScroll: true,
});

const timeline3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#design",
    start: "top top",
    end: "+=105%",
    scrub: true,
    pin: true,
    duration: 0.1,
    anticipatePin: 1,
  },
});
timeline3.set("#textMask", { yPercent: 50 });
timeline3.to("#textMask", {
  yPercent: -50,
});

lenis3.on("scroll", (e) => {
  ScrollTrigger.update;
});
