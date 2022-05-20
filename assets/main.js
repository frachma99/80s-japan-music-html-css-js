const navToggle = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

navToggle.addEventListener("click", () => {
  navList.classList.toggle("show-menu");
});

const journeyWrapper = document.querySelectorAll(".journey-wrapper");

journeyWrapper.forEach((item) => {
  const journeyHeader = item.querySelector(".journey-header");
  const journeyContent = item.querySelector(".journey-content");

  journeyHeader.addEventListener("click", () => {
    journeyContent.classList.toggle("show-journey");
  });
});

window.onscroll = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
