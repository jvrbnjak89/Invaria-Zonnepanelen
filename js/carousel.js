document.addEventListener("DOMContentLoaded", function () {
  var elem = document.querySelector(".js-flickity");
  var flkty = new Flickity(elem, {
    freeScroll: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
  });

  document
    .querySelector(".carousel-control-prev-custom")
    .addEventListener("click", function () {
      flkty.previous();
    });

  document
    .querySelector(".carousel-control-next-custom")
    .addEventListener("click", function () {
      flkty.next();
    });
});
