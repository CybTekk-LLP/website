var state = history.state || {};
var reloadCount = state.reloadCount || 0;

if (PerformanceNavigationTiming.type === 1) {
  // Reload
  state.reloadCount = ++reloadCount;
  history.replaceState(state, null, document.URL);
} else if (reloadCount) {
  reloadCount = 0;
  delete state.reloadCount;
  history.replaceState(state, null, document.URL);
}

//refresh page on browser resize
var prevWidth = window.innerWidth;
$(window).bind("resize", function (e) {
  // console.log("window resized..");
  if (
    window.matchMedia("(orientation: landscape)").matches &&
    window.innerWidth !== prevWidth
  ) {
    this.location.reload(false);
  }
});
