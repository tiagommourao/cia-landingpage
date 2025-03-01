// Theme Switcher
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference, if any
const currentTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme based on saved preference or system preference
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggle.checked = true;
    }
} else if (prefersDarkScheme.matches) {
    body.setAttribute('data-theme', 'dark');
    themeToggle.checked = true;
}

// Listen for toggle changes
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    navigation.classList.toggle('active');
    
    // Basic styling for mobile navigation
    if (navigation.classList.contains('active')) {
        navigation.style.display = 'flex';
        navigation.style.flexDirection = 'column';
        navigation.style.position = 'absolute';
        navigation.style.top = '80px';
        navigation.style.left = '0';
        navigation.style.width = '100%';
        navigation.style.backgroundColor = 'var(--background)';
        navigation.style.padding = '20px';
        navigation.style.boxShadow = '0 5px 10px var(--shadow)';
        
        const navItems = navigation.querySelectorAll('li');
        navItems.forEach(item => {
            item.style.margin = '10px 0';
        });
    } else {
        navigation.style.display = '';
        navigation.style.flexDirection = '';
        navigation.style.position = '';
        navigation.style.top = '';
        navigation.style.left = '';
        navigation.style.width = '';
        navigation.style.backgroundColor = '';
        navigation.style.padding = '';
        navigation.style.boxShadow = '';
        
        const navItems = navigation.querySelectorAll('li');
        navItems.forEach(item => {
            item.style.margin = '';
        });
    }
});

// Form Submit Event
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Formulário enviado com sucesso! Em breve entraremos em contato.');
        this.reset();
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navigation.classList.contains('active')) {
                navigation.classList.remove('active');
                navigation.style.display = '';
                navigation.style.flexDirection = '';
                navigation.style.position = '';
                navigation.style.top = '';
                navigation.style.left = '';
                navigation.style.width = '';
                navigation.style.backgroundColor = '';
                navigation.style.padding = '';
                navigation.style.boxShadow = '';
                
                const navItems = navigation.querySelectorAll('li');
                navItems.forEach(item => {
                    item.style.margin = '';
                });
            }
        }
    });
});
