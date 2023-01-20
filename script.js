"use strict";
// Smooth scroll to respective section on clicking navigation link.
document.querySelector(".main-nav").addEventListener("click", (e) => {
  if (e.target.classList.contains("main-nav-link")) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Smooth scroll to contact section on clicking "Connect to me" button.
document.querySelector(".link-contact").addEventListener("click", function (e) {
  e.preventDefault();

  const id = this.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

// Sticky navigation bar using IntersectionObserver API
const header = document.querySelector(".header");

const obsCallback = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add("sticky");
  }
  if (entry.isIntersecting) {
    header.classList.remove("sticky");
  }
};

const obsOptions = {
  root: null,
  threshold: 0.4,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(document.querySelector(".section-hero"));

// Highlighting navigation link that is currently viewed
const mainNavLinks = document.querySelectorAll(".main-nav-link");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  let sectionViewed;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.getBoundingClientRect().height;
    if (window.scrollY >= sectionTop - 0.3 * sectionHeight) {
      sectionViewed = section;
    }
  });
  mainNavLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").endsWith(sectionViewed.id)) {
      link.classList.add("active");
    }
  });
});
