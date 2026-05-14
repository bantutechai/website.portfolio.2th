// Alternar tema claro/escuro
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Verifica preferência salva no localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
} else {
    body.classList.remove('dark');
}

themeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Menu mobile (hambúrguer)
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav ul');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Fechar menu ao clicar num link (mobile)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// Formulário de contacto com feedback simples
const contactForm = document.getElementById('contactForm');
const feedbackPara = document.getElementById('form-feedback');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        feedbackPara.innerHTML = '<i class="fas fa-check-circle" style="color: var(--laranja);"></i> Mensagem enviada! Entraremos em contacto breve.';
        feedbackPara.style.color = 'var(--laranja)';
        contactForm.reset();
        setTimeout(() => {
            feedbackPara.innerHTML = '';
        }, 4000);
    });
}

// Scroll suave para os links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === "#" || targetId === "") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
