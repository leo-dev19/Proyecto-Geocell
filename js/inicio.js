   // Cambiar fondo del header cada 2 segundos
   const bannerImages = [
    'url("../imgs/rep111.jpg")',
    'url("../imgs/reparacion2.jpg")',
    'url("../imgs/rep4444.jpg")',
    // Agrega más rutas de imágenes según sea necesario
];

let currentImageIndex = 0;
const banner = document.getElementById('banner');

// Función para cambiar el fondo del header cada 2 segundos
function changeBannerImage() {
    banner.style.backgroundImage = bannerImages[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
}

// Cambiar la imagen inicial
changeBannerImage();

// Establecer la repetición del cambio de imagen cada 2000 milisegundos (2 segundos)
setInterval(changeBannerImage, 2000);

/*-----------------------------------------------------------------------*/


// Agrega esto al final de tu archivo inicio.js
document.addEventListener('DOMContentLoaded', function () {
    // Función para obtener la hora actual en formato HH:MM:SS
    function obtenerHoraActual() {
        const fecha = new Date();
        const horas = fecha.getHours().toString().padStart(2, '0');
        const minutos = fecha.getMinutes().toString().padStart(2, '0');
        const segundos = fecha.getSeconds().toString().padStart(2, '0');
        return `${horas}:${minutos}:${segundos}`;
    }

    // Función para actualizar la hora en el elemento flotante
    function actualizarHoraFlotante() {
        const elementoHoraFlotante = document.getElementById('hora-flotante');
        if (elementoHoraFlotante) {
            elementoHoraFlotante.textContent = obtenerHoraActual();
        }
    }

    // Crear el elemento flotante
    const horaFlotante = document.createElement('div');

    // Agregar el elemento flotante al cuerpo del documento
    document.body.appendChild(horaFlotante);

    // Actualizar la hora inicial en el elemento flotante
    actualizarHoraFlotante();

    // Establecer la repetición de la actualización cada 1000 milisegundos (1 segundo)
    setInterval(actualizarHoraFlotante, 1000);
});





