export function openLightbox(item) {
  const modal = document.getElementById('photo-modal');
  if (!modal) return;

  const modalImg = modal.querySelector('.modal-image-col img');
  const modalTitle = modal.querySelector('.modal-title');
  const modalSubtitle = modal.querySelector('.modal-subtitle');
  const modalDesc = modal.querySelector('.modal-description');
  const modalQuote = modal.querySelector('.modal-caption-quote');
  const modalTag = modal.querySelector('.modal-category-tag');
  const dialog = modal.querySelector('.modal-dialog');

  if (modalImg) {
    modalImg.src = item.image;
    modalImg.alt = item.title;
  }
  if (modalTitle) modalTitle.textContent = item.title;
  if (modalSubtitle) modalSubtitle.textContent = `${item.subtitle} • Año ${item.year}`;
  if (modalDesc) modalDesc.textContent = item.description;
  if (modalQuote) modalQuote.textContent = `"${item.caption}"`;
  if (modalTag) modalTag.textContent = `Archivo Histórico SJL — ${item.category.toUpperCase()}`;

  modal.classList.add('active');
  setTimeout(() => {
    if (dialog) dialog.classList.add('dialog-open');
  }, 10);
  document.body.style.overflow = 'hidden';
}

export function initLightbox() {
  const modal = document.getElementById('photo-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close-btn');
  const dialog = modal.querySelector('.modal-dialog');

  function closeModal() {
    if (dialog) dialog.classList.remove('dialog-open');
    setTimeout(() => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }, 200);
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Cerrar al dar click fuera del diálogo
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Cerrar con Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Botón "Identificar compañero"
  const identifyBtn = modal.querySelector('.btn-help-identify');
  if (identifyBtn) {
    identifyBtn.addEventListener('click', () => {
      closeModal();
      const guestbook = document.getElementById('recuerdos');
      if (guestbook) {
        guestbook.scrollIntoView({ behavior: 'smooth' });
        const textInput = document.getElementById('memory-text');
        if (textInput) {
          textInput.focus();
          textInput.placeholder = 'Escribe aquí el nombre del compañero que identificaste y en qué posición de la foto está...';
        }
      }
    });
  }
}
