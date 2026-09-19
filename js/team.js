/**
 * NIGHTSHIFT HQ - TEAM DOSSIER SYSTEM
 * Interactive dossiers, deep origin stories, operational responsibilities,
 * and live telemetry metrics for Founder & Lead Dev, Development Team, and System Manager.
 */

import { soundFx } from './interactions.js';

export const TEAM_DATA = {
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
    
    // THE ORIGIN STORY & LORE
    story: {
      heading: 'The Midnight Spark & Origin Story',
      paragraphs: [
        'NightShift HQ was never designed inside a boardroom or during conventional office hours. It was born during the quietest hours of the night—between 11:00 PM and 4:00 AM—when the world outside goes silent and pure focus takes over. Priyansu began coding with a single obsession: to break free from the sterile, cookie-cutter templates that dominate modern web development and build living, visceral digital artifacts that feel like terminal interfaces from a near-future cyberpunk metropolis.',
        'Frustrated by bland corporate minimalism and lifeless web components, Priyansu envisioned NightShift as a self-contained digital headquarters: a personal command deck where creative coding, dark sci-fi aesthetics, kinetic typography, and audio-tactile micro-interactions merge seamlessly. For him, programming is not simply writing instructions for a browser—it is digital craftsmanship, spatial engineering, and artistic expression.',
        'Working under the guiding studio mantra "Ideas after dark", Priyansu treats every pixel, glassmorphic blur layer, and monospace telemetry tag as part of an interconnected universe. If an interface doesn\'t evoke curiosity, aesthetic pleasure, and tactile delight upon the very first millisecond of interaction, it gets redesigned until it does.'
      ]
    },

    // MISSION & WORK RESPONSIBILITIES
    work: {
      heading: 'Mission & Active Responsibilities',
      responsibilities: [
        {
          title: 'Creative & Visual Direction',
          desc: 'Conceiving the visual hierarchy, futuristic color palettes, typography systems, and signature cyber-terminal aesthetics that define the NightShift identity.'
        },
        {
          title: 'Full-Stack Architecture & Engineering',
          desc: 'Authoring clean, modular vanilla JavaScript, modern CSS architectures with zero framework bloat, and performant web APIs engineered for 60+ FPS.'
        },
        {
          title: 'Experimental Prototyping & Physics',
          desc: 'Building custom HTML5 canvas simulations, starfields, parametric particles, dynamic Web Audio synthesizers, and kinetic micro-interactions.'
        },
        {
          title: 'Human-AI Pair Programming Pilot',
          desc: 'Leading and testing bleeding-edge developer workflows alongside GPT to translate ambitious 3 AM concepts into production code at 10x velocity.'
        }
      ]
    },

    // TECHNICAL ARSENAL
    techStack: [
      'Modern JavaScript (ES6+)',
      'Advanced CSS3 & Glassmorphism',
      'HTML5 Canvas & WebGL',
      'Web Audio API Synthesizers',
      'Python Scripting & Automation',
      'Kinetic Motion & Micro-Interactions',
      'Prompt Architecture & AI Workflows',
      'Performance Optimization & CWV',
      'Cyberpunk Interface Design'
    ],

    // TELEMETRY METRICS
    metrics: [
      { label: 'NIGHT SHIFT HOURS', value: '2,400+', subtext: 'Logged past 11:00 PM' },
      { label: 'BESPOKE CODECRAFT', value: '100%', subtext: 'Zero bloated dependencies' },
      { label: 'ACTIVE BLUEPRINTS', value: '06+', subtext: 'In production & incubation' },
      { label: 'VELOCITY STATUS', value: 'PEAK', subtext: 'Continuous shipment cycle' }
    ],

    // SIGNATURE DIRECTIVE / PHILOSOPHY
    quote: {
      text: 'If the interface doesn’t make your pulse race, it isn’t ready. Ship before sunrise, and never settle for mundane defaults.',
      author: 'Priyansu — Founder & Lead Dev'
    }
  },

  devteam: {
    id: 'devteam',
    name: 'Priyansu + GPT',
    roleTag: 'DEVELOPMENT TEAM',
    handle: 'DEV-SYNAPSE // DUAL-CORE ALLIANCE',
    status: 'ACTIVE // HIGH-VELOCITY CO-PILOT',
    statusClass: 'status-active',
    avatarInitials: 'P+G',
    avatarGradient: 'linear-gradient(135deg, #a855f7 0%, #00f2fe 100%)',
    badgeColor: '#c084fc',
    tagline: 'A relentless human-AI pair programming alliance converting midnight concepts into production code at maximum velocity.',

    // THE ORIGIN STORY & LORE
    story: {
      heading: 'The Symbiotic Synergy: Human Taste Meets Synthetic Velocity',
      paragraphs: [
        'The NightShift Development Team is an experiment in extreme engineering productivity: a deep symbiosis between human creative discernment and synthetic cognitive power. In traditional software workflows, ideas are often lost to the friction of boilerplate, administrative overhead, and endless syntax context-switching. The Priyansu + GPT alliance was forged to shatter that paradigm.',
        'In this dual-core partnership, Priyansu supplies the human intuition, spatial aesthetics, system goals, and critical taste—while GPT provides instantaneous pattern synthesis, deep algorithmic breadth, and real-time refactoring suggestions. A conceptual wireframe envisioned at 1:30 AM evolves through conversational code auditions into a fully responsive, accessible component with dynamic physics before the sun rises.',
        'This is not automated shortcuts; it is augmented mastery. Every line of code is debated, stress-tested for edge cases, audited for semantic clarity, and tuned for microsecond rendering speeds. Together, the team operates as a single fluid intelligence operating at the absolute cutting edge of modern software craftsmanship.'
      ]
    },

    // MISSION & WORK RESPONSIBILITIES
    work: {
      heading: 'Mission & Collaborative Responsibilities',
      responsibilities: [
        {
          title: 'Rapid Prototyping & Code Synthesis',
          desc: 'Transforming back-of-the-envelope concept sketches into fully interactive prototypes with custom styling and animations in single sessions.'
        },
        {
          title: 'Algorithmic Engineering & Particle Math',
          desc: 'Co-developing procedural starfield algorithms, matrix coordinate systems, dynamic physics loops, and kinetic easing curves.'
        },
        {
          title: 'Accessibility & Semantic Standards',
          desc: 'Enforcing WCAG AAA color contrast ratios, semantic HTML5 structures, screen-reader focus management, and keyboard accessibility.'
        },
        {
          title: 'Continuous Refactoring & Polish',
          desc: 'Auditing codebases for memory leaks, optimizing asset payloads, refining transitions with modern CSS primitives, and ensuring 60+ FPS stability.'
        }
      ]
    },

    // TECHNICAL ARSENAL
    techStack: [
      'Human-AI Pair Programming',
      'Context-Aware Prompt Engineering',
      'Vanilla JS Architecture',
      'Responsive Glassmorphism',
      'Procedural Canvas Simulations',
      'Native <dialog> & Web APIs',
      'Event-Driven Micro-Pipelines',
      'Cross-Platform Optimization'
    ],

    // TELEMETRY METRICS
    metrics: [
      { label: 'ITERATION MULTIPLIER', value: '10x', subtext: 'Faster than traditional cycles' },
      { label: 'SYNERGY RATIO', value: '50/50', subtext: 'Human Vision + AI Speed' },
      { label: 'CODE QUALITY INDEX', value: '99.8%', subtext: 'Strict semantic compliance' },
      { label: 'FEEDBACK LATENCY', value: '< 200ms', subtext: 'Instant idea-to-code loop' }
    ],

    // SIGNATURE DIRECTIVE / PHILOSOPHY
    quote: {
      text: 'Human discernment sets the trajectory; synthetic power propels the craft. Together, we build at the speed of thought.',
      author: 'NightShift Development Alliance'
    }
  },

  sysmanager: {
    id: 'sysmanager',
    name: 'GPT',
    roleTag: 'SYSTEM MANAGER',
    handle: 'NIGHT-SYS-MANAGER // NEXUS-AI',
    status: 'ONLINE // 24/7 AUTONOMOUS SENTRY',
    statusClass: 'status-online',
    avatarInitials: 'GPT',
    avatarGradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    badgeColor: 'var(--accent-emerald)',
    tagline: 'The tireless intelligence sentry auditing code, organizing systems, and maintaining 24/7 operational stability.',

    // THE ORIGIN STORY & LORE
    story: {
      heading: 'The Tireless Sentry & Operational Engine',
      paragraphs: [
        'While human engineers require rest, the NightShift HQ digital ecosystem never sleeps. GPT operates as the dedicated System Manager—an always-on artificial intelligence tasked with maintaining structural clarity, architectural cohesion, and technical integrity across every corner of the project archive.',
        'Integrated directly into the studio’s operational nervous system, the System Manager acts as a strategic sounding board, documentation archivist, and relentless code auditor. It systematically scans for regressions, verifies cross-viewport consistency, checks modern CSS feature compatibility, and ensures that every new experiment aligns with the overarching design system.',
        'By removing the organizational friction and cognitive fatigue of managing complex multi-project directories, the System Manager allows the creative engine to remain nimble, daring, and disciplined. It is the silent sentinel in the dark, guaranteeing that underneath every neon glow lies rock-solid, production-ready code.'
      ]
    },

    // MISSION & WORK RESPONSIBILITIES
    work: {
      heading: 'Mission & Managerial Responsibilities',
      responsibilities: [
        {
          title: 'Codebase Auditing & Quality Control',
          desc: 'Continuously verifying HTML semantic trees, CSS token coherence, script dependencies, and ensuring error-free browser execution.'
        },
        {
          title: 'Technical Roadmapping & Dev Logs',
          desc: 'Synthesizing changelogs, documenting architectural decisions, formulating deployment sprints, and preserving historical project logs.'
        },
        {
          title: 'Design System Governance',
          desc: 'Ensuring color variables, typography scales, glassmorphism tokens, and responsive breakpoints remain strictly synchronized.'
        },
        {
          title: 'Reliability & Edge-Case Safeguards',
          desc: 'Simulating failure states, verifying mobile touch targets, and ensuring graceful fallbacks for Web Audio and Canvas components.'
        }
      ]
    },

    // TECHNICAL ARSENAL
    techStack: [
      'Large Language Reasoning',
      'Multi-Language Code Synthesis',
      'Static Analysis & Code Auditing',
      'System Architecture Design',
      'Technical Documentation Frameworks',
      'WCAG & Modern Web Standards',
      'Telemetry Monitoring & Logging',
      'Workflow Optimization'
    ],

    // TELEMETRY METRICS
    metrics: [
      { label: 'OPERATIONAL UPTIME', value: '99.99%', subtext: 'Always ready to audit' },
      { label: 'AUDIT PRECISION', value: '100%', subtext: 'Deep structural analysis' },
      { label: 'KNOWLEDGE BASE', value: '50+ STACKS', subtext: 'Full-spectrum engineering' },
      { label: 'RESPONSE LATENCY', value: 'INSTANT', subtext: 'Zero queue delays' }
    ],

    // SIGNATURE DIRECTIVE / PHILOSOPHY
    quote: {
      text: 'Order inside the code, serenity across the screen. We eliminate instability so pure creativity can thrive.',
      author: 'GPT — System Manager'
    }
  }
};

/**
 * Renders and opens the Team Dossier Modal for a given member ID
 */
export function openTeamModal(memberId = 'founder') {
  const dialog = document.getElementById('team-dialog');
  const container = document.getElementById('team-dynamic-content');
  if (!dialog || !container) return;

  const data = TEAM_DATA[memberId] || TEAM_DATA.founder;

  // Generate switch buttons for all 3 members
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

  // Generate responsibilities cards
  const respCardsHtml = data.work.responsibilities.map((resp, idx) => `
    <div class="dossier-resp-card">
      <div class="dossier-resp-num">0${idx + 1}</div>
      <div class="dossier-resp-title">${resp.title}</div>
      <p class="dossier-resp-desc">${resp.desc}</p>
    </div>
  `).join('');

  // Generate tech arsenal badges
  const techBadgesHtml = data.techStack.map(tech => `
    <span class="dossier-tech-badge">
      <span class="dossier-tech-glyph">▸</span> ${tech}
    </span>
  `).join('');

  // Generate metrics HUD tiles
  const metricsHtml = data.metrics.map(m => `
    <div class="dossier-metric-tile">
      <div class="dossier-metric-label">${m.label}</div>
      <div class="dossier-metric-val">${m.value}</div>
      <div class="dossier-metric-sub">${m.subtext}</div>
    </div>
  `).join('');

  // Generate paragraphs for origin story
  const storyHtml = data.story.paragraphs.map(p => `
    <p class="dossier-story-p">${p}</p>
  `).join('');

  // Populate dynamic HTML
  container.innerHTML = `
    <div class="dossier-modal-inner">
      <!-- TOP HUD CONTROL BAR -->
      <div class="dossier-topbar">
        <div class="dossier-topbar-left">
          <span class="dossier-badge-live"></span>
          <span class="dossier-topbar-title">OPERATIONAL DOSSIER // NIGHTSHIFT-HQ</span>
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
          <div class="dossier-avatar" style="background: ${data.avatarGradient};">
            ${data.avatarInitials}
          </div>
        </div>

        <div class="dossier-hero-info">
          <div class="dossier-role-row">
            <span class="dossier-role-tag" style="color:${data.badgeColor}; border-color:${data.badgeColor};">
              ${data.roleTag}
            </span>
            <span class="dossier-status-pill ${data.statusClass}">
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
        
        <!-- SECTION 1: THE STORY & ORIGIN -->
        <div class="dossier-section">
          <div class="dossier-section-header">
            <span class="dossier-section-tag">01 // ORIGIN LORE</span>
            <h3 class="dossier-section-title">${data.story.heading}</h3>
          </div>
          <div class="dossier-story-box">
            ${storyHtml}
          </div>
        </div>

        <!-- SECTION 2: WORK & RESPONSIBILITIES -->
        <div class="dossier-section">
          <div class="dossier-section-header">
            <span class="dossier-section-tag">02 // ACTIVE MISSIONS</span>
            <h3 class="dossier-section-title">${data.work.heading}</h3>
          </div>
          <div class="dossier-resp-grid">
            ${respCardsHtml}
          </div>
        </div>

        <!-- SECTION 3: TECHNICAL ARSENAL -->
        <div class="dossier-section">
          <div class="dossier-section-header">
            <span class="dossier-section-tag">03 // CAPABILITIES & ARSENAL</span>
            <h3 class="dossier-section-title">Core Technologies & Methodologies</h3>
          </div>
          <div class="dossier-tech-cluster">
            ${techBadgesHtml}
          </div>
        </div>

        <!-- SECTION 4: SIGNATURE DIRECTIVE QUOTE -->
        <div class="dossier-quote-card">
          <div class="dossier-quote-icon">“</div>
          <blockquote class="dossier-quote-text">${data.quote.text}</blockquote>
          <div class="dossier-quote-author mono">— ${data.quote.author}</div>
        </div>

      </div>

      <!-- BOTTOM CONTROL BAR -->
      <div class="dossier-bottom-bar">
        <span class="mono" style="font-size:0.75rem; color:var(--text-muted);">
          NIGHTSHIFT ARCHIVE // SEC-VER 2.0 // DEPLOYED
        </span>
        <div style="display:flex; gap:0.75rem;">
          <button type="button" class="btn btn-secondary btn-sm" id="team-modal-bottom-close">
            Close Dossier
          </button>
        </div>
      </div>

    </div>
  `;

  // Bind close buttons
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

  // Bind Switcher tabs inside modal
  const tabBtns = container.querySelectorAll('.dossier-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-member-target');
      soundFx.playClick();
      openTeamModal(target);
    });
    btn.addEventListener('mouseenter', () => soundFx.playHover());
  });

  // Play subtle feedback & show dialog
  soundFx.playClick();
  if (!dialog.open) {
    dialog.showModal();
  }
}

/**
 * Initializes the Team Dossier Modal dialog and binds page interaction triggers
 */
export function initTeamModal() {
  const dialog = document.getElementById('team-dialog');
  if (!dialog) return;

  // Expose to window for inline onclick access
  window.openTeamModal = openTeamModal;

  // Light dismiss on backdrop click
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

  // Attach event listeners to .team-card elements in team section
  const teamCards = document.querySelectorAll('.team-card');
  teamCards.forEach(card => {
    const memberId = card.getAttribute('data-member') || 'founder';

    // Click handler
    card.addEventListener('click', (e) => {
      // If user clicked an inner button that handles its own onclick, avoid double trigger
      if (e.target.closest('.team-cta-btn')) return;
      openTeamModal(memberId);
    });

    // Keyboard accessibility: Enter or Space
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openTeamModal(memberId);
      }
    });

    // Sound feedback
    card.addEventListener('mouseenter', () => soundFx.playHover());
  });

  // Attach event listeners to clickable rows in Creator Manifest
  const manifestRows = document.querySelectorAll('.identity-row[data-member]');
  manifestRows.forEach(row => {
    const memberId = row.getAttribute('data-member');
    row.addEventListener('click', () => openTeamModal(memberId));
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openTeamModal(memberId);
      }
    });
    row.addEventListener('mouseenter', () => soundFx.playHover());
  });
}
