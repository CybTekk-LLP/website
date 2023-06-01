export let big = function () {
  var titles = document.querySelectorAll(".big");
  var scrollTop = document.documentElement.scrollTop * 0.5;
  for (let title of titles)
    title.style.transform = "translateX(-" + scrollTop + "px)";
};
