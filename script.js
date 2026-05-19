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


/* images*/

window.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".project-images");

  const distance = track.scrollWidth / 2;

  gsap.to(track, {
    x: -distance,
    duration: 4,
    ease: "none",
    repeat: -1,
  });
});

/*  MORE OPTIONS */

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".archive-items button");
  const video = document.getElementById("mainVideo");

  const titleEl = document.querySelector(".context-section h2");
  const textEl = document.querySelector(".context-section p");

  const defaultVideo = "assets/videos/for-the-web-development.mp4";

  let activeBtn = null;
  let isPreviewMode = false;

  function loadVideo(src, forceRestart = false) {
    video.pause();

    if (forceRestart) {
      video.currentTime = 0; //
    }

    const source = video.querySelector("source");

    if (source) {
      source.src = src;
    } else {
      video.src = src;
    }

    video.load();

    video.play().catch(() => {});
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const src = btn.dataset.video;
      const title = btn.dataset.title;
      const text = btn.dataset.text;

      //
      titleEl.textContent = title || "";
      textEl.textContent = text || "";

      const isVideoButton = src && src.trim() !== "";

      //  VIDEO BUTTONS (01 / 02 / 03 included)
      if (isVideoButton) {
        if (activeBtn === btn) {
          isPreviewMode = !isPreviewMode;
        } else {
          activeBtn = btn;
          isPreviewMode = true;
        }

        if (isPreviewMode) {
          video.style.opacity = "1";
          video.style.filter = "none";

          const isSameVideo = video.src.includes(src);

          loadVideo(src, isSameVideo);
        } else {
          isPreviewMode = false;
          activeBtn = null;

          video.style.opacity = "1";
          loadVideo(defaultVideo);
        }

        return;
      }

      //  SAFETY FALLBACK
      activeBtn = null;
      isPreviewMode = false;

      video.style.opacity = "1";
      video.style.filter = "none";
    });
  });
});

