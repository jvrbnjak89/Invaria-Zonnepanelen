document.querySelectorAll(".nav-item-custom .nav-link").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    document.querySelector(".nav-link.active").classList.remove("active");
  });
  link.addEventListener("mouseleave", () => {
    document
      .querySelector(".nav-item-custom .nav-link")
      .classList.add("active");
  });
});
