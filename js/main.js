var openMenu = document.querySelector('.menu-toggle');
var navList = document.querySelector('.nav-list');
openMenu.addEventListener('click', function () {
    navList.classList.toggle('activeNav');
    console.log("why");
});
