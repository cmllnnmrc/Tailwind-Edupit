
const baba = document.querySelectorAll(".header-mob__nav ul li h4");
baba.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.nextElementSibling.classList.toggle("open");
    drop.querySelector("i").classList.toggle("open");
  });
});

const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header-mob__nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  mobileNav.classList.toggle("open");
});

const tabNav = document.querySelectorAll(".tab-nav-link");
const tabContent = document.querySelectorAll(".about__text__content");
tabNav.forEach((nav) => {
  nav.addEventListener("click", () => {
    removeActiveNav();
    nav.classList.add("active");
    const activeContent = document.querySelector(`#${nav.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveNav() {
  tabNav.forEach((nav) => {
    nav.classList.remove("active");
  });
}

function removeActiveContent() {
  tabContent.forEach((nav) => {
    nav.classList.remove("active");
  });
}