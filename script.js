/*gsap.registerPlugin(ScrollTrigger);

gsap.from(".montserrat-bold span", {
  xPercent: -200,

  stagger: 0.15,

  scrollTrigger: {
    trigger: ".headline",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
}); */

gsap.fromTo(
  ".montserrat-bold span",
  {
    transformOrigin: "50% 50%",

    rotationZ: () => gsap.utils.random(-90, 90),
    rotationY: () => gsap.utils.random(-180, 180),

    skewX: () => gsap.utils.random(-40, 40),

    scaleX: 0,
    scaleY: 2.5,

    filter: "blur(18px)",

    xPercent: () => gsap.utils.random(-250, 250),
  },

  {
    rotationZ: 0,
    rotationY: 0,

    skewX: 0,

    scaleX: 1,
    scaleY: 1,

    xPercent: 0,

    filter: "blur(0px)",

    stagger: 0.06,

    duration: 2,

    ease: "expo.inOut",

    repeat: -1,
    yoyo: true,
  },
);
