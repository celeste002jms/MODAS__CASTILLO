// MODAS CASTILLO - Lógica de Interacción
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto de Scroll Suave para el Menú
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href');
            const section = document.querySelector(sectionId);
            
            window.scrollTo({
                top: section.offsetTop - 100, // Espacio para que el header no tape el título
                behavior: 'smooth'
            });
        });
    });

    // 2. Animación de aparición de productos (Scroll Reveal)
    const cards = document.querySelectorAll('.card');
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        // Estilos iniciales para la animación
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // 3. Formateador dinámico de mensajes de WhatsApp
    // (Opcional: Esto permite que si agregas precios, se sumen automáticamente)
    console.log("Modas Castillo: Web Lista para recibir pedidos.");
});