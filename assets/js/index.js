navAddBTN = document.querySelector("#button-nav-add");
navRemoveBTN = document.querySelector("#button-nav-remove");
navbar = document.querySelector(".nav-menu");
navLinks = document.querySelectorAll(".nav-link");
scrollupBTN = document.querySelector("#button-scrollUp");
servicesBTNS = document.querySelector(".thumb")

const windowEvents = ["load","reload"];
windowEvents.forEach((event) => {
  window.addEventListener(event, () => {
    window.scrollTo({
      behavior: "smooth",
      top: 5,
    });
  });
});

navAddBTN.onclick = () => {
  navbar.classList.add("nav-menu-show");
  navRemoveBTN.classList.add("show");
  navAddBTN.classList.add("hide");
};

// show navbar on small screens

navRemoveBTN.onclick = () => {
  navbar.classList.remove("nav-menu-show");
  navAddBTN.classList.remove("hide");
  navAddBTN.classList.add("show");
  hide();
};
// hide navbar on small screens
window.addEventListener("resize", () => {
  if (window.screen.width >= 820) {
    navbar.classList.remove("nav-menu-show");
    navAddBTN.classList.remove("show");
    hide();
  }
});
// change from tablet size to laptop size makes an issue in navbar , solved it by window

// hide navbar while clicking on a link

const hide = () => {
  navRemoveBTN.classList.remove("show");
};
// change navbar background color on scrolling down (y-axis)
// add a dot under active link

window.addEventListener("scroll", () => {
  for (let a of navLinks) {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionName = a.getAttribute("href").slice(1);
      const section = document.getElementById(sectionName);
      let position = section.offsetTop - 100;
      if (a.innerText === "الرئيسية") position = -100;
      window.scrollTo({ left: 0, top: position });
      if(window.innerWidth <= 992) {
        navbar.classList.remove("nav-menu-show");
        navAddBTN.classList.remove("hide");
        navAddBTN.classList.add("show");
        hide();
      }
    });
  }
});

let homeSwiper = new Swiper(".homeSwiper", {
  loop: true,
  speed: 2000,
  effect: "fade",
  autoplay: {
    delay: 1000,
  },
});

let projectSwiper = new Swiper(".projectSwiper", {
  speed: 1000,
  spaceBetween: 20,
  loop: true,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

// const sr = ScrollReveal({
//   origin: "top",
//   distance: "60px",
//   duration: 1000,
//   delay: 400,
//   reset: true,
// });
// sr.reveal(".homeSwiper , .newSwiper ,.newsletter ,.discount");
// sr.reveal(".trick-data , .category-data", { interval: 100 });
// sr.reveal(".about-data ,.discount-data", { origin: "left" });
// reveal content on scrolling
