import { menu } from "./menu.mjs";
menu(); // toggle menu

document.querySelectorAll(".main-nav ul li").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("open");
    document.querySelector(".ham").classList.remove("active");
  });
});
