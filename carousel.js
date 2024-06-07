const multipleItemCarousel = document.querySelector("#carouselDemo");

if (window.matchMedia("(min-width: 576px)").matches) {
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: 2000, // Adjust the interval as needed
  });

  var carouselWidth = multipleItemCarousel.scrollWidth;
  var imgWidth = multipleItemCarousel
    .querySelector(".carousel-item")
    .getBoundingClientRect().width;

  var scrollPosition = 0;

  document
    .querySelector(".carousel-control-next-custom")
    .addEventListener("click", function () {
      if (scrollPosition < carouselWidth - imgWidth) {
        scrollPosition += imgWidth;
        multipleItemCarousel.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    });

  document
    .querySelector(".carousel-control-prev-custom")
    .addEventListener("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= imgWidth;
        multipleItemCarousel.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    });
} else {
  multipleItemCarousel.classList.add("slide");
}
