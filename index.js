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

var tl = gsap.timeline();

// gsap animations on load.
tl.to("#loader_div", {
   y: "-100%",
   pointerEvents: "none",
   duration: 0.8,
   delay: 1,
   ease: "expo.out",
});
tl.from("main div, main a, #area2", {
   y: 200,
   duration: 0.7,
   opacity: 0,
   ease: "Power5.easeInOut",
   stagger: 0.1,
});

// text orange shutters revealing on scroll.
const orangeShutters = document.querySelectorAll(".orange_shutters");
orangeShutters.forEach((shutter) => {
   gsap.to(shutter, {
      height: 0,
      scrollTrigger: {
         trigger: shutter,
         end: "top 70%",
         scrub: 1,
      },
   });
});

// area4 small screen boxes appearing animation.
// const area4Boxes = document.querySelectorAll(".area4_boxes");
// if (window.innerWidth < 600) {
//    boxesActivated();
// }
// function boxesActivated() {
//    area4Boxes.forEach((box) => {
//       gsap.from(box, {
//          x: "-105%",
//          scrollTrigger: {
//             trigger: box,
//             scrub: 1,
//             end: "top 30%",
//          },
//       });
//    });
// }
