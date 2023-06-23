let iconContainer = document.querySelector(".keep-inline .big-img");
let x = 0;
setInterval(() => {
  iconContainer.style.transform = "translateX(+" + x + "px)";
  iconContainer.style.transition =
    "transform 0.6s cubic-bezier(.215,.61,.355,1)";
  x -= 168;
  let node = iconContainer.lastChild;
  iconContainer.removeChild(iconContainer.lastChild);
  iconContainer.prepend(node);
}, 1000);

// for(let icons of iconTranslate){
//     let prev = icons.src
//  }
