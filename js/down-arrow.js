const elScrollable = document.querySelector("html");
const elNav = document.querySelector(".field");

const handleNav = () => {
  const scrollTop = elScrollable.scrollTop;
  console.log(scrollTop);
  // elNav.textContent = `Scrolled: ${scrollTop / viewportHeight}`;
  elNav.classList.toggle("is-hidden", scrollTop > 50);
};

addEventListener("scroll", handleNav);
addEventListener("resize", handleNav);
handleNav();
