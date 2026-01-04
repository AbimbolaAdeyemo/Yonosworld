//hamburger menu logic
console.log("interact.js loaded");
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".site-nav");
console.log("menuBtn:", menuBtn);
console.log("nav:", nav);

if (menuBtn && nav){
    const openMenu = () =>{
        nav.classList.add("open");
        menuBtn.classList.add("open");
        menuBtn.setAttribute("aria-expanded", "true");
        document.body.classList.add("menu-open");
    }
    const closeMenu = () =>{
        nav.classList.remove("open");
        menuBtn.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    }
    const toggleMenu = () =>{
        const isOpen = nav.classList.toggle("open");
        menuBtn.classList.toggle("open", isOpen);
        menuBtn.setAttribute("aria-expanded", String(isOpen));
        document.body.classList.toggle("menu-open", isOpen);
    };

// button click
    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu();
    });
// close nav click
    const navLink = nav.querySelectorAll("a");
    if (navLink.length){
        navLink.forEach((link)=>{
            link.addEventListener("click", closeMenu);
        });
    }
// close outside click
    document.addEventListener("click", (e) => {
        const clickInsideMenu = nav.contains(e.target) || menuBtn.contains(e.target);
        if (!clickInsideMenu) closeMenu();
    });
// close escape key
    document.addEventListener("keydown", (e)=>{
        if (e.key === "Escape") closeMenu();
    });

/*if (!menuBtn || !nav){
    console.log("menu or nav dont exist")
}else{    
}*/

}
