let big = function () {
  let titles = document.querySelectorAll(".big");
  let scrollTop = document.documentElement.scrollTop * 0.5;
  for (let title of titles)
    title.style.transform = "translateX(-" + scrollTop + "px)";
};

let big2 = function () {
  let titles = document.querySelectorAll(".rev");
  let scrollTop = document.documentElement.scrollTop * 0.5;
  for (let title of titles)
    title.style.transform = "translateX(+" + scrollTop + "px)";
};

export { big, big2 };
