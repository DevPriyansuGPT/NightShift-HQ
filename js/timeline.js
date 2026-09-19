/**
 * NIGHTSHIFT HQ - TIMELINE & DEV LOG MODULE
 * Handles milestone scroll triggers and chronological dev log entries.
 */

export const DEV_LOGS = [
  {
    date: '19 SEP 2026',
    badge: 'HQ RELEASE',
    title: 'NightShift HQ launched.',
    quote: 'Created the central workspace for present and future projects. The digital headquarters is now fully operational.',
    details: 'Architected the dark minimalist headquarters. Consolidated LifeOS, Cyberpunk 2.0, experiment labs, and engineering timeline into a unified creative-tech portal.'
  },
  {
    date: '14 AUG 2026',
    badge: 'LIFEOS V2.2',
    title: 'LifeOS V2.2 shipped and operational.',
    quote: 'Refactored state engine, sub-millisecond local caching, and finalized obsidian telemetry widgets.',
    details: 'Achieved complete zero-cloud dependency with instant offline persistence and refined typography.'
  },
  {
    date: '02 JUL 2026',
    badge: '3D R&D',
    title: 'Cyberpunk 2.0 spatial scene prototype.',
    quote: 'Implemented volumetric fog, atmospheric rain shaders, and neon lighting arrays in Three.js.',
    details: 'Explored post-processing passes and camera tracks without degrading frame rate targets.'
  },
  {
    date: '18 MAY 2026',
    badge: 'EXPERIMENT',
    title: 'Neural Core graph engine designed.',
    quote: 'Interactive graph visualization mapping multi-agent thought nodes and contextual synapses.',
    details: 'Created custom physics-based edge springing and node collision detection algorithms on canvas.'
  },
  {
    date: '28 MAR 2026',
    badge: 'MILESTONE',
    title: 'LifeOS Genesis (V1.0).',
    quote: 'The initial breakthrough: transforming personal chaos into a disciplined operating system.',
    details: 'Laid the foundational design philosophy: Think → Build → Break → Fix → Learn → Ship.'
  }
];

export function initTimelineAndLogs() {
  // Render Dev Log Stream
  const devlogContainer = document.getElementById('devlog-stream');
  if (devlogContainer) {
    devlogContainer.innerHTML = DEV_LOGS.map(log => `
      <article class="devlog-entry reveal-fade-up">
        <div class="devlog-top">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span class="devlog-date">${log.date}</span>
            <span class="status-badge active" style="font-size:0.625rem; padding:0.2rem 0.5rem;">${log.badge}</span>
          </div>
          <span class="mono" style="font-size:0.75rem; color:var(--text-muted);">LOG_ID #${Math.floor(Math.random()*9000+1000)}</span>
        </div>
        <h3 class="devlog-title">${log.title}</h3>
        <p style="font-size:0.875rem; color:var(--text-secondary); margin-top:0.35rem;">${log.details}</p>
        <div class="devlog-quote">"${log.quote}"</div>
      </article>
    `).join('');
  }

  // Scroll illumination for timeline nodes
  const timelineItems = document.querySelectorAll('.timeline-item');
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
