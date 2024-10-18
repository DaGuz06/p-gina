//menu desplegable
document.querySelector('.menu-icon').addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('open');
});

//carrusel
let slideIndex = 0;
mostrarSlides();

function cambiarSlide(n) {
    slideIndex += n;
    mostrarSlides();
}

function mostrarSlides() {
    let slides = document.getElementsByClassName("slide");
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndex].style.display = "block";  
}
