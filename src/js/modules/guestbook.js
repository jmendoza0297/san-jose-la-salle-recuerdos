import { sampleMemories } from '../data/historyData.js';

const STORAGE_KEY = 'lasalle_1967_1969_memories';

export function initGuestbook() {
  const form = document.getElementById('guestbook-form');
  const feed = document.getElementById('guestbook-feed');

  if (!feed) return;

  function loadMemories() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    return [...sampleMemories];
  }

  function saveMemories(memories) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(memories));
    } catch (e) {
      console.warn('LocalStorage write error:', e);
    }
  }

  let memories = loadMemories();

  function renderFeed() {
    feed.innerHTML = memories.map(m => `
      <div class="memory-card" data-id="${m.id}">
        <div class="memory-meta">
          <div class="author-info">
            <h5 class="author-name">${escapeHtml(m.author)}</h5>
            <span class="author-role">${escapeHtml(m.yearRole)}</span>
          </div>
          <span class="memory-date">${escapeHtml(m.date)}</span>
        </div>
        <p class="memory-body">${escapeHtml(m.content)}</p>
        <div class="memory-actions">
          <button class="btn-like ${m.userLiked ? 'liked' : ''}" data-id="${m.id}" aria-label="Dar me emociona">
            <span>❤️</span>
            <span class="like-count">${m.likes}</span>
          </button>
        </div>
      </div>
    `).join('');

    // Adjuntar evento a los botones de me gusta
    feed.querySelectorAll('.btn-like').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const memory = memories.find(m => m.id === id);
        if (memory) {
          if (!memory.userLiked) {
            memory.likes += 1;
            memory.userLiked = true;
          } else {
            memory.likes -= 1;
            memory.userLiked = false;
          }
          saveMemories(memories);
          renderFeed();
        }
      });
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Enviar nuevo recuerdo
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const authorInput = document.getElementById('memory-name');
      const roleInput = document.getElementById('memory-role');
      const contentInput = document.getElementById('memory-text');

      if (!authorInput || !contentInput) return;

      const newMemory = {
        id: 'm_' + Date.now(),
        author: authorInput.value.trim(),
        yearRole: roleInput.value.trim() || 'Exalumno / Amigo Lasallista',
        date: 'Recientemente',
        content: contentInput.value.trim(),
        likes: 1,
        userLiked: true
      };

      memories.unshift(newMemory);
      saveMemories(memories);
      renderFeed();

      // Resetear campos
      form.reset();

      // Mensaje de agradecimiento
      const submitBtn = form.querySelector('.btn-submit-memory');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = '¡Recuerdo publicado con éxito!';
      submitBtn.style.background = '#27ae60';
      submitBtn.style.color = '#fff';

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        submitBtn.style.color = '';
      }, 3000);
    });
  }

  renderFeed();
}
