
var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: 6,
  autoplay: {
    delay: 2, // Delay in ms between slides
    disableOnInteraction: false, // Continue autoplay after user interaction
  },
});