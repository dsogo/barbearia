document.addEventListener('DOMContentLoaded', () => {

    // ===== FUNÇÃO MODAL SEGURA (NÃO QUEBRA MAIS O SITE) =====
    function setupModal(itemId, modalId) {
        const item = document.getElementById(itemId);
        const modal = document.getElementById(modalId);

        // se não existir no HTML, ignora
        if (!item || !modal) return;

        const closeBtn = modal.querySelector('.close-modal');
        if (!closeBtn) return;

        item.addEventListener('click', () => {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            setTimeout(() => {
                modal.style.opacity = '1';
                const content = modal.querySelector('.modal-content');
                if (content) content.style.transform = 'scale(1)';
            }, 10);
        });

        closeBtn.addEventListener('click', () => closeModal(modal));

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    }

    function closeModal(modal) {
        if (!modal) return;

        modal.style.opacity = '0';
        const content = modal.querySelector('.modal-content');
        if (content) content.style.transform = 'scale(0.7)';

        document.body.style.overflow = 'auto';

        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    // ===== MODAIS BARBA =====
    setupModal('barboterapia-item', 'barboterapia-modal');
    setupModal('baldo-item', 'baldo-modal');
    setupModal('espartana-item', 'espartana-modal');
    setupModal('lenhador-item', 'lenhador-modal');
    setupModal('quadrada-item', 'quadrada-modal');
    setupModal('serrada-item', 'serrada-modal');
    setupModal('Tidy-Carefree-item', 'Tidy-Carefree-modal');
    setupModal('Cavanhaque-item', 'Cavanhaque-modal');
    setupModal('Vaporizador-item', 'Vaporizador-modal');

    // ===== MODAIS CORTE =====
    setupModal('degrade-item', 'degrade-modal');
    setupModal('social-item', 'social-modal');
    setupModal('Navalha-item', 'Navalha-modal');
    setupModal('Tesoura-item', 'Tesoura-modal');
    setupModal('Fade-item', 'Fade-modal');
    setupModal('Freestyle-item', 'Freestyle-modal');
    setupModal('Blindado-item', 'Blindado-modal');
    setupModal('Sombreamento-Nudred-item', 'Sombreamento-Nudred-modal');
    setupModal('V-item', 'V-modal');
    setupModal('Faux-Hawk-item', 'Faux-Hawk-modal');
    setupModal('Pompoador-item', 'Pompoador-modal');
    setupModal('Razor-Part-item', 'Razor-Part-modal');
    setupModal('Americano-item', 'Americano-modal');
    setupModal('Flat-Top-item', 'Flat-Top-modal');
    setupModal('Dimil-item', 'Dimil-modal');
    setupModal('Franja-item', 'Franja-modal');

    // ===== MENU MOBILE =====
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.querySelector('.navbar');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // fechar menu ao clicar link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks) navLinks.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
        });
    });

    // ===== NAVBAR SCROLL =====
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (navbar) {
            if (currentScroll > 100) {
                navbar.style.background = 'rgba(26,26,26,0.98)';
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                navbar.style.background = 'rgba(26,26,26,0.95)';
                navbar.style.boxShadow = 'none';
            }

            if (currentScroll > lastScroll) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
        }

        lastScroll = currentScroll;
    });

    // ===== ANIMAÇÕES SCROLL =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.about, .services, .cta').forEach(section => {
        observer.observe(section);
    });

    // ===== PARALLAX HERO =====
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        if (!hero) return;
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });

    // ===== ANIMAÇÃO CARDS =====
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });

    // ===== EFEITO BOTÃO =====
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            button.style.setProperty('--x', `${x}px`);
            button.style.setProperty('--y', `${y}px`);
        });
    });

});
