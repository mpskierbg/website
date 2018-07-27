// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menuBranding.classList.add("show");
    menu.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menuBranding.classList.remove("show");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}
