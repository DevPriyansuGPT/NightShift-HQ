/**
 * NIGHTSHIFT HQ - INTERACTIONS & SOUND SYNTHESIS
 * Sophisticated, restrained, tactile interactions without excessive flash.
 */

import { EXPERIMENTS_DATA, CREATIVE_ARCHIVE_DATA } from './projects.js';

// Web Audio API Subtle Sound Synthesizer (Zero asset download needed)
class TelemetryAudio {
  constructor() {
    this.ctx = null;
    this.enabled = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.init();
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.playBeep(880, 0.04, 'sine', 0.05);
    }
    return this.enabled;
  }

  playBeep(freq = 600, duration = 0.03, type = 'sine', gainVal = 0.025) {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Ignore if audio blocked by browser policy
    }
  }

  playHover() {
    this.playBeep(1200, 0.018, 'sine', 0.015);
  }

  playClick() {
    this.playBeep(720, 0.04, 'triangle', 0.035);
  }

  playCipher() {
    this.playBeep(320, 0.05, 'sawtooth', 0.018);
  }
}

export const soundFx = new TelemetryAudio();

export function initInteractions() {
  // Sound Toggle Button in Header
  const soundBtn = document.getElementById('sound-toggle');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const isActive = soundFx.toggle();
      soundBtn.classList.toggle('active', isActive);
      const textSpan = soundBtn.querySelector('.sound-label');
      if (textSpan) {
        textSpan.textContent = isActive ? 'AUDIO: ON' : 'AUDIO: MUTED';
      }
    });
  }

  // Bind subtle audio on interactive elements
  const interactives = document.querySelectorAll('button, .btn, .nav-link, .project-card, .lab-card, .filter-btn');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => soundFx.playHover());
    el.addEventListener('click', () => soundFx.playClick());
  });

  // Classified Project Cipher Scrambler
  const cipherCard = document.getElementById('classified-card');
  const cipherHeading = document.getElementById('cipher-text');
  if (cipherCard && cipherHeading) {
    const originalText = cipherHeading.textContent;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*<>_/';
    let interval = null;

    const scramble = () => {
      let iteration = 0;
      clearInterval(interval);
      soundFx.playCipher();

      interval = setInterval(() => {
        cipherHeading.textContent = originalText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');

        if (iteration >= originalText.length) {
          clearInterval(interval);
        }
        iteration += 1 / 2;
      }, 35);
    };

    cipherCard.addEventListener('mouseenter', scramble);
    cipherCard.addEventListener('click', scramble);
  }

  // Experiment Lab Rendering & Filtering
  renderExperimentLab('all');
  initLabFilters();

  // Creative Archive Gallery Rendering
  renderCreativeArchive();
}

/**
 * Renders Experiment Lab Cards
 */
export function renderExperimentLab(categoryFilter = 'all') {
  const labGrid = document.getElementById('lab-grid');
  if (!labGrid) return;

  const filtered = categoryFilter === 'all' 
    ? EXPERIMENTS_DATA 
    : EXPERIMENTS_DATA.filter(exp => exp.catBadge.toLowerCase().includes(categoryFilter.toLowerCase()));

  labGrid.innerHTML = filtered.map(exp => `
    <div class="lab-card reveal-fade-up">
      <div>
        <div class="lab-card-top">
          <span class="lab-cat-badge">${exp.catBadge}</span>
          <span class="mono" style="font-size:0.6875rem; color:var(--text-muted);">${exp.category}</span>
        </div>
        <h4 class="lab-title" style="margin-top:0.85rem;">${exp.title}</h4>
        <p class="lab-desc">${exp.desc}</p>
      </div>
      <div>
        <div style="display:flex; flex-wrap:wrap; gap:0.35rem; margin-bottom:1rem;">
          ${exp.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <div class="lab-footer">
          <span class="lab-file-ref">src/${exp.fileRef}</span>
          <span class="status-badge" style="font-size:0.625rem; padding:0.2rem 0.5rem; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); color:var(--text-secondary);">PROTOTYPE</span>
        </div>
      </div>
    </div>
  `).join('');
}

function initLabFilters() {
  const filterBtns = document.querySelectorAll('.lab-filters .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter') || 'all';
      renderExperimentLab(cat);
    });
  });
}

/**
 * Renders Creative Archive Lightbox Gallery
 */
function renderCreativeArchive() {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;

  galleryGrid.innerHTML = CREATIVE_ARCHIVE_DATA.map(item => `
    <div class="gallery-card reveal-fade-up">
      <img src="${item.img}" alt="${item.title}" class="gallery-img" loading="lazy">
      <div class="gallery-info">
        <span class="gallery-item-cat">${item.category}</span>
        <h4 class="gallery-item-title">${item.title}</h4>
      </div>
    </div>
  `).join('');
}
