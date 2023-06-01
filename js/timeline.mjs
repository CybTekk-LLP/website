gsap.registerPlugin(ScrollTrigger);

const tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".circle",
      scrub: true,
      pin: true,
      start: "0% 0%",
      end: "+=0%",
      duration: 5,
    },
  })

  .from(".circle", {
    scale: 1,
    ease: "ease",
    duration: 1,
  })
  .to(".circle", {
    scale: 10,
    ease: "ease",
    duration: 1,
  });
tl.reverse();
export { tl };
