function heroTimeline() {
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
    borderWidth: "20vh",
    duration: 0.2,
    x: "-52.5vh",
    y: "-20vh",
    opacity: 0,
    left: "17.5vw",
  };

  timeline.to(".ring2", {
    opacity: 0,
    y: "-20px",
    duration: 0.1,
  });
  timeline.to(".ring2", circleExpandProps);
  timeline.to(".ring", circleExpandProps, "<");
  timeline.to(
    ".circle",
    {
      ...circleExpandProps,
      width: "250%",
      height: "100vh",
      left: "0",
      opacity: 1,
      borderRadius: 0,
    },
    "<"
  );
}

heroTimeline();
