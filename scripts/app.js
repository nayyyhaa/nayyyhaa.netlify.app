/*nav bar*/
let hamburgerBars = document.querySelector('.fa');
let navItems = document.querySelector(".nav-items");
let links = navItems.querySelectorAll("a");

/*Hamburger*/
hamburgerBars.addEventListener("click", () => {
    navItems.classList.toggle("show");
    if(hamburgerBars.className == "fa fa-bars")
        hamburgerBars.className = "fa fa-times";
    else
        hamburgerBars.className = "fa fa-bars";
})
links.forEach(link => {
    link.addEventListener("click", () =>{
        navItems.classList.toggle("show");
        if(hamburgerBars.className == "fa fa-bars")
        hamburgerBars.className = "fa fa-times";
    else
        hamburgerBars.className = "fa fa-bars";
    })
})