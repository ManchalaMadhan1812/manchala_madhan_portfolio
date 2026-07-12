/*==================================================
    PORTFOLIO V4 - SCRIPT.JS
    Part 1
==================================================*/

"use strict";

/*==================================================
    LOADER
==================================================*/

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

/*==================================================
    MOBILE MENU
==================================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {

            menuBtn.innerHTML =
                '<i class="fa-solid fa-xmark"></i>';

        } else {

            menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }

    });

}

/* Close Menu */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {

            navLinks.classList.remove("active");

        }

        if (menuBtn) {

            menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }

    });

});

/*==================================================
    DARK MODE
==================================================*/

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }

    });

}

/*==================================================
    TYPING EFFECT
==================================================*/

const typing = document.getElementById("typing");

if (typing) {

    const words = [

        "Software Developer",

        "Java Developer",

        "Frontend Developer",

        "AI Enthusiast",

        "React Learner"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeWriter() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typing.textContent =
                currentWord.substring(0, charIndex);

            charIndex++;

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(typeWriter, 1500);

                return;

            }

        } else {

            typing.textContent =
                currentWord.substring(0, charIndex);

            charIndex--;

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

                charIndex = 0;

            }

        }

        setTimeout(typeWriter, deleting ? 60 : 120);

    }

    typeWriter();

}

console.log("✅ Script Part 1 Loaded");
/*==================================================
    STICKY NAVBAR
==================================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/*==================================================
    SCROLL PROGRESS BAR
==================================================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*==================================================
    BACK TO TOP BUTTON
==================================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 400) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*==================================================
    SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target =
            document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});

/*==================================================
    ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});

console.log("✅ Script Part 2 Loaded");
/*==================================================
    SCROLL REVEAL ANIMATION
==================================================*/

const revealElements = document.querySelectorAll(

".fade-up, .project-card, .skill-card, .service-card, .stat-card, .timeline-item, .certificate-card, .contact-card"

);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            revealObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach((element) => {

    element.classList.add("fade-up");

    revealObserver.observe(element);

});

/*==================================================
    ANIMATED COUNTERS
==================================================*/

const counters = document.querySelectorAll("[data-target]");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        let value = 0;

        const increment = Math.ceil(target / 100);

        function updateCounter() {

            value += increment;

            if (value >= target) {

                counter.textContent = target;

                return;

            }

            counter.textContent = value;

            requestAnimationFrame(updateCounter);

        }

        updateCounter();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*==================================================
    CURSOR GLOW
==================================================*/

const cursorGlow = document.getElementById("cursor-glow");

if (cursorGlow) {

    document.addEventListener("mousemove", (e) => {

        cursorGlow.style.left = e.clientX + "px";
        cursorGlow.style.top = e.clientY + "px";

    });

}

/*==================================================
    HERO IMAGE PARALLAX
==================================================*/

const heroImage = document.querySelector(".hero-image");

if (heroImage) {

    document.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.clientX) / 40;
        const y = (window.innerHeight / 2 - e.clientY) / 40;

        heroImage.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}

/*==================================================
    BUTTON RIPPLE EFFECT
==================================================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const size = Math.max(this.clientWidth, this.clientHeight);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left = (e.offsetX - size / 2) + "px";
        ripple.style.top = (e.offsetY - size / 2) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/*==================================================
    CONTACT FORM
==================================================*/

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", () => {

        console.log("Submitting to Netlify...");

    });

}

/*==================================================
    DISABLE IMAGE DRAG
==================================================*/

document.querySelectorAll("img").forEach((img) => {

    img.setAttribute("draggable", "false");

});

/*==================================================
    PAGE READY
==================================================*/

window.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 Portfolio Loaded Successfully");

});