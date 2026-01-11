document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Menu Mobile Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Chiude il menu quando clicchi su un link
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- 2. Anno automatico nel Footer ---
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();

    // --- 3. Animazione Scroll Reveal (Elementi che appaiono scorrendo) ---
    const revealElements = document.querySelectorAll('.skill-card, .project-card, .about-text');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    };

    // Impostazioni iniziali CSS per gli elementi da animare
    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        el.style.transition = "all 0.6s ease-out";
    });

    window.addEventListener('scroll', revealOnScroll);
    
    // Triggera una volta all'avvio
    revealOnScroll();
});
