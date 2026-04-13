// Mouse Move Light Animation
const mouseLight = document.getElementById('mouse-light');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Smooth follow effect using requestAnimationFrame for better performance
    requestAnimationFrame(() => {
        mouseLight.style.left = `${x}px`;
        mouseLight.style.top = `${y}px`;
    });
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Navigation Bar Background Change on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        nav.style.padding = '0.5rem 5%';
    } else {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        nav.style.padding = '1rem 5%';
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.project-card, .exp-item, .module-group, .skill-category');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;

        if (elTop < triggerBottom) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// Initial setup for reveal elements
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
});

window.addEventListener('scroll', revealOnScroll);
// Initial check
revealOnScroll();

// Console message for verification
console.log("Naseem Migdadi's Portfolio - Dark Green Theme Loaded.");
