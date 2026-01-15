// Esperar a que el contenido esté cargado
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleccionamos todos los elementos de la lista (li) y los videos (iframe)
    const elementsToAnimate = document.querySelectorAll('li, iframe');

    // Añadimos la clase inicial 'reveal' a todos ellos
    elementsToAnimate.forEach(el => el.classList.add('reveal'));

    // Configuración del observador
    const observerOptions = {
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento entra en vista, le añadimos la clase 'active'
                entry.target.classList.add('active');
                // Una vez que aparece, dejamos de observarlo para mejorar el rendimiento
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Decimos al observador que vigile cada elemento
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});