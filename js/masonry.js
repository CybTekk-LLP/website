let colWidth = $(".card").width();

window.onresize = function () {
  let colWidth = $(".card").width();
};

let $grid = $(".container").masonry({
  // options
  itemSelector: ".card",
  columnWidth: ".card",
  // percentPosition: true,
  gutter: 20,
  fitWidth: true,
});

try {
  $grid.imagesLoaded().progress(function () {
    $grid.masonry("layout");
  });
} catch {
  // console.error(e)
}
