"use strict";
// Smooth scroll to respective section on clicking navigation link.
document.querySelector(".main-nav").addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("main-nav-link")) {
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
const headerHeight = header.getBoundingClientRect().height;

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
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(document.querySelector(".section-hero"));
