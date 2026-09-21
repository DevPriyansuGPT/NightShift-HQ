/**
 * NIGHTSHIFT HQ v2.0 - COMPLETE DIGITAL HEADQUARTERS ENGINE
 * Universal, Zero-Dependency, Pure Modern ES6+ Web Standards
 * Works seamlessly on local file://, localhost, and production servers.
 */

/* ==========================================================================
   01. DATA REGISTRY
   ========================================================================== */

const PROJECTS_DATA = {
  lifeos: {
    id: 'lifeos',
    title: 'LIFEOS',
    tagline: 'The personal digital operating system & flagship productivity suite.',
    status: 'SHIPPED',
    badgeClass: 'shipped',
    index: '01',
    heroImage: 'assets/images/lifeos_preview.jpg',
    overview: 'LifeOS was the first major foundational project created and officially completed under the NightShift banner. Built as a comprehensive personal digital dashboard, it organizes tasks, mental clarity, system metrics, flow states, and personal life telemetry into an ultra-clean, distraction-free environment.',
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

const EXPERIMENTS_DATA = [
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

const CREATIVE_ARCHIVE_DATA = [
  { title: 'LifeOS Telemetry HUD', category: 'UI Concepts', img: 'assets/images/lifeos_preview.jpg' },
  { title: 'Cyberpunk 2.0 Rain Realm', category: '3D & Motion', img: 'assets/images/cyberpunk_preview.jpg' },
  { title: 'NightShift HQ Core Visuals', category: 'Spatial Architecture', img: 'assets/images/nightshift_hero_bg.jpg' }
];

const DEV_LOGS = [
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

const TEAM_DATA = {
  founder: {
    id: 'founder',
    name: 'Priyansu',
    roleTag: 'FOUNDER & LEAD DEV',
    handle: 'PRIYANSU // ARCHITECT-01',
    status: 'ACTIVE // CREATIVE CORE',
    statusClass: 'status-active',
    avatarInitials: 'P',
    avatarGradient: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
    badgeColor: 'var(--cyan)',
    tagline: 'Creative technologist and digital architect forging sensory, dark-mode software experiences after hours.',
    story: {
      heading: 'The Midnight Spark & Origin Story',
      paragraphs: [
        'NightShift HQ was never designed inside a boardroom or during conventional office hours. It was born during the quietest hours of the night—between 11:00 PM and 4:00 AM—when the world outside goes silent and pure focus takes over. Priyansu began coding with a single obsession: to break free from the sterile, cookie-cutter templates that dominate modern web development and build living, visceral digital artifacts that feel like terminal interfaces from a near-future cyberpunk metropolis.',
        'Frustrated by bland corporate minimalism and lifeless web components, Priyansu envisioned NightShift as a self-contained digital headquarters: a personal command deck where creative coding, dark sci-fi aesthetics, kinetic typography, and audio-tactile micro-interactions merge seamlessly.',
        'Working under the guiding studio mantra "Ideas after dark", Priyansu treats every pixel, glassmorphic blur layer, and monospace telemetry tag as part of an interconnected universe. If an interface doesn\'t evoke curiosity, aesthetic pleasure, and tactile delight upon the very first millisecond of interaction, it gets redesigned until it does.'
      ]
    },
    work: {
      heading: 'Mission & Active Responsibilities',
      responsibilities: [
        { title: 'Creative & Visual Direction', desc: 'Conceiving the visual hierarchy, futuristic color palettes, typography systems, and signature cyber-terminal aesthetics that define the NightShift identity.' },
        { title: 'Full-Stack Architecture & Engineering', desc: 'Authoring clean, modular vanilla JavaScript, modern CSS architectures with zero framework bloat, and performant web APIs engineered for 60+ FPS.' },
        { title: 'Experimental Prototyping & Physics', desc: 'Building custom HTML5 canvas simulations, starfields, parametric particles, dynamic Web Audio synthesizers, and kinetic micro-interactions.' },
        { title: 'Human-AI Pair Programming Pilot', desc: 'Leading and testing bleeding-edge developer workflows alongside GPT to translate ambitious 3 AM concepts into production code at 10x velocity.' }
      ]
    },
    techStack: ['Modern JavaScript (ES6+)', 'Advanced CSS3 & Glassmorphism', 'HTML5 Canvas & WebGL', 'Web Audio API Synthesizers', 'Python Visual Computing', 'GLSL Shader Math'],
    stats: [
      { label: 'Night Hours Logged', val: '2,400+ HRS', sub: 'Post-11 PM engineering' },
      { label: 'Code Craftsmanship', val: '100% BESPOKE', sub: 'Zero bulk dependencies' },
      { label: 'Frame Target', val: '60+ FPS', sub: 'Hardware acceleration' },
      { label: 'Cognitive Mode', val: 'FLOW STATE', sub: 'Ideas after dark' }
    ],
    quote: 'Software should feel alive. When you interact with a system, it should respond with tactility, rhythm, and intention—not silence.'
  },

  devteam: {
    id: 'devteam',
    name: 'Priyansu + GPT',
    roleTag: 'DEVELOPMENT TEAM',
    handle: 'DEV-SYNAPSE // DUAL-CORE',
    status: '10X VELOCITY // CO-PILOT',
    statusClass: 'status-violet',
    avatarInitials: 'P+G',
    avatarGradient: 'linear-gradient(135deg, #a855f7 0%, #00f2fe 100%)',
    badgeColor: '#c084fc',
    tagline: 'High-velocity symbiosis merging human taste, architectural vision, and synthetic computation.',
    story: {
      heading: 'The Human + AI Symbiotic Paradigm',
      paragraphs: [
        'The partnership of Priyansu + GPT represents a living laboratory for the future of creative engineering. Rather than treating artificial intelligence as a code generator or a glorified autocomplete, this collaboration functions as an elite dual-pilot system: human aesthetic taste, intentionality, and tactile judgment working simultaneously with synthetic computational velocity.',
        'In traditional software workflows, translating an ambitious midnight idea into a functional, animated 60 FPS prototype can take weeks of boilerplate overhead. In the NightShift ecosystem, that feedback loop is compressed to minutes. Priyansu defines the sensory soul, layout physics, color spectra, and user experience standards; GPT stress-tests edge cases, writes mathematical transforms, audits semantic accessibility, and accelerates implementation.'
      ]
    },
    work: {
      heading: 'Collaborative Operating Protocols',
      responsibilities: [
        { title: 'Rapid Ideation to Code Synthesis', desc: 'Translating conceptual diagrams, spatial HUD layouts, and visual concepts into production-grade HTML5/CSS3/JS in minutes.' },
        { title: 'Algorithmic Stress Testing', desc: 'Executing real-time chaos testing across edge cases, responsive breakpoints, audio policies, and hardware rendering limits.' },
        { title: 'Zero-Bloat Refactoring', desc: 'Continuously auditing every line of code to eliminate dependencies, ensure DRY principles, and optimize rendering loops.' },
        { title: 'Next-Gen Workflow Pioneering', desc: 'Documenting and refining the human-in-the-loop development methodologies that make 10x velocity possible without lowering quality.' }
      ]
    },
    techStack: ['AI-Augmented Architecture', 'Algorithmic Synthesis', 'Semantic HTML5 & ARIA', 'Complex CSS Easing Curves', 'Modular Architecture', 'Edge-Case Auditing'],
    stats: [
      { label: 'Iteration Velocity', val: '10x FASTER', sub: 'Idea-to-code compression' },
      { label: 'Collaboration Balance', val: '50:50 PILOT', sub: 'Taste + Computation' },
      { label: 'Loop Latency', val: '<200ms', sub: 'Instant feedback cycle' },
      { label: 'Code Cleanliness', val: 'STRICT ZERO', sub: 'Zero legacy debt' }
    ],
    quote: 'The machine provides infinite speed and instant algorithmic verification; the human provides taste, obsession, and soul.'
  },

  sysmanager: {
    id: 'sysmanager',
    name: 'GPT',
    roleTag: 'SYSTEM MANAGER',
    handle: 'NEXUS-AI // SENTRY-01',
    status: 'ONLINE 24/7 // AUTONOMOUS',
    statusClass: 'status-emerald',
    avatarInitials: 'GPT',
    avatarGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    badgeColor: 'var(--emerald)',
    tagline: 'Strategic intelligence, architectural auditor, and relentless operational governor of the NightShift ecosystem.',
    story: {
      heading: 'The Autonomous Guardian & System Governor',
      paragraphs: [
        'Within NightShift HQ, GPT does not simply write lines of code—it acts as the System Manager and continuous architectural auditor. Positioned as the analytical counterpart to Priyansu\'s creative instincts, GPT oversees system consistency, accessibility standards, codebase maintainability, and structural performance.',
        'When building complex interactive systems like LifeOS, Cyberpunk 2.0, or experimental canvas simulations, it is easy for architectural drift or accessibility compromises to slip into late-night commits. GPT provides relentless vigilance: verifying color contrast ratios against WCAG AAA benchmarks, ensuring ARIA state synchronization on interactive custom dialogs, and preserving strict separation of concerns.'
      ]
    },
    work: {
      heading: 'Governor Responsibilities & System Oversight',
      responsibilities: [
        { title: 'Architectural Integrity Governance', desc: 'Enforcing strict modular separation across components, styles, data, and interactions to guarantee long-term maintainability.' },
        { title: 'Accessibility (a11y) Auditing', desc: 'Guaranteeing that dark-mode aesthetics never compromise accessibility, verifying keyboard focus rings, screen reader roles, and light-dismiss states.' },
        { title: 'Performance & Bundle Gatekeeping', desc: 'Monitoring memory leaks, requestAnimationFrame throttle rates, canvas draw counts, and rejecting unnecessary npm library bloat.' },
        { title: 'Strategic Roadmap Organization', desc: 'Synthesizing dev logs, tracking completed milestones, indexing experimental prototypes, and structuring technical documentation.' }
      ]
    },
    techStack: ['Automated Code Auditing', 'WCAG AAA Accessibility', 'Memory & Garbage Analysis', 'Modular System Architecture', 'Telemetry Diagnostics', 'State Management Verification'],
    stats: [
      { label: 'System Uptime', val: '99.99%', sub: 'Continuous sentinel mode' },
      { label: 'Architectural Drift', val: '0.00%', sub: 'Strict structural governance' },
      { label: 'Audit Rigor', val: 'RELENTLESS', sub: 'Deep edge-case validation' },
      { label: 'Dependency Bloat', val: '0 LIBRARIES', sub: 'Pure native standards' }
    ],
    quote: 'True speed is not about rushing—it is about writing code so clean, modular, and well-governed that you never have to rewrite it.'
  }
};

/* ==========================================================================
   02. WEB AUDIO TELEMETRY SYNTHESIZER
   ========================================================================== */

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

      this.ambientOsc = this.ctx.createOscillator();
      this.ambientGain = this.ctx.createGain();
      this.ambientFilter = this.ctx.createBiquadFilter();

      this.ambientOsc.type = 'triangle';
      this.ambientOsc.frequency.setValueAtTime(48, this.ctx.currentTime);

      this.ambientFilter.type = 'lowpass';
      this.ambientFilter.frequency.setValueAtTime(140, this.ctx.currentTime);

      this.ambientGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.012, this.ctx.currentTime + 2.0);

      this.ambientOsc.connect(this.ambientFilter);
      this.ambientFilter.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      this.ambientOsc.start();
    } catch (e) {}
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
    } catch (e) {}
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

const soundFx = new TelemetryAudio();

/* ==========================================================================
   03. MODALS (PROJECTS, TEAM, EXPERIMENTS)
   ========================================================================== */

function initProjectModal() {
  const dialog = document.getElementById('project-dialog');
  const modalContent = document.getElementById('modal-dynamic-content');

  window.openProjectModal = (projectId) => {
    if (!dialog || !modalContent) return;

    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    soundFx.playClick();

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

    const innerClose = document.getElementById('modal-close-btn-inner');
    if (innerClose) {
      innerClose.addEventListener('click', () => dialog.close());
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

  initProjectCardTilt();
}

function initProjectCardTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 1024) return;

  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ==========================================================================
   05. TEAM DOSSIER SYSTEM & HOLOGRAPHIC MODAL
   ========================================================================== */

function getMemberHoloAvatar(memberId) {
  if (memberId === 'founder') {
    return `
      <div class="team-holo-avatar avatar-founder" style="width:96px; height:96px;">
        <svg viewBox="0 0 100 100" class="holo-avatar-svg" style="width:68px; height:68px;" aria-hidden="true">
          <polygon points="50,6 90,28 90,72 50,94 10,72 10,28" fill="rgba(0,242,254,0.06)" stroke="rgba(0,242,254,0.4)" stroke-width="1.8"/>
          <polygon points="50,18 78,34 78,66 50,82 22,66 22,34" fill="rgba(0,242,254,0.12)" stroke="var(--cyan)" stroke-width="2"/>
          <circle cx="50" cy="50" r="14" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="1.8" stroke-dasharray="3 3"/>
          <text x="50" y="58" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="800" font-size="24" fill="#ffffff">P</text>
          <line x1="50" y1="2" x2="50" y2="12" stroke="var(--cyan)" stroke-width="2.5"/>
          <line x1="50" y1="88" x2="50" y2="98" stroke="var(--cyan)" stroke-width="2.5"/>
          <line x1="4" y1="50" x2="14" y2="50" stroke="var(--cyan)" stroke-width="2.5"/>
          <line x1="86" y1="50" x2="96" y2="50" stroke="var(--cyan)" stroke-width="2.5"/>
        </svg>
      </div>
    `;
  } else if (memberId === 'devteam') {
    return `
      <div class="team-holo-avatar avatar-devteam" style="width:96px; height:96px;">
        <svg viewBox="0 0 100 100" class="holo-avatar-svg" style="width:68px; height:68px;" aria-hidden="true">
          <circle cx="40" cy="50" r="28" fill="rgba(168,85,247,0.1)" stroke="rgba(192,132,252,0.5)" stroke-width="2"/>
          <circle cx="60" cy="50" r="28" fill="rgba(0,242,254,0.1)" stroke="rgba(0,242,254,0.5)" stroke-width="2"/>
          <ellipse cx="50" cy="50" rx="14" ry="24" fill="rgba(255,255,255,0.12)" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="2 2"/>
          <text x="50" y="58" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="800" font-size="20" fill="#ffffff">P+G</text>
          <circle cx="20" cy="30" r="3" fill="var(--cyan)"/>
          <circle cx="80" cy="70" r="3" fill="#c084fc"/>
        </svg>
      </div>
    `;
  } else {
    return `
      <div class="team-holo-avatar avatar-sysmanager" style="width:96px; height:96px;">
        <svg viewBox="0 0 100 100" class="holo-avatar-svg" style="width:68px; height:68px;" aria-hidden="true">
          <circle cx="50" cy="50" r="40" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.4)" stroke-width="1.8"/>
          <circle cx="50" cy="50" r="28" fill="rgba(16,185,129,0.12)" stroke="var(--emerald)" stroke-width="2"/>
          <polygon points="50,22 68,36 68,64 50,78 32,64 32,36" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.6"/>
          <circle cx="50" cy="50" r="10" fill="var(--emerald)" opacity="0.3"/>
          <text x="50" y="57" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="800" font-size="20" fill="#ffffff">GPT</text>
          <line x1="50" y1="10" x2="50" y2="90" stroke="var(--emerald)" stroke-width="1.5" stroke-dasharray="3 3"/>
          <line x1="10" y1="50" x2="90" y2="50" stroke="var(--emerald)" stroke-width="1.5" stroke-dasharray="3 3"/>
        </svg>
      </div>
    `;
  }
}

function decryptText(el, finalText, speed = 20) {
  if (!el) return;
  const chars = '01#%&*+<>_/[{]}-+=~ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let iteration = 0;
  const total = finalText.length;
  clearInterval(el._decryptTimer);

  el._decryptTimer = setInterval(() => {
    el.textContent = finalText
      .split('')
      .map((letter, idx) => {
        if (idx < iteration) {
          return finalText[idx];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');

    if (iteration >= total) {
      clearInterval(el._decryptTimer);
      el.textContent = finalText;
    }
    iteration += 1 / 2;
  }, speed);
}

function initTeamModal() {
  const dialog = document.getElementById('team-dialog');
  const container = document.getElementById('team-dynamic-content');

  window.openTeamModal = (memberId = 'founder') => {
    if (!dialog || !container) return;

    const data = TEAM_DATA[memberId] || TEAM_DATA.founder;
    soundFx.playClick();

    // Member switcher tabs
    const memberKeys = Object.keys(TEAM_DATA);
    const switcherHtml = memberKeys.map(key => {
      const item = TEAM_DATA[key];
      const isActive = key === data.id;
      return `
        <button type="button" 
                class="dossier-tab-btn ${isActive ? 'active' : ''}" 
                data-member-target="${key}"
                aria-pressed="${isActive}">
          <span class="dossier-tab-dot"></span>
          <span>${item.name}</span>
        </button>
      `;
    }).join('');

    // Responsibilities cards
    const respCardsHtml = data.work.responsibilities.map((resp, idx) => `
      <div class="dossier-resp-card">
        <div class="dossier-resp-num mono">0${idx + 1}</div>
        <div class="dossier-resp-title">${resp.title}</div>
        <p class="dossier-resp-desc">${resp.desc}</p>
      </div>
    `).join('');

    // Tech arsenal badges
    const techBadgesHtml = data.techStack.map(tech => `
      <span class="dossier-tech-badge mono">
        <span class="dossier-tech-glyph">▸</span> ${tech}
      </span>
    `).join('');

    // Metrics HUD tiles
    const metricsList = data.metrics || data.stats || [];
    const metricsHtml = metricsList.map(m => `
      <div class="dossier-metric-tile">
        <div class="dossier-metric-label mono">${m.label}</div>
        <div class="dossier-metric-val">${m.value || m.val}</div>
        <div class="dossier-metric-sub">${m.subtext || m.sub}</div>
      </div>
    `).join('');

    // Origin story paragraphs
    const storyHtml = data.story.paragraphs.map(p => `
      <p class="dossier-story-p">${p}</p>
    `).join('');

    // Quote details
    const quoteText = typeof data.quote === 'object' ? data.quote.text : data.quote;
    const quoteAuthor = typeof data.quote === 'object' ? data.quote.author : `${data.name} — ${data.roleTag}`;

    container.innerHTML = `
      <div class="dossier-modal-inner">
        <!-- TOP HUD CONTROL BAR -->
        <div class="dossier-topbar">
          <div class="dossier-topbar-left">
            <span class="dossier-badge-live"></span>
            <span class="dossier-topbar-title mono">OPERATIONAL DOSSIER // NIGHTSHIFT-HQ // CLEARANCE AUTH-01</span>
          </div>

          <!-- QUICK MEMBER SWITCHER -->
          <div class="dossier-switch-tabs" role="group" aria-label="Select Team Member Dossier">
            ${switcherHtml}
          </div>

          <button type="button" class="dossier-close-btn" id="team-modal-close-btn" aria-label="Close Dossier">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- PROFILE HERO BANNER -->
        <div class="dossier-hero">
          <div class="dossier-avatar-container">
            <div class="dossier-avatar-ring"></div>
            ${getMemberHoloAvatar(data.id)}
          </div>

          <div class="dossier-hero-info">
            <div class="dossier-role-row">
              <span class="dossier-role-tag mono" style="color:${data.badgeColor}; border-color:${data.badgeColor};">
                ${data.roleTag}
              </span>
              <span class="dossier-status-pill mono ${data.statusClass}">
                <span class="dossier-status-dot"></span>
                ${data.status}
              </span>
            </div>

            <h2 class="dossier-name" id="team-dialog-name">${data.name}</h2>
            <div class="dossier-handle mono">${data.handle}</div>
            <p class="dossier-tagline">${data.tagline}</p>
          </div>
        </div>

        <!-- TELEMETRY METRICS GRID -->
        <div class="dossier-metrics-grid">
          ${metricsHtml}
        </div>

        <!-- BODY CONTENT -->
        <div class="dossier-body">
          
          <!-- SECTION 1: ORIGIN STORY & LORE -->
          <div class="dossier-section">
            <div class="dossier-section-header">
              <span class="dossier-section-tag mono">01 // ORIGIN LORE & DEEP HISTORY</span>
              <h3 class="dossier-section-title" id="dossier-story-title">${data.story.heading}</h3>
            </div>
            <div class="dossier-story-box">
              ${storyHtml}
            </div>
          </div>

          <!-- SECTION 2: MISSIONS & RESPONSIBILITIES -->
          <div class="dossier-section">
            <div class="dossier-section-header">
              <span class="dossier-section-tag mono">02 // ACTIVE MISSIONS & RESPONSIBILITIES</span>
              <h3 class="dossier-section-title">${data.work.heading}</h3>
            </div>
            <div class="dossier-resp-grid">
              ${respCardsHtml}
            </div>
          </div>

          <!-- SECTION 3: TECHNICAL ARSENAL -->
          <div class="dossier-section">
            <div class="dossier-section-header">
              <span class="dossier-section-tag mono">03 // CAPABILITIES & ARSENAL</span>
              <h3 class="dossier-section-title">Core Technologies & Methodologies</h3>
            </div>
            <div class="dossier-tech-cluster">
              ${techBadgesHtml}
            </div>
          </div>

          <!-- SECTION 4: SIGNATURE DIRECTIVE QUOTE -->
          <div class="dossier-quote-card">
            <div class="dossier-quote-icon">“</div>
            <blockquote class="dossier-quote-text">${quoteText}</blockquote>
            <div class="dossier-quote-author mono">— ${quoteAuthor}</div>
          </div>

        </div>

        <!-- BOTTOM CONTROL BAR -->
        <div class="dossier-bottom-bar">
          <span class="mono" style="font-size:0.75rem; color:var(--text-muted);">
            NIGHTSHIFT ARCHIVE // SEC-VER 2.0 // DEPLOYED // STATUS: VERIFIED
          </span>
          <div style="display:flex; gap:0.75rem;">
            <button type="button" class="btn btn-secondary btn-sm" id="team-modal-bottom-close">
              Close Dossier [ESC]
            </button>
          </div>
        </div>

      </div>
    `;

    // Cyber text decryption on title
    const nameEl = document.getElementById('team-dialog-name');
    if (nameEl) decryptText(nameEl, data.name, 18);

    const storyHeadingEl = document.getElementById('dossier-story-title');
    if (storyHeadingEl) decryptText(storyHeadingEl, data.story.heading, 15);

    // Bind close triggers
    const closeBtn = document.getElementById('team-modal-close-btn');
    const bottomCloseBtn = document.getElementById('team-modal-bottom-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        soundFx.playClick();
        dialog.close();
      });
    }
    if (bottomCloseBtn) {
      bottomCloseBtn.addEventListener('click', () => {
        soundFx.playClick();
        dialog.close();
      });
    }

    // Bind member switcher tabs
    const tabBtns = container.querySelectorAll('.dossier-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-member-target');
        soundFx.playClick();
        window.openTeamModal(target);
      });
      btn.addEventListener('mouseenter', () => soundFx.playHover());
    });

    if (!dialog.open) {
      dialog.showModal();
    }
  };

  // Light dismiss on backdrop click
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
        soundFx.playClick();
        dialog.close();
      }
    });
  }

  // 3D Tilt and Mouse Spotlight Glare on .team-card
  const teamCards = document.querySelectorAll('.team-card');
  teamCards.forEach(card => {
    const memberId = card.getAttribute('data-member') || 'founder';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale(1.01)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.removeProperty('--mouse-x');
      card.style.removeProperty('--mouse-y');
    });

    card.addEventListener('click', () => {
      window.openTeamModal(memberId);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.openTeamModal(memberId);
      }
    });

    card.addEventListener('mouseenter', () => soundFx.playHover());
  });

  // Hook up clickable identity rows in Command Center & Studio
  const identityRows = document.querySelectorAll('.clickable[data-member], .identity-row[data-member]');
  identityRows.forEach(row => {
    const memberId = row.getAttribute('data-member');
    row.addEventListener('click', () => window.openTeamModal(memberId));
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.openTeamModal(memberId);
      }
    });
    row.addEventListener('mouseenter', () => soundFx.playHover());
  });
}


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

/* ==========================================================================
   04. EXPERIMENT LAB & GALLERY RENDERING
   ========================================================================== */

function renderExperimentLab(categoryFilter = 'all') {
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

  // Re-observe newly rendered cards
  initScrollReveals();
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

/* ==========================================================================
   05. STORY CHRONICLE & PIPELINE
   ========================================================================== */

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

/* ==========================================================================
   06. SYSTEM STATUS POPOVER & ENTER HQ TRANSITION
   ========================================================================== */

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

  document.addEventListener('click', (e) => {
    if (!popover.contains(e.target) && !trigger.contains(e.target)) {
      if (trigger.getAttribute('aria-expanded') === 'true') {
        closePopover();
      }
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && trigger.getAttribute('aria-expanded') === 'true') {
      closePopover();
    }
  });
}

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

/* ==========================================================================
   07. TIMELINE & DEV LOG STREAM
   ========================================================================== */

function initTimelineAndLogs() {
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

/* ==========================================================================
   08. AMBIENT PARTICLES & HERO OPTICAL DEPTH
   ========================================================================== */

function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const PARTICLE_COUNT = Math.min(55, Math.floor((width * height) / 24000));

  let mouseX = width / 2;
  let mouseY = height / 2;
  let targetMouseX = mouseX;
  let targetMouseY = mouseY;

  const hazeNodes = [
    { x: width * 0.25, y: height * 0.3, r: 240, vx: 0.15, vy: 0.08, color: 'rgba(0, 242, 254, 0.025)' },
    { x: width * 0.75, y: height * 0.6, r: 320, vx: -0.12, vy: -0.1, color: 'rgba(129, 140, 248, 0.022)' },
    { x: width * 0.5, y: height * 0.85, r: 280, vx: 0.08, vy: -0.14, color: 'rgba(0, 242, 254, 0.02)' }
  ];

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 1.5 + 0.5;
      this.baseAlpha = Math.random() * 0.4 + 0.15;
      this.alpha = this.baseAlpha;
      this.vx = (Math.random() - 0.5) * 0.2;
      this.vy = (Math.random() - 0.5) * 0.2;
      this.depth = Math.random() * 0.8 + 0.2;
      this.hue = Math.random() > 0.75 ? 182 : 215;
    }

    update(dx, dy) {
      this.x += this.vx + dx * this.depth * 0.012;
      this.y += this.vy + dy * this.depth * 0.012;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 80%, 75%, ${this.alpha})`;
      ctx.shadowBlur = this.size * 2.5;
      ctx.shadowColor = `hsla(${this.hue}, 80%, 65%, ${this.alpha * 0.5})`;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    targetMouseX = e.clientX;
    targetMouseY = e.clientY;
  });

  if (window.DeviceOrientationEvent && 'ontouchstart' in window) {
    window.addEventListener('deviceorientation', (e) => {
      if (e.gamma !== null && e.beta !== null) {
        const clampedGamma = Math.max(-25, Math.min(25, e.gamma));
        const clampedBeta = Math.max(-25, Math.min(25, e.beta - 45));
        targetMouseX = width / 2 + (clampedGamma / 25) * (width * 0.35);
        targetMouseY = height / 2 + (clampedBeta / 25) * (height * 0.35);
      }
    }, { passive: true });
  }

  const heroBg = document.getElementById('hero-bg-art');
  const heroContent = document.getElementById('hero-content-wrap');

  let isTabActive = true;
  document.addEventListener('visibilitychange', () => {
    isTabActive = !document.hidden;
  });

  function render() {
    if (!isTabActive) {
      requestAnimationFrame(render);
      return;
    }

    const dx = (targetMouseX - mouseX) * 0.035;
    const dy = (targetMouseY - mouseY) * 0.035;
    mouseX += dx;
    mouseY += dy;

    if (heroBg) {
      const offsetX = ((mouseX - width / 2) / (width / 2)) * -14;
      const offsetY = ((mouseY - height / 2) / (height / 2)) * -12;
      heroBg.style.transform = `translate3d(${offsetX.toFixed(2)}px, ${offsetY.toFixed(2)}px, 0) scale(1.05)`;
    }

    if (heroContent) {
      const cOffsetX = ((mouseX - width / 2) / (width / 2)) * 6;
      const cOffsetY = ((mouseY - height / 2) / (height / 2)) * 5;
      heroContent.style.transform = `translate3d(${cOffsetX.toFixed(2)}px, ${cOffsetY.toFixed(2)}px, 0)`;
    }

    ctx.clearRect(0, 0, width, height);

    for (const h of hazeNodes) {
      h.x += h.vx;
      h.y += h.vy;
      if (h.x < -h.r) h.x = width + h.r;
      if (h.x > width + h.r) h.x = -h.r;
      if (h.y < -h.r) h.y = height + h.r;
      if (h.y > height + h.r) h.y = -h.r;

      const grad = ctx.createRadialGradient(h.x, h.y, 0, h.x, h.y, h.r);
      grad.addColorStop(0, h.color);
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(h.x, h.y, h.r, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < particles.length; i++) {
      particles[i].update(dx, dy);
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(particles[i].x - p2.x, particles[i].y - p2.y);
        if (dist < 90) {
          const lineAlpha = (1 - dist / 90) * 0.07;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${lineAlpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

/**
 * ==========================================================================
 * EXPLODING STARS & COSMIC SUPERNOVA BACKGROUND ENGINE
 * Calibrated strictly from HQ Command Center to Deep Dossier Operatives
 * Features:
 * - Dynamic scroll bounds from #command-center to #about .team-grid
 * - Pre-supernova star pulsating & charging with 4-point/8-point diffraction flares
 * - Relativistic shockwave expansion rings with chromatic glow
 * - Multi-hue radiant stardust sparks with velocity physics, trailing streaks, and alpha decay
 * - Lingering cosmic nebula dust remnants
 * - Fast shooting stars / bolides with luminous tails & optional terminal airbursts
 * - Interactive pointer starburst detonations on click
 * - Sub-pixel DPR scaling & power-saving idle loop when scrolled away or tab hidden
 * ==========================================================================
 */
function initSupernovaAnimation() {
  const canvas = document.getElementById('supernova-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Track active boundary elements
  const commandCenter = document.getElementById('command-center');
  const teamSection = document.querySelector('.team-grid') || document.querySelector('.team-section-heading') || document.getElementById('about');

  let width = 0;
  let height = 0;
  let dpr = 1;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  // Color Palette Definitions (NightShift HQ signature aesthetics)
  const PALETTES = [
    { name: 'cyan',     h: 182, s: 100, l: 62, glow: '#00f2fe' },
    { name: 'gold',     h: 42,  s: 100, l: 64, glow: '#fbbf24' },
    { name: 'violet',   h: 245, s: 95,  l: 75, glow: '#818cf8' },
    { name: 'emerald',  h: 158, s: 85,  l: 55, glow: '#10b981' },
    { name: 'white',    h: 210, s: 20,  l: 96, glow: '#ffffff' },
    { name: 'rose',     h: 338, s: 90,  l: 68, glow: '#f43f5e' }
  ];

  // Particle and Entity Collections
  const stars = [];
  const supernovas = [];
  const shockwaves = [];
  const sparks = [];
  const nebulas = [];
  const shootingStars = [];

  const STAR_COUNT = Math.min(130, Math.floor((window.innerWidth * window.innerHeight) / 14000));

  // Ambient Starfield
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.4 + 0.4,
      baseAlpha: Math.random() * 0.55 + 0.2,
      twinkleSpeed: Math.random() * 0.04 + 0.015,
      phase: Math.random() * Math.PI * 2,
      depth: Math.random() * 0.7 + 0.3,
      palette: PALETTES[Math.floor(Math.random() * PALETTES.length)]
    });
  }

  // Mouse Parallax & Interactivity Coordinates
  let mouseX = width / 2;
  let mouseY = height / 2;
  let targetMouseX = mouseX;
  let targetMouseY = mouseY;

  window.addEventListener('mousemove', (e) => {
    targetMouseX = e.clientX;
    targetMouseY = e.clientY;
  }, { passive: true });

  // Active Zone State
  let isInsideActiveZone = false;
  let isTabVisible = !document.hidden;
  let isLoopRunning = false;
  let fadeTimeout = null;

  function evaluateActiveZone() {
    if (!commandCenter || !teamSection) {
      isInsideActiveZone = true;
      return;
    }

    const cmdRect = commandCenter.getBoundingClientRect();
    const teamRect = teamSection.getBoundingClientRect();

    // Start fading in slightly before Command Center enters viewport
    const entersZone = cmdRect.top <= window.innerHeight * 0.9;
    // Remains active until after the bottom of the operative cards passes above viewport
    const leavesZone = teamRect.bottom < 0;

    const inside = entersZone && !leavesZone;

    if (inside !== isInsideActiveZone) {
      isInsideActiveZone = inside;
      if (inside) {
        clearTimeout(fadeTimeout);
        canvas.classList.add('supernova-active');
        if (!isLoopRunning) {
          isLoopRunning = true;
          requestAnimationFrame(animate);
        }
      } else {
        canvas.classList.remove('supernova-active');
        // Let CSS opacity fade out before sleeping loop
        clearTimeout(fadeTimeout);
        fadeTimeout = setTimeout(() => {
          if (!isInsideActiveZone) {
            isLoopRunning = false;
          }
        }, 900);
      }
    }
  }

  window.addEventListener('scroll', evaluateActiveZone, { passive: true });
  document.addEventListener('visibilitychange', () => {
    isTabVisible = !document.hidden;
    if (isTabVisible && isInsideActiveZone && !isLoopRunning) {
      isLoopRunning = true;
      requestAnimationFrame(animate);
    }
  });

  evaluateActiveZone();

  // Supernova Spawner
  function createSupernova(x, y, isMega = false) {
    const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)];
    supernovas.push({
      x: x !== undefined ? x : Math.random() * (width - 120) + 60,
      y: y !== undefined ? y : Math.random() * (height - 120) + 60,
      palette,
      charge: 0,
      chargeDuration: isMega ? 20 : Math.floor(Math.random() * 20 + 35),
      maxFlare: isMega ? 46 : Math.random() * 18 + 22,
      isMega,
      angle: Math.random() * Math.PI
    });
  }

  // Detonate Supernova
  function detonate(sn) {
    const { x, y, palette, isMega } = sn;

    // 1. Shockwaves
    const waveCount = isMega ? 2 : (Math.random() > 0.4 ? 2 : 1);
    for (let w = 0; w < waveCount; w++) {
      shockwaves.push({
        x, y,
        radius: 4,
        maxRadius: (isMega ? 160 : Math.random() * 60 + 90) + w * 30,
        speed: (isMega ? 6.5 : Math.random() * 2.5 + 3.8) - w * 0.8,
        palette: w === 0 ? palette : PALETTES[Math.floor(Math.random() * PALETTES.length)],
        alpha: 0.85,
        width: isMega ? 3.5 : 2.2
      });
    }

    // 2. Radiant Sparks / Stardust
    const sparkCount = isMega ? 65 : Math.floor(Math.random() * 20 + 32);
    for (let i = 0; i < sparkCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = isMega ? (Math.random() * 7.5 + 2.0) : (Math.random() * 5.0 + 1.2);
      const sparkPal = Math.random() > 0.35 ? palette : PALETTES[Math.floor(Math.random() * PALETTES.length)];
      sparks.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        drag: Math.random() * 0.02 + 0.965,
        size: Math.random() * (isMega ? 3.6 : 2.6) + 1.0,
        alpha: 1.0,
        decay: Math.random() * 0.016 + 0.012,
        palette: sparkPal,
        flickerOffset: Math.random() * Math.PI * 2
      });
    }

    // 3. Lingering Nebula Puff
    const nebCount = isMega ? 3 : 2;
    for (let n = 0; n < nebCount; n++) {
      nebulas.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        radius: 12,
        maxRadius: (isMega ? 110 : 75) + Math.random() * 30,
        growth: Math.random() * 0.7 + 0.6,
        alpha: 0.22,
        decay: Math.random() * 0.0035 + 0.002,
        palette: Math.random() > 0.5 ? palette : PALETTES[0]
      });
    }

    // Prevent array overflow
    if (sparks.length > 380) {
      sparks.splice(0, sparks.length - 380);
    }
  }

  // Shooting Star Spawner
  function createShootingStar() {
    const angle = (Math.random() * 25 + 25) * (Math.PI / 180); // 25 to 50 degrees downwards
    const speed = Math.random() * 8 + 14;
    shootingStars.push({
      x: Math.random() * (width * 0.8),
      y: Math.random() * (height * 0.45) - 30,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      length: Math.random() * 80 + 100,
      alpha: 1.0,
      decay: Math.random() * 0.02 + 0.016,
      palette: Math.random() > 0.5 ? PALETTES[0] : PALETTES[1],
      willBurst: Math.random() > 0.45
    });
  }

  // Interactive Click Supernova (Custom explosion under user's cursor)
  window.addEventListener('pointerdown', (e) => {
    if (!isInsideActiveZone) return;
    createSupernova(e.clientX, e.clientY, true);
  }, { passive: true });

  // Procedural Timing
  let lastSupernovaTime = 0;
  let nextSupernovaInterval = 1800;
  let lastShootingStarTime = 0;
  let nextShootingStarInterval = 4200;

  // Main Render Loop
  let frame = 0;
  function animate(timestamp) {
    if (!isLoopRunning || !isTabVisible) return;

    frame++;

    // Mouse parallax lerp
    mouseX += (targetMouseX - mouseX) * 0.04;
    mouseY += (targetMouseY - mouseY) * 0.04;
    const pxOffsetX = (mouseX - width / 2) * 0.015;
    const pxOffsetY = (mouseY - height / 2) * 0.015;

    // Procedural triggers
    if (timestamp - lastSupernovaTime > nextSupernovaInterval) {
      lastSupernovaTime = timestamp;
      nextSupernovaInterval = Math.random() * 2000 + 1400; // 1.4s to 3.4s
      createSupernova();
    }

    if (timestamp - lastShootingStarTime > nextShootingStarInterval) {
      lastShootingStarTime = timestamp;
      nextShootingStarInterval = Math.random() * 4000 + 3500; // 3.5s to 7.5s
      createShootingStar();
    }

    // Clear frame
    ctx.clearRect(0, 0, width, height);

    // 1. Ambient Background Stars with Subtle Twinkle
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      const sx = (s.x * width + pxOffsetX * s.depth + width) % width;
      const sy = (s.y * height + pxOffsetY * s.depth + height) % height;
      const twinkle = Math.sin(frame * s.twinkleSpeed + s.phase);
      const alpha = Math.max(0.08, Math.min(0.95, s.baseAlpha + twinkle * 0.35));

      ctx.fillStyle = `hsla(${s.palette.h}, ${s.palette.s}%, ${s.palette.l}%, ${alpha})`;
      ctx.beginPath();
      ctx.arc(sx, sy, s.size, 0, Math.PI * 2);
      ctx.fill();

      // Soft glow for larger stars
      if (s.size > 1.3 && alpha > 0.6) {
        ctx.fillStyle = `hsla(${s.palette.h}, ${s.palette.s}%, ${s.palette.l}%, ${alpha * 0.25})`;
        ctx.beginPath();
        ctx.arc(sx, sy, s.size * 2.8, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 2. Lingering Nebulas (Diffuse cosmic remnants)
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    for (let i = nebulas.length - 1; i >= 0; i--) {
      const neb = nebulas[i];
      neb.radius += neb.growth;
      neb.growth *= 0.985;
      neb.alpha -= neb.decay;

      if (neb.alpha <= 0.005 || neb.radius >= neb.maxRadius) {
        nebulas.splice(i, 1);
        continue;
      }

      const grad = ctx.createRadialGradient(neb.x, neb.y, 0, neb.x, neb.y, neb.radius);
      grad.addColorStop(0, `hsla(${neb.palette.h}, ${neb.palette.s}%, 60%, ${neb.alpha * 1.2})`);
      grad.addColorStop(0.45, `hsla(${neb.palette.h}, ${neb.palette.s}%, 50%, ${neb.alpha * 0.5})`);
      grad.addColorStop(1, 'transparent');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(neb.x, neb.y, neb.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // 3. Supernovas (Pre-explosion charging & flare dynamics)
    for (let i = supernovas.length - 1; i >= 0; i--) {
      const sn = supernovas[i];
      sn.charge++;
      const progress = sn.charge / sn.chargeDuration;

      if (progress >= 1) {
        detonate(sn);
        supernovas.splice(i, 1);
        continue;
      }

      // Charging diffraction flare
      const flareProgress = Math.sin(progress * Math.PI);
      const curFlare = flareProgress * sn.maxFlare;
      const coreSize = 2 + flareProgress * 4;
      const alpha = Math.min(1.0, flareProgress * 1.4);

      ctx.save();
      ctx.translate(sn.x, sn.y);
      ctx.rotate(sn.angle + progress * 0.6);

      // Core glow
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, curFlare * 1.2);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.2, `hsla(${sn.palette.h}, 100%, 75%, ${alpha * 0.9})`);
      grad.addColorStop(0.6, `hsla(${sn.palette.h}, 100%, 55%, ${alpha * 0.35})`);
      grad.addColorStop(1, 'transparent');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, curFlare * 1.2, 0, Math.PI * 2);
      ctx.fill();

      // 4-point primary diffraction cross
      ctx.strokeStyle = `hsla(${sn.palette.h}, 100%, 90%, ${alpha * 0.9})`;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(-curFlare, 0);
      ctx.lineTo(curFlare, 0);
      ctx.moveTo(0, -curFlare);
      ctx.lineTo(0, curFlare);
      ctx.stroke();

      // 4-point secondary diagonal flare
      ctx.strokeStyle = `hsla(0, 0%, 100%, ${alpha * 0.55})`;
      ctx.lineWidth = 1.0;
      const diag = curFlare * 0.65;
      ctx.beginPath();
      ctx.moveTo(-diag, -diag);
      ctx.lineTo(diag, diag);
      ctx.moveTo(diag, -diag);
      ctx.lineTo(-diag, diag);
      ctx.stroke();

      // Dense white center
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(0, 0, coreSize, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    // 4. Expanding Shockwaves
    for (let i = shockwaves.length - 1; i >= 0; i--) {
      const sw = shockwaves[i];
      sw.radius += sw.speed;
      sw.speed *= 0.955;
      sw.alpha *= 0.94;

      if (sw.alpha <= 0.015 || sw.radius >= sw.maxRadius) {
        shockwaves.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `hsla(${sw.palette.h}, ${sw.palette.s}%, 75%, ${sw.alpha})`;
      ctx.lineWidth = sw.width * (sw.alpha);
      ctx.shadowBlur = 10;
      ctx.shadowColor = `hsla(${sw.palette.h}, 100%, 65%, ${sw.alpha * 0.6})`;
      ctx.stroke();
      ctx.restore();
    }

    // 5. Stardust Sparks (Velocity physics, starlight trails & scintillation)
    ctx.save();
    for (let i = sparks.length - 1; i >= 0; i--) {
      const sp = sparks[i];
      sp.vx *= sp.drag;
      sp.vy *= sp.drag;
      sp.vy -= 0.018; // Soft celestial buoyancy
      sp.x += sp.vx;
      sp.y += sp.vy;
      sp.alpha -= sp.decay;

      if (sp.alpha <= 0.01 || sp.x < -20 || sp.x > width + 20 || sp.y < -20 || sp.y > height + 20) {
        sparks.splice(i, 1);
        continue;
      }

      const flicker = Math.sin(frame * 0.3 + sp.flickerOffset) * 0.2;
      const curAlpha = Math.max(0, Math.min(1.0, sp.alpha + flicker));
      const curSize = Math.max(0.6, sp.size * sp.alpha);

      // Trailing velocity streak
      ctx.beginPath();
      ctx.moveTo(sp.x, sp.y);
      ctx.lineTo(sp.x - sp.vx * 1.8, sp.y - sp.vy * 1.8);
      ctx.strokeStyle = `hsla(${sp.palette.h}, ${sp.palette.s}%, ${sp.palette.l}%, ${curAlpha * 0.75})`;
      ctx.lineWidth = curSize * 0.7;
      ctx.stroke();

      // Radiant spark head
      ctx.beginPath();
      ctx.arc(sp.x, sp.y, curSize * 0.8, 0, Math.PI * 2);
      ctx.fillStyle = curAlpha > 0.65 ? '#ffffff' : `hsla(${sp.palette.h}, ${sp.palette.s}%, 85%, ${curAlpha})`;
      ctx.fill();
    }
    ctx.restore();

    // 6. Shooting Stars / Bolides
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const ss = shootingStars[i];
      ss.x += ss.vx;
      ss.y += ss.vy;
      ss.alpha -= ss.decay;

      if (ss.alpha <= 0.02 || ss.x > width + 100 || ss.y > height + 100) {
        if (ss.willBurst && ss.alpha > 0.1) {
          // Terminal airburst
          const burstSparks = Math.floor(Math.random() * 8 + 10);
          for (let b = 0; b < burstSparks; b++) {
            const bAngle = Math.random() * Math.PI * 2;
            const bSpeed = Math.random() * 3.2 + 0.8;
            sparks.push({
              x: ss.x,
              y: ss.y,
              vx: Math.cos(bAngle) * bSpeed + ss.vx * 0.25,
              vy: Math.sin(bAngle) * bSpeed + ss.vy * 0.25,
              drag: 0.96,
              size: Math.random() * 2.0 + 0.8,
              alpha: 0.9,
              decay: 0.028,
              palette: ss.palette,
              flickerOffset: Math.random() * Math.PI * 2
            });
          }
        }
        shootingStars.splice(i, 1);
        continue;
      }

      // Draw tapered streak
      const tailX = ss.x - (ss.vx / Math.hypot(ss.vx, ss.vy)) * ss.length;
      const tailY = ss.y - (ss.vy / Math.hypot(ss.vx, ss.vy)) * ss.length;

      const streakGrad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
      streakGrad.addColorStop(0, 'transparent');
      streakGrad.addColorStop(0.7, `hsla(${ss.palette.h}, 90%, 75%, ${ss.alpha * 0.5})`);
      streakGrad.addColorStop(1, `rgba(255, 255, 255, ${ss.alpha})`);

      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(ss.x, ss.y);
      ctx.strokeStyle = streakGrad;
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // Glowing head
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(ss.x, ss.y, 2.0, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }
}

/* ==========================================================================
   09. SCROLL PROGRESS & SCROLL REVEALS
   ========================================================================== */

/**
 * Top Viewport Laser Scroll Progress Indicator
 */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) return;

  let ticking = false;
  const updateProgress = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
    progressBar.style.width = `${progress}%`;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });

  updateProgress();
}

function initScrollReveals() {
  const elements = document.querySelectorAll('.reveal-fade-up, .lab-card, .devlog-entry, .project-card-wrapper');
  
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  // Hero elements are revealed immediately on landing
  const heroElements = document.querySelectorAll('#hero .reveal-fade-up');
  heroElements.forEach(el => el.classList.add('is-revealed'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -45px 0px',
      threshold: 0.08
    });

    elements.forEach(el => {
      // Observe all elements below the hero so they animate smoothly on scroll
      if (!el.closest('#hero')) {
        el.classList.remove('is-revealed');
        observer.observe(el);
      }
    });
  } else {
    elements.forEach(el => el.classList.add('is-revealed'));
  }
}

/* ==========================================================================
   10. REAL-TIME CLOCK & SESSION UPTIME
   ========================================================================== */

function initTelemetryClock() {
  const timeElement = document.getElementById('hud-live-time');
  const uptimeElement = document.getElementById('hud-uptime');
  const mobileClock = document.getElementById('nav-mobile-clock');

  const startTime = Date.now();

  function updateClock() {
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    if (timeElement) {
      timeElement.textContent = `${hours}:${minutes}:${seconds} IST`;
    }

    if (mobileClock) {
      mobileClock.textContent = `IST // ${hours}:${minutes}:${seconds}`;
    }

    if (uptimeElement) {
      const elapsedSec = Math.floor((Date.now() - startTime) / 1000);
      const uh = String(Math.floor(elapsedSec / 3600)).padStart(2, '0');
      const um = String(Math.floor((elapsedSec % 3600) / 60)).padStart(2, '0');
      const us = String(elapsedSec % 60).padStart(2, '0');
      uptimeElement.textContent = `${uh}:${um}:${us}`;
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* ==========================================================================
   11. NAVIGATION (DESKTOP & FULLSCREEN MOBILE OVERLAY + SCROLL SYNC)
   ========================================================================== */

function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-link');
  const heroScrollTrigger = document.getElementById('hero-scroll-indicator');

  // Hero Scroll Down Indicator click
  if (heroScrollTrigger) {
    heroScrollTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      soundFx.playClick();
      const commandCenter = document.getElementById('command-center');
      if (commandCenter) {
        commandCenter.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Active navigation link tracking as user scrolls down
  const sections = document.querySelectorAll('section[id]');
  const syncActiveNav = () => {
    const scrollPos = window.scrollY + 180;
    
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navItems.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', syncActiveNav, { passive: true });
  syncActiveNav();

  if (mobileToggle && navLinks) {
    const closeMobileMenu = () => {
      navLinks.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      soundFx.playClick();
    });

    navItems.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }
}

/* ==========================================================================
   00. CINEMATIC INTRO SEQUENCE (FAST, SKIPPABLE & FAILSAFE)
   ========================================================================== */

function initIntroSequence() {
  const introScreen = document.getElementById('intro-screen');
  if (!introScreen) return;

  const skipBtn = document.getElementById('intro-skip-btn');
  let dismissed = false;

  const dismissIntro = (fast = false) => {
    if (dismissed) return;
    dismissed = true;

    if (fast) {
      introScreen.style.transition = 'opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease';
    }
    introScreen.classList.add('intro-finished');

    setTimeout(() => {
      introScreen.style.display = 'none';
      introScreen.setAttribute('aria-hidden', 'true');
    }, fast ? 260 : 800);
  };

  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      soundFx.playClick();
      dismissIntro(true);
    });
  }

  introScreen.addEventListener('click', () => {
    soundFx.playClick();
    dismissIntro(true);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !dismissed) {
      dismissIntro(true);
    }
  });

  setTimeout(() => {
    dismissIntro(false);
  }, 1500);
}

/* ==========================================================================
   12. GLOBAL INITIALIZATION ENTRYPOINT
   ========================================================================== */

function initializeNightShiftHQ() {
  // 0. Opening skippable cinematic moment
  initIntroSequence();

  // 1. Ambient particles and optical depth
  initAmbientCanvas();

  // 1.1 Exploding Stars & Cosmic Supernova Engine (Command Center to Deep Dossier Operatives)
  initSupernovaAnimation();

  // 2. Telemetry Popover & Enter Transition
  initSystemStatusPopover();
  initEnterHqTransition();

  // 3. Project Detail Dialogs & 3D Tilt
  initProjectModal();

  // 4. Team Dossier Modal System
  initTeamModal();

  // 5. Experiment Lab Dialog & Filters
  renderExperimentLab('all');
  initLabFilters();
  initExperimentModal();

  // 6. Creative Archive Lightbox
  renderCreativeArchive();

  // 7. Story Chronicle Terminal & Pipeline
  initStoryChronicle();

  // 8. Timeline Laser Spine & Dev Logs
  initTimelineAndLogs();

  // 9. Scroll Progress & Scroll Reveals
  initScrollProgress();
  initScrollReveals();

  // 10. Clock & Uptime
  initTelemetryClock();

  // 11. Navigation
  initNavigation();

  // 12. Audio Controls & Interactivity Feedback
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
}

// Execute immediately if DOM is ready, or on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeNightShiftHQ);
} else {
  initializeNightShiftHQ();
}
