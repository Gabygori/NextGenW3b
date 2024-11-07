let index = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function showNextImage() {
  images[index].classList.remove('imagen-activa'); // Oculta la imagen actual
  index = (index + 1) % totalImages; // Cambia al siguiente índice
  images[index].classList.add('imagen-activa'); // Muestra la siguiente imagen
}

// Cambia de imagen cada 3 segundos
setInterval(showNextImage, 3000);
