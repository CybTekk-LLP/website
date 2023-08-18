const lenis2 = new Lenis();

let height = (window.screen.height - 60) * -1;
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#home",
    start: "top top",
    end: "+=40%",
    duration: 0.1,
    scrub: true,
    pin: true,
  },
});

const circleExpandProps = {
  duration: 0.2,
  x: height.toString(),

  opacity: 1,
};

timeline.fromTo(
  ".circle",
  {},
  {
    ...circleExpandProps,
    scale: 3.5,
  }
);

let circle = document.querySelector(".circle");
window.addEventListener("resize", function () {
  scrollTrigger.refresh();
});

lenis2.on("scroll", (e) => {
  ScrollTrigger.update;
});
