setTimeout(function () {
  let loader = document.getElementById("loader-wrapper");
  loader.style.transition = ".5s";
  loader.style.opacity = "0";
  loader.style.visibility = "hidden";
  //   loader.style.display = "none";
}, 750);
setTimeout(function () {
  try {
    loader.style.display = "none";
  } catch {
    // console.log("loader gone");
  }
}, 750);
