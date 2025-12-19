const navbarNav = document.querySelector(".navbar-nav");
const menuBtn = document.querySelector("#menu");

menuBtn.onclick = () => {
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!menuBtn.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
