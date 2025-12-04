// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Active navbar link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('typed');
    if (!el) return;

    const text = 'WEB & UI DESIGNER!';
    const typeSpeed = 90;     // ms per character typing
    const eraseSpeed = 40;    // ms per character erasing
    const pauseAfter = 1400;  // pause after full text typed
    let index = 0;
    let erasing = false;

    function tick() {
        if (!erasing) {
            el.textContent = text.slice(0, index);
            if (index < text.length) {
                index++;
                setTimeout(tick, typeSpeed);
            } else {
                erasing = true;
                setTimeout(tick, pauseAfter);
            }
        } else {
            el.textContent = text.slice(0, index);
            if (index > 0) {
                index--;
                setTimeout(tick, eraseSpeed);
            } else {
                erasing = false;
                setTimeout(tick, 500);
            }
        }
    }

    tick();
});
