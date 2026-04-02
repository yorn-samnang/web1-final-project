const navToggle = document.querySelector(".nav-toggle");
const navPill = document.querySelector(".nav-pill");
const siteNav = document.querySelector(".site-nav");

if (navToggle && navPill && siteNav) {
  const closeMenu = () => {
    navPill.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navPill.classList.toggle("menu-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}
