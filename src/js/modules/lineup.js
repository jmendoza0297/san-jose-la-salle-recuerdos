import { lineup1968 } from '../data/historyData.js';

export function initLineup() {
  const pitch = document.getElementById('pitch-players');
  const spotlightContainer = document.getElementById('player-spotlight');

  if (!pitch || !spotlightContainer) return;

  // Posiciones relativas en la cancha (%)
  const coordinates = {
    1: { x: 9, y: 50 },    // Paredes (Arquero)
    2: { x: 26, y: 18 },   // Silva (LD)
    3: { x: 23, y: 39 },   // González (Central)
    4: { x: 23, y: 61 },   // Martínez (Central)
    6: { x: 26, y: 82 },   // Caicedo (LI)
    5: { x: 45, y: 38 },   // Morales (Contención)
    8: { x: 45, y: 62 },   // Barreto (Mixto)
    7: { x: 74, y: 18 },   // Rivas (Extremo D)
    9: { x: 80, y: 39 },   // Mendoza (9)
    10: { x: 80, y: 61 },  // Salcedo (10)
    11: { x: 74, y: 82 }   // Valdés (Extremo I)
  };

  function selectPlayer(player) {
    // Actualizar pines
    document.querySelectorAll('.player-pin').forEach(pin => {
      if (parseInt(pin.dataset.number, 10) === player.number) {
        pin.classList.add('active');
      } else {
        pin.classList.remove('active');
      }
    });

    // Actualizar ficha
    spotlightContainer.innerHTML = `
      <div class="spotlight-header">
        <div class="player-badge-number">${player.number}</div>
        <div class="player-headline">
          <h4 class="player-name">${player.name}</h4>
          <span class="player-position">${player.pos}</span>
        </div>
      </div>
      <p class="spotlight-anecdote">"${player.desc}"</p>
      <div class="coach-box">
        <div class="coach-label">Estrategia & Dirección Técnica</div>
        <div class="coach-name">${lineup1968.coach}</div>
      </div>
    `;
  }

  // Generar pines en la cancha
  pitch.innerHTML = lineup1968.players.map(p => {
    const coord = coordinates[p.number] || { x: 50, y: 50 };
    return `
      <button class="player-pin" data-number="${p.number}" style="left: ${coord.x}%; top: ${coord.y}%;" title="${p.name} - ${p.pos}">
        ${p.number}
        <span class="pin-name-tooltip">${p.name.split(' ')[0]}</span>
      </button>
    `;
  }).join('');

  // Eventos de selección de jugador
  pitch.querySelectorAll('.player-pin').forEach(btn => {
    btn.addEventListener('click', () => {
      const num = parseInt(btn.dataset.number, 10);
      const player = lineup1968.players.find(p => p.number === num);
      if (player) selectPlayer(player);
    });
  });

  // Seleccionar inicialmente al Capitán (Carlos Silva #2) o goleador (Mendoza #9)
  const defaultPlayer = lineup1968.players.find(p => p.number === 9) || lineup1968.players[0];
  selectPlayer(defaultPlayer);
}
