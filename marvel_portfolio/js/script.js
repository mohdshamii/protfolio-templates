document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle Logic
    const themeBtn = document.getElementById("theme-toggle");
    const body = document.body;

    themeBtn.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        body.classList.toggle("dark-mode");
    });

    // Particle Configuration (Glowing Anti-Gravity Debris)
    tsParticles.load("tsparticles", {
        fpsLimit: 60,
        particles: {
            color: {
                value: ["#00f3ff", "#ffffff", "#0066ff"]
            },
            links: {
                enable: false,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "out",
                },
                random: true,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: { min: 0.1, max: 0.8 },
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1
                }
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 4 },
                animation: {
                    enable: true,
                    speed: 2,
                    minimumValue: 0.1
                }
            },
            shadow: {
                enable: true,
                color: "#00f3ff",
                blur: 10
            }
        },
        detectRetina: true,
    });

    // Typing Effect
    const typedTextSpan = document.querySelector(".typed-text");
    const textArray = ["DATA ANALYST", "ML ENGINEER", "AI ARCHITECT", "SYSTEM OPTIMIZER"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    // Start typing effect after a short delay
    setTimeout(type, 1500);

    // GSAP Entrance Animations
    gsap.set(".glass-card", { opacity: 0, y: 50, scale: 0.95 });
    gsap.set(".hud-corner", { opacity: 0, scale: 0.8 });
    gsap.set(".hud-ring", { opacity: 0, scale: 0.5 });
    
    const tl = gsap.timeline();

    tl.to(".hud-corner", {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out"
    })
    .to(".hud-ring", {
        opacity: 0.2,
        scale: 1,
        duration: 2,
        ease: "power2.out"
    }, "-=1")
    .to(".glass-card", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)"
    }, "-=1.5");

    // 3D Parallax Mouse Move Effect
    const heroBg = document.getElementById("hero-bg");
    const hudOverlay = document.getElementById("hud-overlay");
    const glassCard = document.querySelector(".glass-card");

    document.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;

        gsap.to(heroBg, {
            x: x * 1.5,
            y: y * 1.5,
            ease: "power1.out",
            duration: 1
        });

        gsap.to(hudOverlay, {
            x: x * -0.5,
            y: y * -0.5,
            ease: "power1.out",
            duration: 1
        });

        gsap.to(glassCard, {
            x: x * -0.2,
            y: y * -0.2,
            rotationY: x * 0.2,
            rotationX: y * 0.2,
            ease: "power1.out",
            duration: 1,
            transformPerspective: 1000
        });
    });
});
