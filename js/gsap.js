const lenis2 = new Lenis();

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#home",
    start: "top top",
    end: "+=105%",
    duration: 0.1,
    scrub: true,
    pin: true,
  },
});

const circleExpandProps = {
  borderWidth: "2vh",
  duration: 0.2,
  x: "-52.5vh",
  y: "-20vh",
  opacity: 0,
  width: "220%",
  height: "135vh",
  left: "17.5vw",
};

timeline.fromTo(
  ".circle-1",
  {},
  {
    ...circleExpandProps,
    width: "260%",
    height: "165vh",
    left: "13.5vw",
  }
);
timeline.fromTo(".circle-2", {}, circleExpandProps, "<");
timeline.fromTo(
  ".circle-3",
  {},
  {
    ...circleExpandProps,
    width: "150%",
    height: "100vh",
    left: "350px",
    opacity: 1,
    borderRadius: 0,
  },
  "<"
);
window.addEventListener("resize", function () {
  scrollTrigger.refresh();
});

lenis2.on("scroll", (e) => {
  ScrollTrigger.update;
});
