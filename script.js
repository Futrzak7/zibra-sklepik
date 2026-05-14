// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add some animation on load
window.addEventListener('load', () => {
    const produkty = document.querySelectorAll('.produkt');
    produkty.forEach((produkt, index) => {
        setTimeout(() => {
            produkt.style.opacity = '1';
            produkt.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Initial styles for animation
document.addEventListener('DOMContentLoaded', () => {
    const produkty = document.querySelectorAll('.produkt');
    produkty.forEach(produkt => {
        produkt.style.opacity = '0';
        produkt.style.transform = 'translateY(20px)';
        produkt.style.transition = 'opacity 0.5s, transform 0.5s';
    });
});