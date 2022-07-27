const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', function() {

    // headerEl.classList.add('nav-open');
    // headerEl.classList.remove('nav-open');
    headerEl.classList.toggle('nav-open');

})

const allLinks = document.querySelectorAll(".main-nav-link");

allLinks.forEach(function(linkEl) {
    linkEl.addEventListener('click', function() {
        headerEl.classList.toggle('nav-open');
    })
})


