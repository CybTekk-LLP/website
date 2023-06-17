setTimeout(function () {
  var loader = document.getElementById("loader-wrapper");
  loader.style.transition = ".5s";
  loader.style.opacity = "0";
  loader.style.visibility = "hidden";
  //   loader.style.display = "none";
}, 1250);
setTimeout(function () {
  loader.style.display = "none";
}, 1250);
