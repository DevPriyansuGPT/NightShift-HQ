/**
 * NIGHTSHIFT HQ - PROJECTS & ARCHIVE DATA STORE
 * Modular architecture supporting current and future project case studies.
 */

export const PROJECTS_DATA = {
  lifeos: {
    id: 'lifeos',
    title: 'LIFEOS',
    tagline: 'The personal digital operating system & flagship productivity suite.',
    status: 'SHIPPED',
    badgeClass: 'shipped',
    index: '01',
    heroImage: 'assets/images/lifeos_preview.jpg',
    overview: 'LifeOS was the first major foundational project created and officially shipped under the NightShift banner. Built as a comprehensive personal digital dashboard, it organizes tasks, mental clarity, system metrics, flow states, and personal life telemetry into an ultra-clean, distraction-free environment.',
    technologies: ['Vanilla JavaScript (ES6+)', 'Modern Modular CSS', 'HTML5 Semantic Architecture', 'Custom Local Data Engine', 'Glassmorphism Design System', 'Hardware Accelerated UI'],
    timeline: [
      { date: 'Phase 1', title: 'Conceptual Architecture', desc: 'Designed the core information architecture, dark telemetry UI, and widget layout.' },
      { date: 'Phase 2', title: 'Telemetry & Widgets', desc: 'Engineered daily overview, focus timers, activity telemetry, and system trackers.' },
      { date: 'Phase 3', title: 'Performance & Refinement', desc: 'Eliminated dependencies, reduced bundle size to near-zero, and perfected micro-interactions.' },
      { date: 'Phase 4', title: 'Official Launch & V2.2', desc: 'Shipped fully operational version with offline persistence and modular extensions.' }
    ],
    features: [
      { title: 'Telemetry HUD', desc: 'Real-time monitoring of focus hours, cognitive energy, and milestone progress.' },
      { title: 'Focus Command Center', desc: 'Dedicated deep work mode with session timers and ambient flow indicators.' },
      { title: 'Modular Glass Dashboard', desc: 'Customizable widgets built with high-performance CSS backdrop filters.' },
      { title: 'Instant Offline Storage', desc: 'Zero cloud latency with local-first persistent data storage.' }
    ],
    challenges: 'Designing a dashboard that presents dense personal data without feeling cluttered, noisy, or like a boring corporate SaaS spreadsheet. We achieved this through restrained typography, high-contrast hierarchical contrast, and subtle ambient glows.',
    lessonsLearned: 'Building without bulky bloated frameworks yields unmatched speed, zero external vulnerabilities, and pure control over the exact pixel rendering pipeline.',
    finalResult: 'An ultra-fast, daily driver workspace relied upon daily for organizing ideas, tasks, and creative output.'
  },

  cyberpunk: {
    id: 'cyberpunk',
    title: 'CYBERPUNK 2.0',
    tagline: 'An immersive 3D digital realm exploring futuristic architecture and atmospheric shaders.',
    status: 'COOKING',
    badgeClass: 'cooking',
    index: '02',
    heroImage: 'assets/images/cyberpunk_preview.jpg',
    overview: 'Cyberpunk 2.0 is the current flagship in-development exploration. Pushing beyond traditional 2D web interfaces, this project merges 3D spatial web environments with post-processing bloom, volumetric fog, and procedural cityscapes.',
    technologies: ['Three.js', 'Vite', 'GLSL Custom Shaders', 'WebAudio API', 'Procedural Geometry', 'PBR Materials'],
    timeline: [
      { date: 'Active Phase', title: 'Spatial Geometry & Shaders', desc: 'Constructing the high-fidelity volumetric city architecture and neon lighting rigs.' },
      { date: 'Next Step', title: 'Interactive Audio Environment', desc: 'Integrating positional audio engine and interactive camera fly-through sequences.' }
    ],
    features: [
      { title: 'Volumetric Atmosphere', desc: 'Real-time rain, wet ground reflections, and moody atmospheric mist.' },
      { title: 'Cinematic Camera Paths', desc: 'Smooth orbital and directed camera tracks responding to scroll.' },
      { title: '60 FPS Performance Optimization', desc: 'Custom LOD (Level of Detail) meshes and instanced rendering.' }
    ],
    challenges: 'Balancing intense post-processing aesthetics (bloom, rain distortion, screen-space reflections) while maintaining consistent 60fps frame rates across various hardware.',
    lessonsLearned: 'Geometry instancing and shader mathematics outperform raw polygon counts every single time.',
    finalResult: 'Currently in active development in the NightShift studio pipeline.'
  },

  classified: {
    id: 'classified',
    title: 'CLASSIFIED PROJECT',
    tagline: 'Access Restricted — Encryption protocol Level 4 active.',
    status: 'CLASSIFIED',
    badgeClass: 'classified',
    index: '03',
    heroImage: 'assets/images/nightshift_hero_bg.jpg',
    overview: 'This project is currently guarded under strict secrecy. Development logs, architectural blueprints, and visual assets are locked until the official unveiling.',
    technologies: ['Quantum State Logic', 'Neural Orchestration', 'Classified Pipeline'],
    timeline: [
      { date: 'Status', title: 'Security Clearance Required', desc: 'Project information is stored in encrypted offline vaults.' }
    ],
    features: [
      { title: 'Encrypted Architecture', desc: 'Zero data leakage prior to the official premiere.' },
      { title: 'Next-Gen Creative Tech', desc: 'Exploring unreleased paradigms in personal digital tools.' }
    ],
    challenges: 'Keeping it secret while building in the dark.',
    lessonsLearned: 'Great creations take shape when built with pure focus away from noise.',
    finalResult: 'To be revealed when ready.'
  }
};

export const EXPERIMENTS_DATA = [
  {
    id: 'exp-solar',
    title: 'Orbital Solar Simulation',
    category: 'Python / Physics',
    catBadge: 'Python',
    fileRef: 'solar_system.py',
    desc: 'Gravitational n-body orbital simulation calculating real-time planetary trajectories and Keplerian mechanics.',
    tags: ['Python', 'Math', 'Kinematics']
  },
  {
    id: 'exp-heart',
    title: 'Procedural Heart Curve',
    category: 'Animation / Math',
    catBadge: 'Animation',
    fileRef: 'heart_animation.py',
    desc: 'Trigonometric parametric curve animation calculating cardiac pulsation pulses with smooth color spectra.',
    tags: ['Trigonometry', 'Motion', 'Python']
  },
  {
    id: 'exp-shakti',
    title: 'Shakti Digital Pujo',
    category: 'Creative Tech',
    catBadge: 'Creative',
    fileRef: 'Shakti_Digital_Pujo',
    desc: 'Cultural digital art experience transforming traditional ritual motifs into dynamic procedural canvas animations.',
    tags: ['Visual Art', 'Procedural', 'Culture']
  },
  {
    id: 'exp-neural',
    title: 'Neural Core Node Graph',
    category: 'AI / UI Experiment',
    catBadge: 'AI Experiment',
    fileRef: 'NEURAL_CORE',
    desc: 'Interactive visual node-graph simulating multi-agent neural thought pathways and contextual memory synapses.',
    tags: ['Graph Theory', 'Canvas', 'Agents']
  },
  {
    id: 'exp-durga',
    title: 'Durga Reel Visual Engine',
    category: 'Motion / Video',
    catBadge: 'Motion',
    fileRef: 'durga-reel',
    desc: 'Dynamic video asset generator combining timed beat synchronizations, glow typography, and particle bursts.',
    tags: ['Video Gen', 'Audio Sync', 'Motion']
  },
  {
    id: 'exp-ganapati',
    title: 'Ganapati Bappa Coded Vector',
    category: 'Animation / Code Art',
    catBadge: 'Vector Art',
    fileRef: 'Ganapati_Bappa_Coded_Animation',
    desc: 'Algorithmic geometric line-rendering creating sacred iconography purely through coordinate calculations.',
    tags: ['Vector', 'Math Art', 'Generative']
  }
];

export const CREATIVE_ARCHIVE_DATA = [
  {
    title: 'LifeOS Telemetry HUD',
    category: 'UI Concepts',
    img: 'assets/images/lifeos_preview.jpg'
  },
  {
    title: 'Cyberpunk 2.0 Rain Realm',
    category: '3D & Motion',
    img: 'assets/images/cyberpunk_preview.jpg'
  },
  {
    title: 'NightShift HQ Core Visuals',
    category: 'Visual Design',
    img: 'assets/images/nightshift_hero_bg.jpg'
  }
];

/**
 * Initializes the Project Detail Modal (<dialog>) system.
 */
export function initProjectModal() {
  const dialog = document.getElementById('project-dialog');
  if (!dialog) return;

  const closeBtn = document.getElementById('modal-close-btn');
  const modalContent = document.getElementById('modal-dynamic-content');

  // Open modal for a given project ID
  window.openProjectModal = function(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    modalContent.innerHTML = `
      <div class="modal-inner">
        <div class="modal-header-hero">
          <img src="${data.heroImage}" alt="${data.title}" class="modal-hero-img" loading="lazy">
          <button type="button" class="modal-close-btn" id="modal-close-btn-inner" aria-label="Close modal">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal-meta-bar">
            <div class="status-badge ${data.badgeClass}">
              <span class="status-indicator-dot"></span>
              ${data.status}
            </div>
            <span class="mono" style="font-size:0.8125rem; color:var(--text-muted);">PROJECT ARCHIVE // ${data.index}</span>
          </div>

          <h2 class="modal-title">${data.title}</h2>
          <p class="modal-tagline">${data.tagline}</p>

          <div class="modal-section">
            <div class="modal-section-title">System Overview</div>
            <p style="color:var(--text-primary); line-height:1.7;">${data.overview}</p>
          </div>

          <div class="modal-section">
            <div class="modal-section-title">Core Architecture & Tech Stack</div>
            <div class="project-tech-tags">
              ${data.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
          </div>

          <div class="modal-section">
            <div class="modal-section-title">Key Architectural Features</div>
            <div class="modal-grid-2">
              ${data.features.map(f => `
                <div class="modal-feature-card">
                  <div class="modal-feature-title">${f.title}</div>
                  <div style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5;">${f.desc}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="modal-section">
            <div class="modal-section-title">Engineering Challenges & Solutions</div>
            <p style="font-size:0.9375rem; color:var(--text-secondary); line-height:1.6;">${data.challenges}</p>
          </div>

          <div class="modal-section">
            <div class="modal-section-title">Lessons Learned</div>
            <p style="font-size:0.9375rem; color:var(--text-secondary); line-height:1.6;">${data.lessonsLearned}</p>
          </div>

          <div class="modal-section" style="margin-bottom:0;">
            <div class="modal-section-title">Final Verdict</div>
            <p style="font-size:0.9375rem; color:var(--cyan); font-weight:500;">${data.finalResult}</p>
          </div>
        </div>
      </div>
    `;

    // Bind inner close button
    const innerClose = document.getElementById('modal-close-btn-inner');
    if (innerClose) {
      innerClose.addEventListener('click', () => dialog.close());
    }

    dialog.showModal();
  };

  // Light dismiss (click on backdrop to close)
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

  if (closeBtn) {
    closeBtn.addEventListener('click', () => dialog.close());
  }
}
