

document.addEventListener("DOMContentLoaded", function() {
    let header = document.querySelector(".header")
    let body2 = document.getElementById("body")
    let headerStart = document.querySelector(".header__start")
    let button = document.querySelector(".header__button")
    let root = document.querySelector(":root")
    let rootStyle = window.getComputedStyle(root)
    let navbar = document.querySelector(".navbar")
    let navLinks = document.querySelectorAll(".nav__link")

    let sectionHeaders = document.querySelectorAll(".section__header")
    let sectionButtons = document.querySelectorAll(".section__button")
    let sectionTitles = document.querySelectorAll(".section__title");
    let constantButtonText = sectionButtons[0].innerHTML;
    
    let pb = document.querySelector(".section__content--tags");
    let tagsSections = document.querySelectorAll(".section__content--inside-tags")
    let tagSection = document.getElementById("tags")
    let tagsTitle = tagSection.querySelector(".section__title--tags")
    let tagsLink = document.querySelector(".tags__link")


    // See more button

    let seeMore = (index) => {
        if (index === -1) {
            sectionHeaders.forEach(sectionHeader => {
                if (sectionHeader.classList.contains("header-mod")) {
                    let sectionContent = sectionHeader.nextElementSibling;
                    let button = sectionHeader.children[1];
                    sectionHeader.style.position = 'relative';
                    sectionContent.style.position = 'relative';
                    root.style.overflowY = 'auto';
                    sectionContent.firstElementChild.style.display = '';
                    sectionContent.style.overflowY = 'hidden';
                    sectionContent.style.height = '';
                    button.innerHTML = `${constantButtonText}`;
                    button.classList.remove("button-mod");
                    sectionHeader.classList.remove("header-mod")
                }
            });
        } else {
            let sectionHeader = sectionHeaders[index];
            let button = sectionButtons[index];
            let sectionContent = sectionHeader.nextElementSibling;
            if (sectionHeader.classList.contains("header-mod")){//=== false) 
                root.style.overflowY = 'auto'
                sectionContent.firstElementChild.style.display = ''
                sectionContent.style.overflowY = 'hidden'
                sectionContent.style.height = ''
                button.innerHTML = `${constantButtonText}`
            } else {
                let positionScroll = sectionHeader.offsetTop - 85;
                window.scrollTo ({
                    top: positionScroll,
                    behavior: 'smooth'
                })
                root.style.overflowY = 'hidden'
                if (window.innerWidth > 1100) {
                    sectionContent.firstElementChild.style.display = 'flex'
                } else {
                    sectionContent.firstElementChild.style.display = 'grid'
                }
                sectionContent.style.overflowY = 'scroll'
                sectionContent.style.height = `calc(100dvh - ${header.offsetHeight + sectionHeader.offsetHeight + 20}px)`
                button.innerHTML = 'Ver menos »'
            }
            sectionHeader.classList.toggle("header-mod")
            button.classList.toggle("button-mod")
        }
    }

    //Scroll

    // let scrillex = (bool) => {
    //     if (bool === true) {
    //         header.scrollIntoView({
    //             block: 'start'
    //         });
    //     }

    //     let viewportWidth = window.innerWidth; // Usar el ancho del viewport actual
    //     console.log(viewportWidth);

    //     if (viewportWidth < 700) {
    //         if (rootStyle.getPropertyValue('overflow') === 'hidden' || bool === false)  {
    //             root.style.overflowY = 'auto';
    //             header.style.height = 'auto';
    //             navbar.style.display = 'none';
    //             // Navbar width = 100dvw
    //             headerStart.style.width = `calc(100dvw - 40)`
    //             button.style.backgroundImage = "url(/header/open_icon.webp)";
    //             // console.log("1");
    //         } else {
    //             root.style.overflowY = 'hidden';
    //             header.style.height = '100dvh';
    //             navbar.style.height = '100%'
    //             navbar.style.display = 'flex';
    //             // Navbar width = 100dvw
    //             button.style.backgroundImage = "url(/header/close_icon.webp)";
    //             // console.log("3");
    //         }
    //     } else {
    //         root.style.overflowY = 'auto';
    //         header.style.height = 'auto';
    //         navbar.style.display = 'flex';
    //         navbar.style.height = 'auto';
    //         headerStart.style.width = 'auto';
    //         headerStart.style.marginLeft = '2dvw';
    //         // console.log("2");
    //     }
    // };

    // button.addEventListener('click', () => {
    //     scrillex(true);
    // });

    // navLinks.forEach(link => {
    //     link.addEventListener('click', ()=>{
    //         let viewportWidth = window.innerWidth; // Usar el ancho del viewport actual
    //         if (viewportWidth<700){
    //             scrillex(false)
    //         }
    //     })
    // });


        // navItems.forEach((button, index) => {
        //     button.addEventListener('click',()=>{
        
        //         if (rootStyle.getPropertyValue('overflow')==='hidden') {
        //             scrillex(true)
        //         }
        
        
        //         if (body2.classList.contains("body--index")) {
        //             let section = sections[index-1];
        //             let positionScroll = section.offsetTop - 85;
        //             window.scrollTo ({
        //                 top: positionScroll,
        //                 behavior: 'smooth'
        //             })
        //         }
        
        //     })
        // });


    sectionButtons.forEach((button, index) => {
        if (!button.classList.contains("tags__button")){
            button.addEventListener('click', ()=> {
                seeMore(index)
            })
        }
    })

    window.addEventListener('resize', ()=> {
        seeMore(-1)
        // setTimeout(() => {
        //     scrillex(false);
        // }, 100); // Espera 100ms para asegurarte de que el ancho se haya actualizado
    })


    tagsSections.forEach(tag => {
        tag.addEventListener("mouseenter", ()=> {
            tagsTitle.innerHTML = `${tag.className.split(" ")[1].slice(4)}`
            let tagsLink = tagsTitle.parentElement;
            console.log(tagsLink)
            tagsLink.href = `/tags/${tag.className.split(" ")[1].slice(4)}`
        })
        // tag.addEventListener("mouseleave", ()=> {
        //     sectionContentInsideTags.forEach(element => {
        //         element.style.display = ''
        //     });
        //     tagSection.style.overflowY = ''
        // })


    });

    pb.addEventListener("scroll", ()=> {
        
    })

});

// let sectionHeaders = document.querySelectorAll(".section__header")
// let sectionButtons = document.querySelectorAll(".section__button")
// let sectionTitles = document.querySelectorAll(".section__title");
// let constantButtonText = sectionButtons[0].innerHTML;

//Esta función se usa para copiar elementos al clipboard:

function copyText(element) {
    const text = element.innerText;
    navigator.clipboard.writeText(text)
        .then(() => alert("Texto copiado: " + text))
        .catch(err => console.error("Error al copiar: ", err));
}