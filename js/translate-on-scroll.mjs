let big = function () {
  var titles = document.querySelectorAll(".big");
  var scrollTop = document.documentElement.scrollTop * 0.5;
  for (let title of titles)
    title.style.transform = "translateX(-" + scrollTop + "px)";
};

let big2 = function () {
  var titles = document.querySelectorAll(".rev");
  var scrollTop = document.documentElement.scrollTop * 0.5;
  for (let title of titles)
    title.style.transform = "translateX(+" + scrollTop + "px)";
};

export { big, big2 };
