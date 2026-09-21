/**
 * NIGHTSHIFT HQ - ANIMATIONS & AMBIENT CANVAS
 * High-performance, lightweight, respects prefers-reduced-motion
 */

export function initOpeningSequence() {
  const introScreen = document.getElementById('intro-screen');
  const wordNightshift = document.getElementById('intro-nightshift');
  const wordHq = document.getElementById('intro-hq');
  const introStatus = document.getElementById('intro-status');
  const skipBtn = document.getElementById('intro-skip-btn');

  if (!introScreen) return;

  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    introScreen.classList.add('intro-finished');
    return;
  }

  let finished = false;
  const finishIntro = () => {
    if (finished) return;
    finished = true;
    introScreen.classList.add('intro-finished');
    document.body.style.overflow = '';
  };

  // Prevent background scroll during intro
  document.body.style.overflow = 'hidden';

  // Timed choreographed sequence
  setTimeout(() => {
    if (!finished && wordNightshift) wordNightshift.classList.add('visible');
  }, 250);

  setTimeout(() => {
    if (!finished && wordHq) wordHq.classList.add('visible');
  }, 850);

  setTimeout(() => {
    if (!finished && introStatus) introStatus.classList.add('visible');
  }, 1450);

  setTimeout(() => {
    finishIntro();
  }, 2600);

  // Skip handlers
  if (skipBtn) {
    skipBtn.addEventListener('click', finishIntro);
  }

  introScreen.addEventListener('click', finishIntro);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
      finishIntro();
    }
  }, { once: true });
}

/**
 * Ambient Particle & Starfield Canvas with atmospheric haze and subtle depth
 */
export function initAmbientCanvas() {
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

  // Atmospheric haze nodes (distant slow moving glowing masses)
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
      this.hue = Math.random() > 0.75 ? 182 : 215; // Cyan or icy night blue
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

  // Optional subtle mobile device orientation parallax
  if (window.DeviceOrientationEvent && 'ontouchstart' in window) {
    window.addEventListener('deviceorientation', (e) => {
      if (e.gamma !== null && e.beta !== null) {
        // Clamp orientation tilt
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

    // Smooth lerp for parallax
    const dx = (targetMouseX - mouseX) * 0.035;
    const dy = (targetMouseY - mouseY) * 0.035;
    mouseX += dx;
    mouseY += dy;

    // Subtle hero depth response (Brief #2)
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

    // Draw distant atmospheric haze blobs (Brief #13: atmospheric haze & distant lights)
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

    // Draw slow particles
    for (let i = 0; i < particles.length; i++) {
      particles[i].update(dx, dy);
      particles[i].draw();

      // Subtle distant connection lines for nearby nodes
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
export function initSupernovaAnimation() {
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

/**
 * Top Viewport Laser Scroll Progress Indicator
 */
export function initScrollProgress() {
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

/**
 * Scroll triggered element reveals
 */
export function initScrollReveals() {
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
