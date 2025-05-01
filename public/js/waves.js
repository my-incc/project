(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    let body = document.getElementById("body");
    let landing = document.getElementById("landing");
    let footer = document.getElementById("footer");
    let articles = document.querySelectorAll(".article");
    let sections = document.querySelectorAll(".section");
    let button = document.querySelector(".header__button");
    let root = document.querySelector(":root");
    let rootStyle = window.getComputedStyle(root);
    let header = document.querySelector(".header");
    let headerStart = document.querySelector(".header__start");
    let navbar = document.querySelector(".navbar");
    let navLinks = document.querySelectorAll(".nav__link");
    let fragment = null;
    let createWave = (sections2) => {
      let waves = document.querySelectorAll(".wave");
      if (waves !== null) {
        waves.forEach(function(element) {
          element.parentNode.removeChild(element);
        });
      }
      if (document.querySelector(".wave--container") != null) {
        console.log(`${document.querySelector("asdf")}`);
        let parent = document.querySelector(".wave--container").parentElement;
        for (let i = 0; i < document.querySelectorAll(".wave--container").length; i++) {
          let container = document.querySelectorAll(".wave--container")[i];
          container.parentElement.removeChild(container);
          console.log(`${document.querySelectorAll(".wave--container")}`);
        }
      }
      for (let z = 0; z < sections2.length; z++) {
        let section = document.getElementById(sections2[z][0]);
        let sectionHeight = section.offsetHeight;
        let separation = sections2[z][1];
        let container = document.createElement("DIV");
        container.classList.add("wave--container");
        container.style.height = `${sectionHeight}px`;
        section.appendChild(container);
        if (fragment) {
        } else {
          fragment = document.createDocumentFragment();
        }
        for (let x = 0; x < Math.trunc(sectionHeight / separation); x++) {
          let div = document.createElement("DIV");
          div.style.height = `40px`;
          div.classList.add("wave");
          div.style.animationDelay = `-${x}s`;
          container.appendChild(div);
        }
        fragment.appendChild(container);
        section.appendChild(fragment);
      }
    };
    window.addEventListener("resize", () => {
      if (body.classList.contains("body--index")) {
        createWave([["landing", 200], ["footer", 90]]);
      }
      if (body.classList.contains("body--post")) {
        createWave([["heading", 200], ["footer", 90]]);
      }
      scrillex(false);
    });
    if (body.classList.contains("body--index")) {
      createWave([["landing", 200], ["footer", 90]]);
    } else if (body.classList.contains("body--post")) {
      createWave([["heading", 200], ["footer", 90]]);
    } else {
      createWave([["footer", 90]]);
    }
    let scrillex = (bool) => {
      if (bool === true) {
        header.scrollIntoView({
          block: "start"
        });
      }
      let viewportWidth = window.innerWidth;
      if (viewportWidth <= 850) {
        if (rootStyle.getPropertyValue("overflow") === "hidden" || bool === false) {
          root.style.overflowY = "auto";
          header.style.height = "auto";
          navbar.style.display = "";
          headerStart.style.width = `calc(100dvw - 40)`;
          button.style.backgroundImage = "url(/header/open_icon.webp)";
          console.log("1");
        } else {
          root.style.overflowY = "hidden";
          header.style.height = "100dvh";
          navbar.style.height = "100%";
          navbar.style.display = "flex";
          button.style.backgroundImage = "url(/header/close_icon.webp)";
          console.log("3");
        }
      } else {
        root.style.overflowY = "auto";
        header.style.height = "auto";
        navbar.style.display = "flex";
        navbar.style.height = "auto";
        headerStart.style.width = "auto";
        headerStart.style.marginLeft = "2dvw";
        console.log("2");
      }
    };
    button.addEventListener("click", () => {
      scrillex(true);
    });
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        let viewportWidth = window.innerWidth;
        if (viewportWidth < 700) {
          scrillex(false);
        }
      });
    });
  });
})();
