/**
 * NIGHTSHIFT HQ - TIMELINE & DEV LOG MODULE
 * Handles milestone scroll triggers and chronological dev log entries.
 */

export const DEV_LOGS = [
  {
    date: '19 SEP 2026',
    title: 'NIGHTSHIFT HQ LAUNCHED',
    description: 'Official NightShift HQ website went online. Constructed the central digital headquarters uniting LifeOS, Cyberpunk 2.0, experiment labs, and engineering archives into an authoritative, dark cinematic digital home.',
    badge: 'HQ ONLINE'
  },
  {
    date: '14 AUG 2026',
    title: 'LIFEOS V2.2 SHIPPED',
    description: 'Refactored state engine, implemented sub-millisecond local caching, and finalized obsidian telemetry widgets. Full zero-cloud dependency with instant offline persistence.',
    badge: 'FLAGSHIP SHIPPED'
  },
  {
    date: '02 JUL 2026',
    title: 'CYBERPUNK 2.0 SPATIAL PIPELINE',
    description: 'Implemented volumetric fog, atmospheric rain shaders, and neon lighting arrays in Three.js. Targeted 60 FPS performance benchmark verified across desktop and mobile.',
    badge: '3D ACTIVE'
  },
  {
    date: '18 MAY 2026',
    title: 'NEURAL CORE GRAPH ENGINE PROTOTYPED',
    description: 'Interactive graph visualization mapping multi-agent thought nodes and contextual synapses with custom physics-based edge springing and collision detection.',
    badge: 'LAB EXPERIMENT'
  },
  {
    date: '28 MAR 2026',
    title: 'LIFEOS GENESIS (V1.0)',
    description: 'Initial breakthrough transforming personal chaos into a disciplined operating system. Established the core NightShift philosophy: Think → Build → Break → Fix → Learn → Ship.',
    badge: 'GENESIS'
  }
];

export function initTimelineAndLogs() {
  // Render Dev Log Stream (v2 Brief #10: DATE, TITLE, DESCRIPTION)
  const devlogContainer = document.getElementById('devlog-stream');
  if (devlogContainer) {
    devlogContainer.innerHTML = DEV_LOGS.map(log => `
      <article class="devlog-entry reveal-fade-up">
        <div class="devlog-top">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span class="devlog-date mono">${log.date}</span>
            <span class="status-badge active" style="font-size:0.625rem; padding:0.2rem 0.5rem;">${log.badge}</span>
          </div>
          <span class="mono" style="font-size:0.75rem; color:var(--text-muted);">LOG_ID #${Math.floor(Math.random()*9000+1000)}</span>
        </div>
        <h3 class="devlog-title">${log.title}</h3>
        <p class="devlog-desc">${log.description}</p>
      </article>
    `).join('');
  }

  // Scroll illumination for timeline nodes and laser progress spine
  const timelineItems = document.querySelectorAll('.timeline-item');
  const spineLaser = document.getElementById('timeline-laser');
  const timelineSection = document.getElementById('timeline');

  if (spineLaser && timelineSection) {
    const updateTimelineLaser = () => {
      const rect = timelineSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const totalDist = rect.height;
        const currentProgress = ((windowHeight * 0.7 - rect.top) / totalDist) * 100;
        const clamped = Math.min(100, Math.max(0, currentProgress));
        spineLaser.style.height = `${clamped}%`;
      }
    };
    window.addEventListener('scroll', updateTimelineLaser, { passive: true });
    updateTimelineLaser();
  }

  if ('IntersectionObserver' in window && timelineItems.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.35 });

    timelineItems.forEach(item => observer.observe(item));
  }
}
