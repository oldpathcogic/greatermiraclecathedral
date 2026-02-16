const toggle = document.getElementById("mobile-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
});
