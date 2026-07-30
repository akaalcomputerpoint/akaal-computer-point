/* ==========================================
   AKAAL COMPUTER POINT
   Premium Website JavaScript
========================================== */

// Navbar Shadow on Scroll

window.addEventListener("scroll", function(){

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#0b1120";
header.style.boxShadow="0 5px 20px rgba(0,0,0,.4)";

}else{

header.style.background="#111827";
header.style.boxShadow="none";

}

});


// Fade Animation

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition=".7s";

observer.observe(card);

});


// Scroll To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.background="#22c55e";
topBtn.style.color="#fff";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// Welcome Message

window.onload=function(){

setTimeout(()=>{

alert("🙏 Welcome to Akaal Computer Point");

},800);

};