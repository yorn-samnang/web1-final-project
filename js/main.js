document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navPill = document.querySelector(".nav-pill");
  const siteNavLinks = document.querySelectorAll(".site-nav a");
  const revealItems = document.querySelectorAll(".reveal");

  if (navToggle && navPill) {
    navToggle.addEventListener("click", function () {
      const isOpen = navPill.classList.toggle("menu-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    siteNavLinks.forEach((link) => {
      link.addEventListener("click", function () {
        if (navPill.classList.contains("menu-open")) {
          navPill.classList.remove("menu-open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, observerRef) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observerRef.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
});