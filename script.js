/*==========================================
   AKAAL COMPUTER POINT v2.0
   Premium JavaScript
==========================================*/

// ===========================
// Mobile Menu
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    menuBtn.innerHTML = navbar.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});


// Close menu after clicking any link

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    });

});


// ===========================
// Sticky Header
// ===========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.padding = "12px 0";
        header.style.boxShadow =
        "0 15px 35px rgba(0,0,0,.08)";

    } else {

        header.style.padding = "18px 0";
        header.style.boxShadow = "none";

    }

});


// ===========================
// Scroll Top Button
// ===========================

const scrollBtn =
document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "flex";

    } else {

        scrollBtn.style.display = "none";

    }

});


scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ===========================
// Active Navbar Link
// ===========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop - 120;

const sectionHeight = section.clientHeight;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ===========================
// Smooth Fade Animation
// ===========================

const revealItems =
document.querySelectorAll(

".service-card,.why-card,.counter-card,.review-card,.process-card"

);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
});

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(50px)";

item.style.transition=".7s ease";

observer.observe(item);

});


// ===========================
// Counter Animation
// ===========================

const counters =
document.querySelectorAll(".counter-card h2");

const speed = 150;

counters.forEach(counter=>{

const update = ()=>{

const target =
+counter.innerText.replace("+","");

const count =
+counter.innerText.replace("+","");

const increment =
target/speed;

if(count<target){

counter.innerText =
Math.ceil(count+increment)+"+";

setTimeout(update,20);

}

}

update();

});/*==========================================
        FAQ ACCORDION
==========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const answer = item.querySelector("p");

    answer.style.display = "none";

    item.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                other.querySelector("p").style.display = "none";
                other.classList.remove("active");

            }

        });

        if (answer.style.display === "block") {

            answer.style.display = "none";
            item.classList.remove("active");

        } else {

            answer.style.display = "block";
            item.classList.add("active");

        }

    });

});


/*==========================================
        REVIEW AUTO SLIDER
==========================================*/

const reviewSlider = document.querySelector(".review-slider");

if(reviewSlider){

let scrollAmount = 0;

setInterval(()=>{

scrollAmount += 360;

if(scrollAmount >= reviewSlider.scrollWidth){

scrollAmount = 0;

}

reviewSlider.scrollTo({

left:scrollAmount,

behavior:"smooth"

});

},4000);

}


/*==========================================
        PARALLAX HERO
==========================================*/

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

if(hero){

hero.style.backgroundPositionY=
window.scrollY*0.3+"px";

}

});


/*==========================================
        FLOATING GLASS CARD
==========================================*/

const glassCard=document.querySelector(".glass-card");

if(glassCard){

setInterval(()=>{

glassCard.classList.toggle("floating");

},2500);

}


/*==========================================
        BUTTON RIPPLE EFFECT
==========================================*/

document.querySelectorAll(".primary-btn,.header-btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const x=e.clientX-this.offsetLeft;

const y=e.clientY-this.offsetTop;

circle.style.left=x+"px";

circle.style.top=y+"px";

circle.className="ripple";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});


/*==========================================
        LOADING ANIMATION
==========================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/*==========================================
        YEAR AUTO UPDATE
==========================================*/

const year=document.querySelector("#year");

if(year){

year.innerHTML=new Date().getFullYear();

}


/*==========================================
        CONSOLE MESSAGE
==========================================*/

console.log("%cAkaal Computer Point",
"font-size:24px;color:#2563EB;font-weight:bold;");

console.log("%cWebsite Designed with ❤️",
"font-size:16px;color:#06B6D4;");
