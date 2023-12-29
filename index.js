// nav changing position on scroll.
var old_Y = window.scrollY;

window.addEventListener("scroll", () => {
   old_Y < window.scrollY ? scrollingdDown() : scrollingdUp();
   old_Y = window.scrollY;
});

function scrollingdDown() {
   gsap.to("nav", {
      y: "-100%",
      duration: 0.5,
      ease: "Power5.easeInOut",
   });
}
function scrollingdUp() {
   gsap.to("nav", {
      y: 0,
      duration: 0.5,
      ease: "Power5.easeInOut",
   });
}
