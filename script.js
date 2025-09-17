// Jalankan setelah DOM siap
document.addEventListener("DOMContentLoaded", () => {
  // 1. AOS
  AOS.init();

  // 2. Navbar background saat scroll
  const navbar = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-white/80", "backdrop-blur-md", "shadow");
    } else {
      navbar.classList.remove("bg-white/80", "backdrop-blur-md", "shadow");
    }
  });

  // 3. Highlight link navbar saat scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("text-blue-700", "font-semibold");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("text-blue-700", "font-semibold");
      }
    });
  });

  // 4. Klik link navbar kasih efek aktif
  navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // cegah default scroll
    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    const offset = 80; // tinggi navbar
    const topPos = targetSection.offsetTop - offset;

    window.scrollTo({
      top: topPos,
      behavior: "smooth"
    });
  });
});

  // 5. Particles.js
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#000000" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#000000",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 8, duration: 2, opacity: 0.8 },
        repulse: { distance: 100 },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });
});
