var stroke;
stroke = new Vivus("mask", {
  start: "manual",
  type: "scenario-sync",
  duration: 60,
  forceRender: false,
  animTimingFunction: Vivus.EASE,
});
$(document).ready(function () {
  $(".section-top__animation").fadeIn(0);
  stroke.play();
});

gsap.to("#section-top h2", {
  backgroundPosition: "left top -800px",
  scrollTrigger: {
    trigger: "#section-top",
    start: "top center",
    scrub: true,
  },
});
gsap.to("#section-about .section-title", {
  backgroundPosition: "left top -600px",
  scrollTrigger: {
    trigger: "#section-about",
    start: "top center",
    scrub: true,
  },
});
gsap.to(".section-about__image .scroll-img", {
  rotation: 180,
  scrollTrigger: {
    trigger: "#section-about",
    start: "top center",
    scrub: 5,
  },
});
gsap.to("#section-contact h2", {
  backgroundPosition: "left top -600px",
  scrollTrigger: {
    trigger: "#section-contact",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
  },
});
