anime({
  targets: ".anime .path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  delay: function (el, i) {
    return i * 20;
  },
  direction: "alternate",
  loop: false,
  fill: "#fff",
});

var timelineAnime = anime.timeline();

timelineAnime.add({
  targets: ".anime .path",
  fillOpacity: 1,
  delay: 1800,
  duration: 4000,
});
