// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
        }
    });
}, observerOptions);

// Apply animations to cards and sections
document.querySelectorAll('.card, .section').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px) scale(0.95)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(element);
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(90deg, rgba(18, 18, 18, 0.98) 0%, rgba(30, 30, 30, 0.98) 50%, rgba(18, 18, 18, 0.98) 100%)';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'linear-gradient(90deg, rgba(18, 18, 18, 0.95) 0%, rgba(30, 30, 30, 0.95) 50%, rgba(18, 18, 18, 0.95) 100%)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    }
});

// Typing effect for hero subtitle (enhanced)
const heroSubtitle = document.querySelector('.hero p:nth-child(2)');
const text = heroSubtitle.textContent;
heroSubtitle.innerHTML = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroSubtitle.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80); // Slightly faster
    } else {
        // Add blinking cursor after typing
        heroSubtitle.innerHTML += '<span class="cursor">|</span>';
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Particle effect for hero (simple)
const hero = document.querySelector('.hero');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    hero.appendChild(particle);
}

// Add CSS for particles dynamically
const style = document.createElement('style');
style.textContent = `
    .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        animation: particleFloat linear infinite;
    }
    @keyframes particleFloat {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
    }
    .cursor {
        animation: blink 1s infinite;
        color: #ff6b6b;
    }
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
`;
document.head.appendChild(style);

// Form submission handler for AJAX
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const successMessage = document.getElementById('success-message');

    fetch('https://formspree.io/f/mykkkoyk', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            successMessage.style.display = 'block';
            form.reset();
            // Hide message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        } else {
            alert('There was a problem submitting your form. Please try again.');
        }
    }).catch(error => {
        alert('There was a problem submitting your form. Please try again.');
    });
});