navAddBTN = document.querySelector("#button-nav-add");
navRemoveBTN = document.querySelector("#button-nav-remove");
navbar = document.querySelector(".nav-menu");
navLinks = document.querySelectorAll(".nav-link");
scrollupBTN = document.querySelector("#button-scrollUp");
servicesBTNS = document.querySelector(".thumb");
let contactButtonsSocial = document.getElementsByClassName(
  "contact-buttons-social"
);
document
  .getElementById("contact-button-show")
  .addEventListener("click", showContactButtons);
document
  .getElementById("contact-button-close")
  .addEventListener("click", closeContactButtons);

const windowEvents = ["load", "reload"];
windowEvents.forEach((event) => {
  window.addEventListener(event, () => {
    window.scrollTo({
      behavior: "smooth",
      top: 5,
    });
  });
});

function showContactButtons() {
  setTimeout(() => {
    contactButtonsSocial[3].style.transform = "translateY(0px)";
    contactButtonsSocial[2].style.transform = "translateY(0px)";
    contactButtonsSocial[1].style.transform = "translateY(0px)";
    contactButtonsSocial[0].style.transform = "translateY(0px)";
  }, 200);
  setTimeout(() => {
    document.getElementById("contact-button-show").style.display = "none";
    document.getElementById("contact-button-close").style.display = "inline-block";
  }, 300);
}

function closeContactButtons() {
  setTimeout(() => {
    contactButtonsSocial[3].style.transform = "translateY(75px)";
    contactButtonsSocial[2].style.transform = "translateY(150px)";
    contactButtonsSocial[1].style.transform = "translateY(225px)";
    contactButtonsSocial[0].style.transform = "translateY(300px)";
  }, 200);
  setTimeout(() => {
    document.getElementById("contact-button-show").style.display = "inline-block";
    document.getElementById("contact-button-close").style.display = "none";
  }, 300);
}

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
      if (window.innerWidth <= 992) {
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
  loop: false,
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
