// ===================================
// Mobile Nav Toggle
// ===================================

const navToggle = document.getElementById("navToggle");
const navLinksEl = document.getElementById("navLinks");

if (navToggle && navLinksEl) {

    navToggle.addEventListener("click", () => {
        const isOpen = navLinksEl.classList.toggle("open");
        navToggle.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu after tapping a link
    navLinksEl.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinksEl.classList.remove("open");
            navToggle.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// ===================================
// Active Navbar Highlight
// ===================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});

// Trigger on page load
window.dispatchEvent(new Event("scroll"));

// ===================================
// Fade-In Animation on Scroll
// ===================================

const hiddenElements = document.querySelectorAll(
    ".hero, .about, .skills, .projects, .certificates, .contact"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

hiddenElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});
