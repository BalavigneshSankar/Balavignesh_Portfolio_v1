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

// Sticky navigation bar
