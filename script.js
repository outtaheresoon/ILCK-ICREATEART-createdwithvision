/* ======================================
HEADLINE DISTORTION
====================================== */

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

/* ======================================
INIT
====================================== */

document.addEventListener("DOMContentLoaded", () => {
  
  const mainVideo = document.getElementById("mainVideo");

  const titleEl = document.querySelector(".context-section h2");

  const textEl = document.querySelector(".context-section p");

  /* ======================================
  IMAGE LOOP
  ====================================== */

  const track = document.querySelector(".project-images");

  if (track) {
    const distance = track.scrollWidth / 2;

    gsap.to(track, {
      x: -distance,
      duration: 8,
      ease: "none",
      repeat: -1,
    });
  }

  /* ======================================
  TOP TRANSMISSIONS
  ====================================== */

  const topToggle = document.querySelector(".top-archive-toggle");

  const topGrid = document.querySelector(".top-archive-grid");

  const topCards = document.querySelectorAll(".top-archive-card");

  topToggle.addEventListener("click", () => {
    topGrid.classList.toggle("active");

    topToggle.textContent = topGrid.classList.contains("active")
      ? "CLOSE TRANSMISSIONS"
      : "ACCESS TRANSMISSIONS";

    if (topGrid.classList.contains("active")) {
      gsap.fromTo(
        ".top-archive-card",
        {
          opacity: 0,
          y: 100,
          filter: "blur(12px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.12,
          duration: 1,
          ease: "expo.out",
        },
      );
    }
  });

  topCards.forEach((card) => {
    const video = card.querySelector("video");

    video.addEventListener("mouseenter", () => {
      video.play().catch(() => {});
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });

    card.addEventListener("click", () => {
      const src = card.dataset.video;

      mainVideo.style.opacity = "0";

      setTimeout(() => {
        mainVideo.src = src;

        mainVideo.load();

        mainVideo.play().catch(() => {});

        mainVideo.style.opacity = "1";
      }, 250);

      titleEl.textContent = card.dataset.title;

      textEl.textContent = card.dataset.text;
    });
  });

  /* ======================================
  ARCHIVE SYSTEM
  ====================================== */

  const archiveToggle = document.querySelector(".archive-toggle");

  const archiveGrid = document.querySelector(".archive-grid");

  archiveToggle.addEventListener("click", () => {
    archiveGrid.classList.toggle("active");

    archiveToggle.textContent = archiveGrid.classList.contains("active")
      ? "CLOSE ARCHIVE"
      : "ACCESS TRANSMISSIONS";

    if (archiveGrid.classList.contains("active")) {
      gsap.fromTo(
        ".archive-card",
        {
          opacity: 0,
          y: 120,
          scale: 0.9,
          filter: "blur(12px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          stagger: 0.15,
          duration: 1.2,
          ease: "expo.out",
        },
      );
    }
  });

  document.querySelectorAll(".archive-card video").forEach((video) => {
    video.addEventListener("mouseenter", () => {
      video.play().catch(() => {});
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });

  /* ======================================
  DESIGN ROOMS
  ====================================== */

  const roomToggles = document.querySelectorAll(".room-toggle");

  roomToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const room = toggle.closest(".design-room");

      const categories = room.querySelector(".room-categories");

      const isActive = categories.classList.contains("active");

      categories.classList.toggle("active");

      if (!isActive) {
        categories.style.maxHeight = categories.scrollHeight + "px";

        toggle.textContent = "CLOSE ROOM";

        gsap.fromTo(
          categories.children,
          {
            opacity: 0,
            y: 40,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            stagger: 0.08,
            duration: 0.8,
            ease: "expo.out",
          },
        );
      } else {
        categories.style.maxHeight = "0px";

        toggle.textContent = "ACCESS ROOM";
      }
    });
  });

  /* ======================================
  IMAGE VIEWER
  ====================================== */

  const viewer = document.querySelector(".image-viewer");

  const viewerImage = document.querySelector(".viewer-image");

  const viewerClose = document.querySelector(".viewer-close");

  document.querySelectorAll(".room-assets img").forEach((img) => {
    img.addEventListener("click", () => {
      viewer.classList.add("active");

      viewerImage.src = img.src;

      document.body.classList.add("viewer-open");

      gsap.fromTo(
        viewerImage,
        {
          scale: 0.85,
          opacity: 0,
          filter: "blur(20px)",
        },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "expo.out",
        },
      );
    });
  });

  function closeViewer() {
    viewer.classList.remove("active");

    document.body.classList.remove("viewer-open");
  }

  viewerClose.addEventListener("click", closeViewer);

  viewer.addEventListener("click", (e) => {
    if (e.target === viewer) {
      closeViewer();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeViewer();
    }
  });

  /* ======================================
  PARALLAX
  ====================================== */

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    gsap.to(".bg-video", {
      y: scrollY * 0.08,
      duration: 0.5,
    });

    gsap.to(".bg-video2", {
      y: scrollY * 0.03,
      duration: 0.5,
    });
  });

  /* ======================================
  ASSET PROTECTION
  ====================================== */

  document.querySelectorAll("img, video").forEach((asset) => {
    asset.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    asset.addEventListener("dragstart", (e) => {
      e.preventDefault();
    });
  });
});
