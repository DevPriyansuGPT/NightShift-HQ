/**
 * NIGHTSHIFT HQ - INTERACTIONS & SOUND SYNTHESIS
 * Sophisticated, restrained, tactile interactions without excessive flash.
 * Preserves dark cinematic minimal feel with purposeful feedback.
 */

import { EXPERIMENTS_DATA, CREATIVE_ARCHIVE_DATA } from './projects.js';

// Web Audio API Subtle Sound Synthesizer (Zero asset download needed)
class TelemetryAudio {
  constructor() {
    this.ctx = null;
    this.enabled = false;
    this.ambientOsc = null;
    this.ambientGain = null;
    this.ambientFilter = null;
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
      this.playBeep(880, 0.04, 'sine', 0.04);
      this.startAmbientDrone();
    } else {
      this.stopAmbientDrone();
    }
    return this.enabled;
  }

  startAmbientDrone() {
    if (!this.enabled || !this.ctx) return;
    try {
      this.stopAmbientDrone();

      // Deep, low-frequency subtle ambient synth drone (48Hz, low-passed)
      this.ambientOsc = this.ctx.createOscillator();
      this.ambientGain = this.ctx.createGain();
      this.ambientFilter = this.ctx.createBiquadFilter();

      this.ambientOsc.type = 'triangle';
      this.ambientOsc.frequency.setValueAtTime(48, this.ctx.currentTime);

      this.ambientFilter.type = 'lowpass';
      this.ambientFilter.frequency.setValueAtTime(140, this.ctx.currentTime);

      // Very soft, non-intrusive gain
      this.ambientGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.012, this.ctx.currentTime + 2.0);

      this.ambientOsc.connect(this.ambientFilter);
      this.ambientFilter.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      this.ambientOsc.start();
    } catch (e) {
      // Ignore if browser restricts audio
    }
  }

  stopAmbientDrone() {
    if (this.ambientGain && this.ctx) {
      try {
        this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
        setTimeout(() => {
          if (this.ambientOsc) {
            try { this.ambientOsc.stop(); } catch(e) {}
            this.ambientOsc.disconnect();
            this.ambientOsc = null;
          }
        }, 550);
      } catch (e) {
        this.ambientOsc = null;
      }
    }
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
    this.playBeep(1200, 0.018, 'sine', 0.012);
  }

  playClick() {
    this.playBeep(720, 0.035, 'triangle', 0.03);
  }

  playStatusPing() {
    if (!this.enabled || !this.ctx) return;
    this.playBeep(960, 0.05, 'sine', 0.035);
    setTimeout(() => this.playBeep(1440, 0.06, 'sine', 0.025), 60);
  }

  playCipher() {
    this.playBeep(320, 0.05, 'sawtooth', 0.018);
  }

  playTransition() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(160, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(640, this.ctx.currentTime + 0.45);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.04, this.ctx.currentTime + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.5);
    } catch (e) {}
  }
}

export const soundFx = new TelemetryAudio();

export function initInteractions() {
  // 1. Sound Toggle Button in Header
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

  // 2. Bind subtle audio on interactive elements
  const interactives = document.querySelectorAll('button, .btn, .nav-link, .project-card, .lab-card, .filter-btn');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => soundFx.playHover());
    el.addEventListener('click', () => soundFx.playClick());
  });

  // 3. Classified Project Cipher Scrambler
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

  // 4. Interactive System Online Status Indicator Popover (Brief #3)
  initSystemStatusPopover();

  // 5. Enter HQ Cinematic Transition (Brief #4)
  initEnterHqTransition();

  // 6. Experiment Lab Rendering & Filtering
  renderExperimentLab('all');
  initLabFilters();
  initExperimentModal();

  // 7. Creative Archive Gallery Rendering
  renderCreativeArchive();

  // 8. Story Chronicle Terminal & Philosophy Pipeline
  initStoryChronicle();
}

/**
 * System Online Popover Toggle (Brief #3)
 * Tiny status panel: HQ STATUS, SYSTEM, PROJECTS, CONTROL ROOM
 */
function initSystemStatusPopover() {
  const trigger = document.getElementById('hero-status-trigger');
  const popover = document.getElementById('status-panel-popover');
  const closeBtn = document.getElementById('status-popover-close');

  if (!trigger || !popover) return;

  const openPopover = () => {
    popover.removeAttribute('hidden');
    popover.classList.add('visible');
    trigger.setAttribute('aria-expanded', 'true');
    soundFx.playStatusPing();
  };

  const closePopover = () => {
    popover.classList.remove('visible');
    trigger.setAttribute('aria-expanded', 'false');
    setTimeout(() => {
      if (!popover.classList.contains('visible')) {
        popover.setAttribute('hidden', '');
      }
    }, 200);
  };

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closePopover();
    } else {
      openPopover();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closePopover();
    });
  }

  // Light dismiss on outside click
  document.addEventListener('click', (e) => {
    if (!popover.contains(e.target) && !trigger.contains(e.target)) {
      if (trigger.getAttribute('aria-expanded') === 'true') {
        closePopover();
      }
    }
  });

  // Escape key dismiss
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && trigger.getAttribute('aria-expanded') === 'true') {
      closePopover();
    }
  });
}

/**
 * Enter HQ Cinematic Transition (Brief #4)
 * 1. Button compression reaction
 * 2. Background light expands
 * 3. Hero content moves/fades
 * 4. Smooth reveal into HQ Command Center
 */
function initEnterHqTransition() {
  const enterBtn = document.getElementById('btn-enter-hq');
  const portalOverlay = document.getElementById('hq-enter-portal');
  const heroContent = document.getElementById('hero-content-wrap');
  const commandCenter = document.getElementById('command-center');
  const scrollIndicator = document.getElementById('hero-scroll-indicator');

  if (!enterBtn) return;

  const executeEnter = (e) => {
    if (e) e.preventDefault();

    // 1. Button reaction with compression & sound
    enterBtn.classList.add('btn-compressed');
    soundFx.playTransition();

    // 2. Expand background light aperture & hero recession
    if (portalOverlay) portalOverlay.classList.add('portal-active');
    if (heroContent) heroContent.classList.add('hero-fade-enter');

    // 3. Smooth cinematic glide to HQ Command Center with header offset
    setTimeout(() => {
      if (commandCenter) {
        const header = document.querySelector('.site-header');
        const headerHeight = header ? header.offsetHeight : 75;
        const targetTop = commandCenter.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;

        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });

        // Highlight command center with telemetry pulse as visitor arrives
        setTimeout(() => {
          const hudBar = commandCenter.querySelector('.hud-status-bar');
          const hudPanels = commandCenter.querySelectorAll('.hud-panel');
          if (hudBar) {
            hudBar.classList.add('hud-highlight-flash');
            setTimeout(() => hudBar.classList.remove('hud-highlight-flash'), 2000);
          }
          hudPanels.forEach(p => {
            p.classList.add('hud-highlight-flash');
            setTimeout(() => p.classList.remove('hud-highlight-flash'), 2000);
          });
          soundFx.playStatusPing();
        }, 550);
      }

      // Smoothly reset enter states
      setTimeout(() => {
        enterBtn.classList.remove('btn-compressed');
        if (portalOverlay) portalOverlay.classList.remove('portal-active');
        if (heroContent) heroContent.classList.remove('hero-fade-enter');
      }, 700);
    }, 220);
  };

  enterBtn.addEventListener('click', executeEnter);

  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', (e) => {
      e.preventDefault();
      executeEnter(null);
    });
  }
}

/**
 * Renders Experiment Lab Cards
 */
export function renderExperimentLab(categoryFilter = 'all') {
  const labGrid = document.getElementById('lab-grid');
  if (!labGrid) return;

  const filtered = categoryFilter === 'all' 
    ? EXPERIMENTS_DATA 
    : EXPERIMENTS_DATA.filter(exp => {
        const cat = exp.category.toLowerCase();
        const badge = exp.catBadge.toLowerCase();
        const f = categoryFilter.toLowerCase();
        return cat.includes(f) || badge.includes(f);
      });

  labGrid.innerHTML = filtered.map(exp => `
    <div class="lab-card reveal-fade-up" data-exp-id="${exp.id}">
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
          <span class="lab-file-ref mono">src/${exp.fileRef}</span>
          <button type="button" class="btn-inspect-exp mono" onclick="openExperimentModal('${exp.id}')" aria-label="Inspect ${exp.title}">
            <span>INSPECT [→]</span>
          </button>
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
      soundFx.playClick();
    });
  });
}

/**
 * Experiment Detail / Inspect Modal
 */
function initExperimentModal() {
  const dialog = document.getElementById('experiment-dialog');
  const modalContent = document.getElementById('experiment-dynamic-content');

  window.openExperimentModal = (expId) => {
    if (!dialog || !modalContent) return;

    const exp = EXPERIMENTS_DATA.find(e => e.id === expId);
    if (!exp) return;

    soundFx.playClick();

    modalContent.innerHTML = `
      <div class="modal-inner">
        <button class="modal-close-btn" id="exp-close-btn" aria-label="Close Experiment Dialog">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div class="modal-body" style="padding-top:2.5rem;">
          <div class="modal-meta-bar">
            <span class="lab-cat-badge">${exp.catBadge}</span>
            <span class="mono" style="font-size:0.8125rem; color:var(--text-muted);">SRC // ${exp.fileRef}</span>
          </div>

          <h2 class="modal-title">${exp.title}</h2>
          <p class="modal-tagline">${exp.desc}</p>

          <div class="modal-section">
            <div class="modal-section-title">Classification & Tags</div>
            <div class="project-tech-tags">
              ${exp.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
          </div>

          <div class="modal-section">
            <div class="modal-section-title">Algorithm & Implementation Logic</div>
            <pre class="exp-code-block mono"><code>${exp.codeSnippet || '// Source implementation encapsulated.'}</code></pre>
          </div>

          <div class="modal-section" style="margin-bottom:0;">
            <div class="modal-section-title">Execution State</div>
            <div style="display:flex; align-items:center; gap:0.75rem; font-size:0.875rem; color:var(--emerald);" class="mono">
              <span class="status-indicator-dot"></span>
              PROTOTYPE VERIFIED IN QUIET HOURS
            </div>
          </div>
        </div>
      </div>
    `;

    const closeBtn = document.getElementById('exp-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => dialog.close());
    }

    dialog.showModal();
  };

  if (dialog) {
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        dialog.close();
      }
    });
  }
}

const PIPELINE_DATA = {
  think: {
    tag: 'STAGE 01 // THINK',
    status: 'STAGE 01: THINK // Conceptualization & Spatial Vision',
    desc: 'Ideation during the midnight quiet hours. Isolating core user experience problems, sketching spatial interactions, and rejecting default templates.'
  },
  build: {
    tag: 'STAGE 02 // BUILD',
    status: 'STAGE 02: BUILD // Zero-Bloat Engineering',
    desc: 'Writing clean, modular vanilla JavaScript and modern CSS. Zero dependency bloat, 60+ FPS hardware acceleration, and strict semantic HTML5 structure.'
  },
  break: {
    tag: 'STAGE 03 // BREAK',
    status: 'STAGE 03: BREAK // Stress Testing & Chaos Audit',
    desc: 'Aggressive edge-case auditing. Testing multi-device viewports, keyboard navigation, high latency states, audio policy edge-cases, and contrast ratios.'
  },
  fix: {
    tag: 'STAGE 04 // FIX',
    status: 'STAGE 04: FIX // Micro-Refinement & Polish',
    desc: 'Refactoring telemetry metrics, tuning cubic-bezier easing curves, smoothing layout shifts, and elevating tactile feedback.'
  },
  learn: {
    tag: 'STAGE 05 // LEARN',
    status: 'STAGE 05: LEARN // Continuous Knowledge Compounding',
    desc: 'Extracting architectural principles, documenting breakthroughs in dev logs, and synthesizing human intuition with machine capabilities.'
  },
  ship: {
    tag: 'STAGE 06 // SHIP',
    status: 'STAGE 06: SHIP // Launching After Dark',
    desc: 'Deploying completed creations with zero-compromise production standards into the official NightShift HQ archive.'
  }
};

function initStoryChronicle() {
  // 1. Acts Navigation Tabs
  const actButtons = document.querySelectorAll('.story-act-btn');
  const actPanels = document.querySelectorAll('.story-stage-panel');

  actButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const actNumber = btn.getAttribute('data-act');
      soundFx.playClick();

      actButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      actPanels.forEach(p => p.classList.remove('active'));
      const activePanel = document.getElementById(`panel-act-${actNumber}`);
      if (activePanel) activePanel.classList.add('active');
    });
  });

  // 2. Continuous Craftsmanship Pipeline Nodes
  const pipelineNodes = document.querySelectorAll('.pipeline-node');
  const statusText = document.getElementById('pipeline-status-text');
  const detailTag = document.getElementById('pipeline-detail-tag');
  const detailDesc = document.getElementById('pipeline-detail-desc');

  pipelineNodes.forEach(node => {
    node.addEventListener('click', () => {
      const stage = node.getAttribute('data-stage');
      const data = PIPELINE_DATA[stage];
      if (!data) return;

      soundFx.playClick();

      pipelineNodes.forEach(n => {
        n.classList.remove('active');
        n.setAttribute('aria-selected', 'false');
      });
      node.classList.add('active');
      node.setAttribute('aria-selected', 'true');

      if (statusText) statusText.textContent = data.status;
      if (detailTag) detailTag.textContent = data.tag;
      if (detailDesc) detailDesc.textContent = data.desc;
    });

    node.addEventListener('mouseenter', () => soundFx.playHover());
  });

  // 3. Live Midnight Clock simulation
  const clockDigits = document.getElementById('story-clock-digits');
  if (clockDigits) {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const strHours = String(hours).padStart(2, '0');
      clockDigits.textContent = `${strHours}:${minutes}:${seconds} ${ampm}`;
    };
    updateClock();
    setInterval(updateClock, 1000);
  }
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
