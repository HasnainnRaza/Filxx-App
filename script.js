const global = {
    currentPage: window.location.pathname,
};

// Highlight active link 
function highLightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        if (link.getAttribute('href') === global.currentPage) {
           link.classList.add('active');
        }
    });
}

// Init App 
function init() {
    if (global.currentPage === '/' || global.currentPage === '/index.html') {
        console.log('Home')
    } else if (global.currentPage === '/shows.html') {
        console.log('Shows')
    } else if (global.currentPage === '/movie-details.html') {
        console.log('Movie Details');
    } else if (global.currentPage === '/tv-details.html') {
        console.log('Tv-Details');
    } else if (global.currentPage === '/search.html') {
        console.log('Search Page');
    }
    highLightActiveLink();
}

document.addEventListener('DOMContentLoaded', init)