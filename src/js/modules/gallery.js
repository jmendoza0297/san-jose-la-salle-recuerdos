import { galleryItems } from '../data/historyData.js';
import { openLightbox } from './lightbox.js';

export function initGallery() {
  const grid = document.getElementById('gallery-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('gallery-search');

  if (!grid) return;

  let currentCategory = 'all';
  let searchQuery = '';

  function renderGallery() {
    const filtered = galleryItems.filter(item => {
      const matchCat = currentCategory === 'all' || item.category === currentCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch = !q || 
        item.title.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q) ||
        item.year.toString().includes(q) ||
        item.tags.some(t => t.toLowerCase().includes(q));

      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="no-results" style="grid-column: 1 / -1;">
          <p>No se encontraron fotografías o registros con ese término.</p>
          <p style="font-size: 0.9rem; margin-top: 8px;">Intenta buscar por: "1968", "gol", "desfile", "pirámide", "camerino" o "capitán".</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(item => `
      <article class="photo-card" data-id="${item.id}" tabindex="0" role="button" aria-label="Ver fotografía: ${item.title}">
        <div class="photo-media">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <span class="photo-year-stamp">${item.year}</span>
          <div class="view-badge">
            <span>🔍 Ampliar Recuerdo</span>
          </div>
        </div>
        <div class="photo-details">
          <span class="photo-subtitle">${item.subtitle}</span>
          <h4 class="photo-title">${item.title}</h4>
          <p class="photo-caption">"${item.caption}"</p>
          <div class="photo-tags">
            ${item.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
          </div>
        </div>
      </article>
    `).join('');

    // Adjuntar evento de apertura de modal a cada tarjeta
    grid.querySelectorAll('.photo-card').forEach(card => {
      const id = card.dataset.id;
      const item = galleryItems.find(i => i.id === id);
      const handleOpen = () => {
        if (item) openLightbox(item);
      };
      card.addEventListener('click', handleOpen);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      });
    });
  }

  // Eventos de botones de categoría
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderGallery();
    });
  });

  // Búsqueda en vivo
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderGallery();
    });
  }

  // Render inicial
  renderGallery();
}
