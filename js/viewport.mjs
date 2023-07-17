function isInViewport(element) {
  // Get the bounding client rectangle position in the viewport
  let bounding = element.getBoundingClientRect();

  // Checking part. Here the code checks if it's *fully* visible
  // Edit this part if you just want a partial visibility
  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  ) {
    // console.log("In the viewport! :)");
    return true;
  } else {
    // console.log("Not in the viewport. :(");
    return false;
  }
}

export { isInViewport };
