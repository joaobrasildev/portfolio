// ========== NAVBAR SCROLL ==========
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ========== MOBILE MENU ==========
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close mobile menu on link click
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenuBtn.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

// ========== SCROLL REVEAL ==========
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
            }
        });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
);

document.querySelectorAll(".section .container > *").forEach((el) => {
    revealObserver.observe(el);
});

// Timeline items
const timelineObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
);

document.querySelectorAll(".timeline-item").forEach((item) => {
    timelineObserver.observe(item);
});

// ========== ACTIVE NAV LINK ==========
const sections = document.querySelectorAll("section[id]");
const navLinksAll = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinksAll.forEach((link) => {
        link.style.color = "";
        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "var(--purple-light)";
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
