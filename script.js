// ===============================
// AKAAL COMPUTER POINT
// script.js
// ===============================

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Active Navbar on Scroll
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if(window.scrollY > 80){
        header.style.padding = "5px 0";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.12)";
    }else{
        header.style.padding = "";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.08)";
    }

});

// Fade Animation
const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=".6s";

observer.observe(card);

});
