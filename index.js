// nav changing position on scroll.
var old_Y = window.scrollY;

window.addEventListener("scroll", () => {
   if (old_Y < window.scrollY) {
      gsap.to("nav", {
         y: "-100%",
         duration: 0.5,
         ease: "Power5.easeInOut",
      });
   } else {
      gsap.to("nav", {
         y: 0,
         duration: 0.5,
         ease: "Power5.easeInOut",
      });
   }
   old_Y = window.scrollY;
});
