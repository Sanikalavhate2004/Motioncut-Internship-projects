burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightnav')

burger.addEventListener('click',()=>{
    rightNav.classList.toggle("visi-class-resp");
    navList.classList.toggle("visi-class-resp");
    navbar.classList.toggle("height-nav-resp");
})