const menu = () =>
  document.querySelector(".toggle-menu").addEventListener("click", () => {
    document.querySelector(".toggle-menu").classList.toggle("active");
    document.getElementById("menu").classList.toggle("open");
  });

export { menu };
