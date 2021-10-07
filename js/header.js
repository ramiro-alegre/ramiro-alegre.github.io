//Code from: https://codepen.io/inavarrov/pen/akijr
// method
export function toggleMenu(event) {
    this.classList.toggle('is-active');
    document.querySelector(".navbar").classList.toggle("navbar__active");
    event.preventDefault();
}


export function optionsMenu(e) {
    const menu = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const options = document.querySelectorAll('.seccion');
    options.forEach(option => {
        option.addEventListener('click', () => {
            hamburger.classList.toggle('is-active');
            menu.classList.toggle('navbar__active');
        })
    })
}