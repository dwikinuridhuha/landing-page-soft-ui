let openMenu = document.querySelector('.menu-toggle');
let navList = document.querySelector('.nav-list');

openMenu.addEventListener('click', () => {
    navList.classList.toggle('activeNav');
    console.log("why");
});