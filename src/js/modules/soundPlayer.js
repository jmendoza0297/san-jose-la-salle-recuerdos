/**
 * Generador de ambientación sonora nostálgica mediante Web Audio API
 * Crea una suave atmósfera con acordes cálidos y sutil textura de vinilo de época.
 */

let audioCtx = null;
let isPlaying = false;
let chordInterval = null;
let crackleNode = null;
let masterGain = null;

export function initSoundPlayer() {
  const toggleBtn = document.getElementById('sound-toggle');
  if (!toggleBtn) return;

  const chords = [
    [261.63, 329.63, 392.00, 493.88], // Cmaj7
    [220.00, 261.63, 329.63, 392.00], // Am7
    [174.61, 220.00, 261.63, 329.63], // Fmaj7
    [196.00, 246.94, 293.66, 392.00]  // G7
  ];
  let chordIndex = 0;

  function initAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();

      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      masterGain.connect(audioCtx.destination);

      // Generar ruido de vinilo sutil (crackle)
      const bufferSize = audioCtx.sampleRate * 2;
      const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        // Ruido rosa con pequeñas pulsaciones tipo aguja de tocadiscos
        output[i] = (Math.random() * 2 - 1) * 0.015;
        if (Math.random() < 0.001) {
          output[i] += (Math.random() * 0.15 - 0.075);
        }
      }

      const noise = audioCtx.createBufferSource();
      noise.buffer = noiseBuffer;
      noise.loop = true;

      const noiseFilter = audioCtx.createBiquadFilter();
      noiseFilter.type = 'lowpass';
      noiseFilter.frequency.setValueAtTime(1200, audioCtx.currentTime);

      const noiseGain = audioCtx.createGain();
      noiseGain.gain.setValueAtTime(0.08, audioCtx.currentTime);

      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(masterGain);
      noise.start(0);
      crackleNode = noise;
    }
  }

  function playWarmChord(freqs) {
    if (!audioCtx || audioCtx.state === 'suspended') return;

    freqs.forEach(freq => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      // Ataque suave y decaimiento cálido tipo piano vertical
      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.05, audioCtx.currentTime + 0.8);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 4.5);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 4.6);
    });
  }

  function startAmbience() {
    initAudioContext();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    isPlaying = true;
    toggleBtn.innerHTML = '<span class="sound-icon">🔊</span> Silenciar';
    toggleBtn.classList.add('active');

    // Reproducir primer acorde
    playWarmChord(chords[chordIndex]);
    chordIndex = (chordIndex + 1) % chords.length;

    chordInterval = setInterval(() => {
      playWarmChord(chords[chordIndex]);
      chordIndex = (chordIndex + 1) % chords.length;
    }, 4500);
  }

  function stopAmbience() {
    isPlaying = false;
    toggleBtn.innerHTML = '<span class="sound-icon">🎵</span> Música de Época';
    toggleBtn.classList.remove('active');

    if (chordInterval) {
      clearInterval(chordInterval);
      chordInterval = null;
    }
    if (audioCtx && audioCtx.state === 'running') {
      audioCtx.suspend();
    }
  }

  toggleBtn.addEventListener('click', () => {
    if (!isPlaying) {
      startAmbience();
    } else {
      stopAmbience();
    }
  });
}
