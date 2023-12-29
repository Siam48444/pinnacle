// Lenis Smooth Scroll.
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
   lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// nav changing position on scroll.
var old_Y = window.scrollY;

window.addEventListener("scroll", () => {
   old_Y < window.scrollY ? scrollingdDown() : scrollingdUp();
   old_Y = window.scrollY;
});

function scrollingdDown() {
   gsap.to("nav", { y: "-105%", duration: 0.5, ease: "Power5.easeInOut" });
}
function scrollingdUp() {
   gsap.to("nav", { y: 0, duration: 0.5, ease: "Power5.easeInOut" });
}

// gsap timelime.
var tl = gsap.timeline();

// gsap animations on load.

// text orange shutters revealing on scroll.
const orangeShutters = document.querySelectorAll(".orange_shutters");
orangeShutters.forEach((shutter) => {
   gsap.to(shutter, {
      height: 0,
      scrollTrigger: {
         trigger: shutter,
         end: "bottom 80%",
         scrub: 1,
      },
   });
});

// Swiper JS
var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});
