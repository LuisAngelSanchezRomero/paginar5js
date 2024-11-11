// inicio.js

// Función que mueve el carrusel
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function moveCarousel() {
    // Cambiar la posición del carrusel
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;  // Reiniciar el carrusel cuando llega al final
    }

    const newTransformValue = -currentIndex * 80;
    document.querySelector('.carousel').style.transform = `translateX(${newTransformValue}%)`;
}

// Iniciar el carrusel con un intervalo de 3 segundos
setInterval(moveCarousel, 3000);