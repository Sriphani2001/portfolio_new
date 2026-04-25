import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createIcons, Github, Linkedin, ExternalLink, MessageCircle, FileText } from 'lucide';

gsap.registerPlugin(ScrollTrigger);

// Initialize Lucide Icons
createIcons({
  icons: {
    Github,
    Linkedin,
    ExternalLink,
    MessageCircle,
    FileText
  }
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Cursor blob movement
const blobs = document.querySelectorAll('.gradient-blob');
document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  gsap.to(blobs[0], {
    x: clientX * 0.05,
    y: clientY * 0.05,
    duration: 1,
    ease: 'power2.out'
  });
  gsap.to(blobs[1], {
    x: -clientX * 0.03,
    y: -clientY * 0.03,
    duration: 1.5,
    ease: 'power2.out'
  });
});

// Animations
window.addEventListener('DOMContentLoaded', () => {
  // Hero Section
  const heroTl = gsap.timeline();
  heroTl.from('.hero-content h4', { opacity: 0, y: 20, duration: 0.8 })
        .from('.hero-content h1', { opacity: 0, y: 30, duration: 0.8 }, '-=0.4')
        .from('.hero-content p', { opacity: 0, y: 20, duration: 0.8 }, '-=0.4')
        .from('.hero-content div', { opacity: 0, y: 20, duration: 0.8 }, '-=0.4');

  // Reveal animations for sections
  const revealSections = document.querySelectorAll('.section');
  revealSections.forEach(section => {
    gsap.from(section.querySelectorAll('.glass-card, .timeline-item, .skill-category'), {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out'
    });
  });

  // Background Grid Animation
  gsap.to('.grid-bg', {
    backgroundPosition: '50px 50px',
    duration: 10,
    repeat: -1,
    ease: 'linear'
  });
});
