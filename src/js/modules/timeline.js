import { yearsData } from '../data/historyData.js';

export function initTimeline() {
  const container = document.getElementById('year-content-area');
  const buttons = document.querySelectorAll('.year-btn');
  if (!container || !buttons.length) return;

  function renderYear(year) {
    const data = yearsData[year];
    if (!data) return;

    // Renderizado con animación
    container.style.opacity = '0';
    container.style.transform = 'translateY(10px)';

    setTimeout(() => {
      container.innerHTML = `
        <div class="year-header">
          <span class="tag-year">Año Histórico ${data.year}</span>
          <h3 class="year-title" style="margin-top: 10px;">${data.title}</h3>
          <p class="year-subtitle">${data.subtitle}</p>
        </div>

        <p class="year-narrative">${data.heroText}</p>

        <div class="milestones-grid">
          ${data.milestones.map(m => `
            <div class="milestone-card">
              <div class="milestone-icon">
                ${m.icon === 'trophy' ? '🏆' : m.icon === 'star' ? '⭐' : m.icon === 'flag' ? '🚩' : m.icon === 'music' ? '🎺' : '🎖️'}
              </div>
              <h4 class="milestone-title">${m.title}</h4>
              <p class="milestone-desc">${m.desc}</p>
            </div>
          `).join('')}
        </div>

        <div class="stats-bar">
          <div class="stat-item">
            <div class="stat-value">${data.stats.partidosJugados}</div>
            <div class="stat-name">Partidos Jugados</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${data.stats.victorias}</div>
            <div class="stat-name">Victorias Oficiales</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${data.stats.golesFavor}</div>
            <div class="stat-name">Goles a Favor</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${data.stats.presentaciones}</div>
            <div class="stat-name">Desfiles & Galas</div>
          </div>
        </div>
      `;

      container.style.transition = 'all 0.35s ease';
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
    }, 200);
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const year = parseInt(btn.dataset.year, 10);
      renderYear(year);
    });
  });

  // Carga inicial: 1968 (Año de la consagración)
  renderYear(1968);
}
