// nav changing position on scroll.
var oldScrollY = window.scrollY;

window.addEventListener("scroll", () => {
   if (oldScrollY < window.scrollY) {
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
   oldScrollY = window.scrollY;
});
