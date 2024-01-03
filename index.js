const navBtn = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");
const navList = document.querySelector(".nav-list");

navBtn.addEventListener('click', ()=>{
    navBtn.classList.toggle("active");
    navList.classList.toggle("active");
});

navList.addEventListener("click", (event)=>{
    const item = event.target.innerText;
    if(item === "About" || item === "Experience" || item === "Projects" || item === "Contact"){
        navBtn.classList.toggle("active");
        navList.classList.toggle("active");
    }
});

var lastScrolleTop = 75;
window.addEventListener("scroll", ()=>{
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(scrollTop > lastScrolleTop){
        navBar.style.top = "-75px";
        navBar.classList.remove("box-shadow");
    }
    else {
        navBar.style.top = 0;
        navBar.classList.add("box-shadow");
    }
    if(scrollTop == 0) navBar.classList.remove("box-shadow");
    if(scrollTop > 40) lastScrolleTop = scrollTop;
});


import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

var swiper = new Swiper('.projects-container', {
    // spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
    invert: false,
    },
    // autoHeight: true,
    pagination: {
    el: '.project-pagination',
    clickable: true,
    }
});