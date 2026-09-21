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
    title: 'CLASSIFIED',
    tagline: 'SECURITY CLEARANCE LEVEL 4 REQUIRED // ACCESS RESTRICTED',
    status: 'LOCKED',
    badgeClass: 'classified',
    index: '03',
    heroImage: 'assets/images/nightshift_hero_bg.jpg',
    isClassified: true,
    overview: 'Strictly confidential next-generation initiative. Architectural blueprints, code repositories, and user experience paradigms are offline and encrypted in hardware security modules.',
    technologies: ['Quantum State Logic', 'Neural Orchestration', 'Encrypted Stack'],
    timeline: [
      { date: 'Protocol', title: 'Clearance Required', desc: 'No unauthorized inspection permitted.' }
    ],
    features: [
      { title: 'Zero Leakage', desc: 'All telemetry and functional logic remain encrypted.' }
    ],
    challenges: 'Guarding confidential creative paradigms while building in stealth.',
    lessonsLearned: 'The most impactful creations take shape in quiet secrecy away from premature public scrutiny.',
    finalResult: 'Classified until public release.'
  }
};

export const EXPERIMENTS_DATA = [
  {
    id: 'exp-solar',
    title: 'Orbital Solar Simulation',
    category: 'Python Experiments',
    catBadge: 'Python',
    fileRef: 'solar_system.py',
    desc: 'Gravitational n-body orbital simulation calculating real-time planetary trajectories and Keplerian mechanics.',
    tags: ['Python', 'Kinematics', 'Orbital Math'],
    codeSnippet: `import math\n\ndef calculate_orbit(time_step, mass, velocity):\n    # Gravitational vector pull\n    G = 6.67430e-11\n    accel = (G * mass) / (radius ** 2)\n    return velocity + accel * time_step`
  },
  {
    id: 'exp-heart',
    title: 'Procedural Heart Curve',
    category: 'Animation Experiments',
    catBadge: 'Animation',
    fileRef: 'heart_animation.py',
    desc: 'Trigonometric parametric curve animation calculating cardiac pulsation pulses with smooth color spectra.',
    tags: ['Trigonometry', 'Motion Curves', 'Python'],
    codeSnippet: `def heart_curve(t):\n    x = 16 * (math.sin(t) ** 3)\n    y = 13 * math.cos(t) - 5 * math.cos(2*t) - 2 * math.cos(3*t) - math.cos(4*t)\n    return (x, y)`
  },
  {
    id: 'exp-shakti',
    title: 'Shakti Digital Pujo',
    category: 'Creative Coding',
    catBadge: 'Creative',
    fileRef: 'Shakti_Digital_Pujo',
    desc: 'Cultural digital art experience transforming traditional ritual motifs into dynamic procedural canvas animations.',
    tags: ['Visual Art', 'Procedural', 'Culture Canvas'],
    codeSnippet: `// Procedural radiant mandala aura\nfor (let theta = 0; theta < Math.PI * 2; theta += step) {\n  const r = baseRadius + Math.sin(theta * petals + phase) * amplitude;\n  ctx.lineTo(cx + Math.cos(theta) * r, cy + Math.sin(theta) * r);\n}`
  },
  {
    id: 'exp-neural',
    title: 'Neural Core Node Graph',
    category: 'UI Experiments',
    catBadge: 'UI Experiments',
    fileRef: 'NEURAL_CORE',
    desc: 'Interactive visual node-graph simulating multi-agent neural thought pathways and contextual memory synapses.',
    tags: ['Graph Theory', 'Canvas', 'Agent Synapse'],
    codeSnippet: `class SynapticEdge {\n  constructor(nodeA, nodeB, weight) {\n    this.source = nodeA;\n    this.target = nodeB;\n    this.pulsePhase = 0;\n  }\n}`
  },
  {
    id: 'exp-durga',
    title: 'Durga Reel Visual Engine',
    category: 'Animation Experiments',
    catBadge: 'Animation',
    fileRef: 'durga-reel',
    desc: 'Dynamic video asset generator combining timed beat synchronizations, glow typography, and particle bursts.',
    tags: ['Video Gen', 'Audio Sync', 'Motion Typography'],
    codeSnippet: `function syncBeatDrop(bpm, timeSec) {\n  const interval = 60 / bpm;\n  const beatIndex = Math.floor(timeSec / interval);\n  const pulse = Math.pow(1 - (timeSec % interval) / interval, 2);\n  return { beatIndex, pulse };\n}`
  },
  {
    id: 'exp-ganapati',
    title: 'Ganapati Bappa Coded Vector',
    category: 'Creative Coding',
    catBadge: 'Creative',
    fileRef: 'Ganapati_Bappa_Coded_Animation',
    desc: 'Algorithmic geometric line-rendering creating sacred iconography purely through coordinate calculations.',
    tags: ['Vector Math', 'Generative', 'Sacred Geometry'],
    codeSnippet: `// Coordinate geometry path tracing\nfunction drawModak(x, y, scale) {\n  ctx.beginPath();\n  ctx.moveTo(x, y - 20 * scale);\n  ctx.bezierCurveTo(x + 15 * scale, y, x + 10 * scale, y + 20 * scale, x, y + 20 * scale);\n}`
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
    category: 'Spatial Architecture',
    img: 'assets/images/nightshift_hero_bg.jpg'
  }
];

/**
 * Initializes Project Detail Dialog System & 3D Tilt Micro-interactions
 */
export function initProjectModal() {
  const dialog = document.getElementById('project-dialog');
  const modalContent = document.getElementById('modal-dynamic-content');

  // Expose global opener for inline onclick or event listener binding
  window.openProjectModal = (projectId) => {
    if (!dialog || !modalContent) return;

    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    // Strict Rule for Classified Project (Brief #7): Do NOT reveal any information about it.
    if (data.isClassified) {
      modalContent.innerHTML = `
        <div class="modal-inner classified-modal-inner">
          <button class="modal-close-btn" id="modal-close-btn-inner" aria-label="Close Security Modal">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <div class="classified-lock-banner">
            <div class="classified-lock-icon-wrap">
              <svg class="classified-lock-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <div class="mono" style="color:var(--rose); font-size:0.875rem; letter-spacing:0.2em; font-weight:700;">SECURITY CLEARANCE DENIED</div>
            <h2 class="classified-modal-heading" id="modal-cipher-title">ACCESS RESTRICTED // LEVEL 4</h2>
          </div>

          <div class="classified-terminal-box mono">
            <div class="classified-terminal-line"><span class="text-rose">[SECURITY_ALERT]</span> Unauthorized inspection attempt logged on vault node.</div>
            <div class="classified-terminal-line"><span class="text-cyan">[ENCRYPTION]</span> 4096-bit post-quantum cipher active. State: LOCKED.</div>
            <div class="classified-terminal-line"><span class="text-secondary">[PROTOCOL]</span> Project 03 specifications and assets are offline and strictly confidential.</div>
            <div class="classified-terminal-line" style="color:var(--rose); font-weight:600;">[STATUS] ACCESS DENIED. NO DATA REVEALED.</div>
          </div>

          <div style="margin-top:2rem; text-align:center;">
            <p style="font-size:0.875rem; color:var(--text-muted); max-width:440px; margin:0 auto 1.5rem auto;">
              In accordance with NightShift HQ security guidelines, unreleased project blueprinted parameters remain in the dark until official public release.
            </p>
            <button type="button" class="btn btn-secondary btn-sm" onclick="document.getElementById('project-dialog').close()">
              <span>RETURN TO HQ</span>
            </button>
          </div>
        </div>
      `;
    } else {
      modalContent.innerHTML = `
        <div class="modal-inner">
          <button class="modal-close-btn" id="modal-close-btn-inner" aria-label="Close Project Case Study">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <div class="modal-hero-wrap">
            <img src="${data.heroImage}" alt="${data.title} Project Visual" class="modal-hero-img">
            <div class="modal-hero-overlay"></div>
          </div>

          <div class="modal-body">
            <div class="modal-meta-bar">
              <div class="status-badge ${data.badgeClass}">
                <span class="status-indicator-dot"></span>
                STATUS: ${data.status}
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
              <div class="modal-section-title">Status in Studio</div>
              <p style="font-size:0.9375rem; color:var(--cyan); font-weight:500;">${data.finalResult}</p>
            </div>
          </div>
        </div>
      `;
    }

    // Bind inner close button
    const innerClose = document.getElementById('modal-close-btn-inner');
    if (innerClose) {
      innerClose.addEventListener('click', () => dialog.close());
    }

    dialog.showModal();
  };

  // Light dismiss (click on backdrop to close)
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

  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => dialog.close());
  }

  // Desktop 3D tilt interaction for project cards
  initProjectCardTilt();
}

/**
 * 3D Perspective Tilt on Desktop (Subtle, controlled, pure GPU transforms)
 */
function initProjectCardTilt() {
  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 1024) return; // Desktop only

  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -4; // Max -4deg to 4deg
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}
