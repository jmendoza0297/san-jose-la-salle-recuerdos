// Importación de estilos SCSS compilados por Vite
import '../scss/main.scss';

// Módulos interactivos
import { initTimeline } from './modules/timeline.js';
import { initGallery } from './modules/gallery.js';
import { initLineup } from './modules/lineup.js';
import { initGuestbook } from './modules/guestbook.js';
import { initLightbox } from './modules/lightbox.js';
import { initSoundPlayer } from './modules/soundPlayer.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de componentes
  initTimeline();
  initGallery();
  initLineup();
  initGuestbook();
  initLightbox();
  initSoundPlayer();

  // Animación del contador de gloria en el Hero
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(el => {
    const target = parseInt(el.textContent, 10);
    if (!isNaN(target)) {
      el.textContent = '0';
      let current = 0;
      const step = Math.ceil(target / 30);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          el.textContent = target.toString();
          clearInterval(timer);
        } else {
          el.textContent = current.toString();
        }
      }, 40);
    }
  });

  // Resaltado de navegación al hacer scroll
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

  console.log('San José La Salle (1967-1969) - Plataforma de Recuerdos activa.');
});
