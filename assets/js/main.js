/*
 * Mahedi Hasan — Portfolio
 * Vanilla JS only: mobile nav toggle, scroll-reveal, footer year.
 * No dependencies, no build step.
 */
(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var printButton = document.getElementById("printCv");
  if (printButton) {
    printButton.addEventListener("click", function () {
      window.print();
    });
  }

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Highlight the current page in the primary nav (works for direct
  // file:// preview too, since it matches on data-page, not pathname).
  var currentPage = document.body.getAttribute("data-page");
  if (currentPage) {
    document.querySelectorAll('.primary-nav a[data-page="' + currentPage + '"]').forEach(function (link) {
      link.classList.add("is-current");
      link.setAttribute("aria-current", "page");
    });
  }

  // One orchestrated reveal-on-scroll moment for section content.
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  var revealTargets = document.querySelectorAll(
    ".section .panel, .project-card, .pub-group, .skill-group, .contact-panel"
  );

  revealTargets.forEach(function (el) {
    el.classList.add("reveal");
  });

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
