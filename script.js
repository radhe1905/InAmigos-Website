// RESPONSIVE NAVBAR

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});




// CLOSE MENU AFTER CLICKING LINKS

document.querySelectorAll(".nav-links a")

.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});






// NAVBAR BACKGROUND CHANGE ON SCROLL

const navbar = document.querySelector("nav");


window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "#111";

        navbar.style.boxShadow =

        "0 5px 20px rgba(0,0,0,0.25)";

    }

    else {

        navbar.style.background =

        "rgba(0,0,0,0.15)";

        navbar.style.backdropFilter =

        "blur(8px)";

        navbar.style.boxShadow =

        "none";

    }

});








// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]')

.forEach(anchor => {

    anchor.addEventListener("click",

        function (e) {

            e.preventDefault();


            const target =

                document.querySelector(

                    this.getAttribute("href")

                );


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

});








// ACTIVE NAV LINK

const sections =

    document.querySelectorAll("section");


const navItems =

    document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",

    () => {


        let current = "";


        sections.forEach(section => {


            const sectionTop =

                section.offsetTop - 150;


            const sectionHeight =

                section.clientHeight;


            if (

                pageYOffset >= sectionTop

                &&

                pageYOffset

                <

                sectionTop + sectionHeight

            ) {

                current =

                    section.getAttribute("id");

            }


        });




        navItems.forEach(link => {


            link.classList.remove("active");


            if (

                link.getAttribute("href")

                ===

                `#${current}`

            ) {

                link.classList.add("active");

            }


        });


    });







// AOS ANIMATION

AOS.init({

    duration: 1000,

    once: true,

    offset: 120,

    easing: "ease-in-out"

});
