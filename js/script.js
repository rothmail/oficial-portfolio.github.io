document.getElementById('darkModeToggle').addEventListener('click', () => {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme');
    root.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});

const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');
let position = 0;

nextBtn.addEventListener('click', () => {
    position -= 270;
    track.style.transform = `translateX(${position}px)`;
});

prevBtn.addEventListener('click', () => {
    position += 270;
    track.style.transform = `translateX(${position}px)`;
});

gsap.registerPlugin(ScrollTrigger);
gsap.from("#logo", { duration: 1, y: -50, opacity: 0 });
gsap.from("#sobre img", { duration: 1, x: -100, opacity: 0, scrollTrigger: "#sobre" });
gsap.from("#projetos .card", {
    scrollTrigger: "#projetos",
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2
});
gsap.from("#contato form", { duration: 1, y: 50, opacity: 0, scrollTrigger: "#contato" });

emailjs.init("SEU_USER_ID_AQUI");
document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();
    emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', this)
        .then(() => {
            document.getElementById('mensagem-status').textContent = 'Mensagem enviada com sucesso!';
            this.reset();
        }, () => {
            document.getElementById('mensagem-status').textContent = 'Erro ao enviar mensagem. Tente novamente.';
        });
});

tsParticles.load("tsparticles", {
    fullScreen: { enable: true, zIndex: -1 },
    particles: {
        number: { value: 60 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
            value: 0.5,
            random: true,
            anim: { enable: false }
        },
        size: {
            value: { min: 1, max: 3 },
            random: true
        },
        move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            outModes: { default: "bounce" }
        },
        links: {
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.3,
            width: 1
        }
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" }
        },
        modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 }
        }
    },
    background: {
        color: "#1e1e2f"
    }
});