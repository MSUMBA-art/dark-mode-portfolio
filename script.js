// navigation bar effects on scroll
window.addEventListener("scroll", function () {
  const header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//  services section modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtn = document.querySelectorAll(".learn-more-btn");
const modalCloseBtn = document.querySelectorAll(".modal-close-btn");

let modal = function (modalClick) {
  serviceModals[modalClick].classList.add("active");
};

learnMoreBtn.forEach((learnMoreBtn, i) => {
  learnMoreBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloseBtn.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener("click", () => {
    serviceModals.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
});

// Portfolio section - Modal

const portfolioModals = document.querySelectorAll(".portfolio-modal");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtn = document.querySelectorAll(".portfolio-close-btn");

let portfolioModal = function (modalClick) {
  portfolioModals[modalClick].classList.add("active");
};

imgCards.forEach((imgCards, i) => {
  imgCards.addEventListener("click", () => {
    portfolioModal(i);
  });
});

portfolioCloseBtn.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener("click", () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active");
    });
  });
});

// my clients swiper
var swiper = new Swiper(".client-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon);
});

const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () =>
  themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"](
    "dark-theme"
  );
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

// scroll to top button
const scrollToTop = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollToTop.classList.toggle("active", window.scrollY > 500);
});

scrollToTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
  const section = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  section.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
});

// responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});

const readMoreBtn = document.querySelector(".read-more");
const readMoreContent = document.querySelector(".read-more-content");

readMoreBtn.addEventListener("click", () => {
  readMoreContent.classList.toggle("show-content");
  if (readMoreContent.classList.contains("show-content")) {
    readMoreBtn.textContent = "Show less..";
  } else {
    readMoreBtn.textContent = "Read more....";
  }
});

// Scroll reveal animation
// common reveal options
ScrollReveal({
  //  reset: true,
  distance: "60px",
  duration: 1500,
  delay: 100,
});

// target elements and options to create animations
ScrollReveal().reveal(".home .info h2", {
  delay: 300,
  origin: "top",
});
ScrollReveal().reveal(".home .info h3, .home .btn", {
  delay: 400,
  origin: "right",
});
ScrollReveal().reveal(".home .info .btn", { delay: 600, origin: "bottom" });
ScrollReveal().reveal(
  ".media-icons i, .contact-list li, .section-title-01, .skills-description h3",
  {
    delay: 300,
    origin: "left",
    interval: 100,
  }
);
ScrollReveal().reveal(".about, .contact-right, .info, .home-img", {
  delay: 200,
  origin: "right",
  interval: 100,
});
ScrollReveal().reveal(
  ".contact-right p, .section-title-02, .content-left , .skills-description p",
  {
    delay: 300,
    origin: "right",
    interval: 100,
  }
);
ScrollReveal().reveal(
  ".about-img, .services-description, .contact-card, .client-swiper",
  { delay: 400, origin: "left" }
);
ScrollReveal().reveal(
  ".experience-card, .service-card, .education",
  { delay: 400, origin: "bottom", interval: 200 }
);
ScrollReveal().reveal("footer .group, .contact-form, .img-card", {
  delay: 300,
  origin: "top",
  interval: 100,
});
