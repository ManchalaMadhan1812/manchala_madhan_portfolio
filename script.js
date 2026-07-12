/*==================================================
        PORTFOLIO SCRIPT v2.0
        Manchala Madhan
==================================================*/

"use strict";

/*==================================================
        LOADER
==================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    loader.style.transition = "opacity 0.5s ease";
    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500);

});

/*==================================================
        MOBILE MENU
==================================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

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

/*==================================================
        CLOSE MENU
==================================================*/

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        if(navLinks){

            navLinks.classList.remove("active");

        }

        if(menuBtn){

            menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

        }

    });

});

/*==================================================
        DARK MODE
==================================================*/

const themeBtn =
document.getElementById("theme-btn");

const savedTheme =
localStorage.getItem("theme");

if(savedTheme==="light"){

    document.body.classList.add("light-mode");

    if(themeBtn){

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }

}

if(themeBtn){

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem("theme","light");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }

    else{

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});

}

/*==================================================
        TYPING EFFECT
==================================================*/

const typing =
document.getElementById("typing");

if(typing){

const words=[

"Software Developer",

"Java Developer",

"Frontend Developer",

"Android Developer",

"AI Enthusiast",

"React Developer"

];

let wordIndex=0;
let charIndex=0;
let deleting=false;

function typingEffect(){

const currentWord=words[wordIndex];

if(!deleting){

typing.textContent=
currentWord.substring(0,charIndex);

charIndex++;

if(charIndex>

currentWord.length){

deleting=true;

setTimeout(typingEffect,1200);

return;

}

}

else{

typing.textContent=
currentWord.substring(0,charIndex);

charIndex--;

if(charIndex<0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

charIndex=0;

}

}

setTimeout(

typingEffect,

deleting?60:120

);

}

typingEffect();

}

console.log("Portfolio Script Loaded Successfully");
/*==================================================
        STICKY NAVBAR
==================================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/*==================================================
        SCROLL PROGRESS BAR
==================================================*/

const progressBar =
document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
    progress + "%";

});

/*==================================================
        BACK TO TOP BUTTON
==================================================*/

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 400) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

if(backToTop){

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

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

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

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
        section.offsetTop - 180;

        if (window.scrollY >= top) {

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (

            link.getAttribute("href") ===
            "#" + current

        ) {

            link.classList.add("active");

        }

    });

});
/*==================================================
        STICKY NAVBAR
==================================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/*==================================================
        SCROLL PROGRESS BAR
==================================================*/

const progressBar =
document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
    progress + "%";

});

/*==================================================
        BACK TO TOP BUTTON
==================================================*/

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 400) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

if(backToTop){

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

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

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

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
        section.offsetTop - 180;

        if (window.scrollY >= top) {

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (

            link.getAttribute("href") ===
            "#" + current

        ) {

            link.classList.add("active");

        }

    });

});
/*==================================================
        BUTTON RIPPLE EFFECT
==================================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("click", function (e) {

        const oldRipple =
        this.querySelector(".ripple");

        if (oldRipple) {

            oldRipple.remove();

        }

        const ripple =
        document.createElement("span");

        ripple.classList.add("ripple");

        const size = Math.max(

            this.clientWidth,

            this.clientHeight

        );

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left =
        (e.offsetX - size / 2) + "px";

        ripple.style.top =
        (e.offsetY - size / 2) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/*==================================================
        CONTACT FORM MESSAGE
==================================================*/

const contactForm =
document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",function(){

setTimeout(()=>{

alert(

"✅ Thank you for contacting me!\n\nI'll get back to you soon."

);

},300);

});

}

/*==================================================
        IMAGE FADE IN
==================================================*/

const images =
document.querySelectorAll("img");

const imageObserver =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="scale(1)";

imageObserver.unobserve(entry.target);

}

});

});

images.forEach((img)=>{

img.style.opacity="0";

img.style.transform="scale(.95)";

img.style.transition="all .8s ease";

imageObserver.observe(img);

});

/*==================================================
        RESIZE OPTIMIZATION
==================================================*/

let resizeTimer;

window.addEventListener("resize",()=>{

clearTimeout(resizeTimer);

resizeTimer=setTimeout(()=>{

console.log("Layout Updated");

},250);

});

/*==================================================
        DISABLE IMAGE DRAG
==================================================*/

document.querySelectorAll("img")
.forEach((img)=>{

img.setAttribute("draggable","false");

});

/*==================================================
        DISABLE RIGHT CLICK
==================================================*/

document.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});

/*==================================================
        PAGE READY
==================================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/*==================================================
        FINISHED
==================================================*/

console.log(

"%c🚀 Portfolio Loaded Successfully",

"color:#3B82F6;font-size:18px;font-weight:bold;"

);

console.log(

"%cDesigned & Developed by Manchala Madhan",

"color:#8B5CF6;font-size:14px;"

);