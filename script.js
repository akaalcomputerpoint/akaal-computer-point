/*=====================================
        DOM ELEMENTS
=====================================*/

const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const topBtn = document.getElementById("topBtn");
const progressBar = document.querySelector(".progress-bar");

/*=====================================
        STICKY NAVBAR
=====================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});

/*=====================================
        MOBILE MENU
=====================================*/

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("open");

});

/*=====================================
        CLOSE MENU
=====================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.classList.remove("open");

    });

});

/*=====================================
        BACK TO TOP
=====================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/*=====================================
      SCROLL PROGRESS BAR
=====================================*/

window.addEventListener("scroll", () => {

    let scrollTop = window.scrollY;

    let height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    let progress =
        (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});/*=====================================
      ACTIVE NAVIGATION
=====================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=====================================
      COUNTER ANIMATION
=====================================*/

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 120;

        const updateCounter = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const section = document.querySelector(".review-counter");

    if (!section) return;

    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight && !counterStarted) {

        counterStarted = true;

        startCounter();

    }

});

/*=====================================
      SCROLL REVEAL
=====================================*/

const revealItems = document.querySelectorAll(

".service-card,.about-card,.why-card,.gallery-item,.review-card,.contact-form,.info-box"

);

const revealOnScroll = () => {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            item.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*=====================================
        TYPING EFFECT
=====================================*/

const typingText = document.querySelector(".typing");

if (typingText) {

    const words = [

        "Cyber Cafe",

        "PAN Card",

        "Passport",

        "Printing",

        "Digital Services"

    ];

    let wordIndex = 0;
    let charIndex = 0;

    function typeWord() {

        if (charIndex < words[wordIndex].length) {

            typingText.textContent += words[wordIndex].charAt(charIndex);

            charIndex++;

            setTimeout(typeWord, 80);

        } else {

            setTimeout(eraseWord, 1500);

        }

    }

    function eraseWord() {

        if (charIndex > 0) {

            typingText.textContent = words[wordIndex].substring(0, charIndex - 1);

            charIndex--;

            setTimeout(eraseWord, 40);

        } else {

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

            setTimeout(typeWord, 300);

        }

    }

    typeWord();

}/*=====================================
        GALLERY LIGHTBOX
=====================================*/

const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");

galleryItems.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImg.src = img.src;

    });

});

if(closeBtn){

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

}

if(lightbox){

lightbox.addEventListener("click", e => {

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

});

}

/*=====================================
      SIMPLE REVIEW SLIDER
=====================================*/

const reviewSlider = document.querySelector(".review-slider");

if(reviewSlider){

let scrollAmount = 0;

setInterval(()=>{

scrollAmount += 380;

if(scrollAmount >= reviewSlider.scrollWidth){

scrollAmount = 0;

}

reviewSlider.scrollTo({

left:scrollAmount,

behavior:"smooth"

});

},4000);

}

/*=====================================
        CUSTOM CURSOR
=====================================*/

const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

document.addEventListener("mousemove",(e)=>{

if(dot && outline){

dot.style.left=e.clientX+"px";
dot.style.top=e.clientY+"px";

outline.style.left=e.clientX+"px";
outline.style.top=e.clientY+"px";

}

});

/*=====================================
        FADE IN ANIMATION
=====================================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(

".service-card,.gallery-item,.review-card,.about-card,.why-card,.stat-card"

).forEach(el=>observer.observe(el));

/*=====================================
        CURRENT YEAR
=====================================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/*=====================================
        PRELOADER
=====================================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.classList.add("hide");

setTimeout(()=>{

loader.remove();

},600);

}

});

/*=====================================
        CONSOLE MESSAGE
=====================================*/

console.log(
"Akaal Computer Point Website Loaded Successfully 🚀"
);
