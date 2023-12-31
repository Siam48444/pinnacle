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

// gsap timeline
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

// hamburger button and menu interaction.
document.querySelector(".hamburger_button").addEventListener("click", () => {
   gsap.to("#menu", {
      x: "-100%",
      duration: 1,
      ease: "expo.out",
   });

   gsap.to("#wrapper, nav", { opacity: 0.3, duration: 0.5 });
});
document.querySelector(".menu_exit").addEventListener("click", () => {
   gsap.to("#menu", {
      x: 0,
      duration: 1,
      ease: "expo.out",
   });

   gsap.to("#wrapper, nav", { opacity: 1, duration: 0.5 });
});
document.querySelector("#wrapper").addEventListener("click", () => {
   gsap.to("#menu", {
      x: 0,
      duration: 1,
      ease: "expo.out",
   });

   gsap.to("#wrapper, nav", { opacity: 1, duration: 0.5 });
});
document.querySelector("nav").addEventListener("click", (clk) => {
   if (clk.target.matches("nav")) {
      gsap.to("#menu", {
         x: 0,
         duration: 1,
         ease: "expo.out",
      });

      gsap.to("#wrapper, nav", { opacity: 1, duration: 0.5 });
   }
});

// area6 split screnn pinning animation.
gsap.from(".area6_left", {
   x: "-105%",
   scrollTrigger: {
      trigger: ".area6_left",
      scrub: 1,
      start: "top bottom",
      end: "bottom bottom",
   },
});
gsap.to("#area6", {
   scrollTrigger: {
      trigger: "#area6",
      start: "top top",
      end: "bottom bottom",
      pin: ".area6_left",
   },
});
gsap.to("#area6", {
   scrollTrigger: {
      trigger: "#area6",
      start: "top top",
      end: "bottom bottom",
      pin: ".area6_right_gradient_div",
   },
});
