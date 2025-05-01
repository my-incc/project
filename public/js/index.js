(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    let header = document.querySelector(".header");
    let body2 = document.getElementById("body");
    let headerStart = document.querySelector(".header__start");
    let button = document.querySelector(".header__button");
    let root = document.querySelector(":root");
    let rootStyle = window.getComputedStyle(root);
    let navbar = document.querySelector(".navbar");
    let navLinks = document.querySelectorAll(".nav__link");
    let sectionHeaders = document.querySelectorAll(".section__header");
    let sectionButtons = document.querySelectorAll(".section__button");
    let sectionTitles = document.querySelectorAll(".section__title");
    let constantButtonText = sectionButtons[0].innerHTML;
    let pb = document.querySelector(".section__content--tags");
    let tagsSections = document.querySelectorAll(".section__content--inside-tags");
    let tagSection = document.getElementById("tags");
    let tagsTitle = tagSection.querySelector(".section__title--tags");
    let tagsLink = document.querySelector(".tags__link");
    let seeMore = (index) => {
      if (index === -1) {
        sectionHeaders.forEach((sectionHeader) => {
          if (sectionHeader.classList.contains("header-mod")) {
            let sectionContent = sectionHeader.nextElementSibling;
            let button2 = sectionHeader.children[1];
            sectionHeader.style.position = "relative";
            sectionContent.style.position = "relative";
            root.style.overflowY = "auto";
            sectionContent.firstElementChild.style.display = "";
            sectionContent.style.overflowY = "hidden";
            sectionContent.style.height = "";
            button2.innerHTML = `${constantButtonText}`;
            button2.classList.remove("button-mod");
            sectionHeader.classList.remove("header-mod");
          }
        });
      } else {
        let sectionHeader = sectionHeaders[index];
        let button2 = sectionButtons[index];
        let sectionContent = sectionHeader.nextElementSibling;
        if (sectionHeader.classList.contains("header-mod")) {
          root.style.overflowY = "auto";
          sectionContent.firstElementChild.style.display = "";
          sectionContent.style.overflowY = "hidden";
          sectionContent.style.height = "";
          button2.innerHTML = `${constantButtonText}`;
        } else {
          let positionScroll = sectionHeader.offsetTop - 85;
          window.scrollTo({
            top: positionScroll,
            behavior: "smooth"
          });
          root.style.overflowY = "hidden";
          if (window.innerWidth > 1100) {
            sectionContent.firstElementChild.style.display = "flex";
          } else {
            sectionContent.firstElementChild.style.display = "grid";
          }
          sectionContent.style.overflowY = "scroll";
          sectionContent.style.height = `calc(100dvh - ${header.offsetHeight + sectionHeader.offsetHeight + 20}px)`;
          button2.innerHTML = "Ver menos \xBB";
        }
        sectionHeader.classList.toggle("header-mod");
        button2.classList.toggle("button-mod");
      }
    };
    sectionButtons.forEach((button2, index) => {
      if (!button2.classList.contains("tags__button")) {
        button2.addEventListener("click", () => {
          seeMore(index);
        });
      }
    });
    window.addEventListener("resize", () => {
      seeMore(-1);
    });
    tagsSections.forEach((tag) => {
      tag.addEventListener("mouseenter", () => {
        tagsTitle.innerHTML = `${tag.className.split(" ")[1].slice(4)}`;
        let tagsLink2 = tagsTitle.parentElement;
        console.log(tagsLink2);
        tagsLink2.href = `/tags/${tag.className.split(" ")[1].slice(4)}`;
      });
    });
    pb.addEventListener("scroll", () => {
    });
  });
})();
