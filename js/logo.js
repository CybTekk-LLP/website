const elScrollable = document.querySelector("html");
const elNav = document.querySelector(".logo img");

const handleNav = () => {
  const viewportHeight = window.innerHeight;
  const scrollTop = elScrollable.scrollTop;
  elNav.textContent = `Scrolled: ${scrollTop / viewportHeight}`;
  elNav.classList.toggle("is-active", scrollTop >= viewportHeight);
};

addEventListener("scroll", handleNav);
addEventListener("resize", handleNav);
handleNav();
