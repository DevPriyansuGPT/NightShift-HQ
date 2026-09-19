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
 * Ambient Particle & Starfield Canvas with subtle mouse parallax
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
  const PARTICLE_COUNT = Math.min(65, Math.floor((width * height) / 22000));

  let mouseX = width / 2;
  let mouseY = height / 2;
  let targetMouseX = mouseX;
  let targetMouseY = mouseY;

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 1.5 + 0.5;
      this.baseAlpha = Math.random() * 0.45 + 0.15;
      this.alpha = this.baseAlpha;
      this.vx = (Math.random() - 0.5) * 0.25;
      this.vy = (Math.random() - 0.5) * 0.25;
      this.depth = Math.random() * 0.8 + 0.2;
      this.hue = Math.random() > 0.8 ? 180 : 210; // Subtle cyan or icy blue
    }

    update(dx, dy) {
      this.x += this.vx + dx * this.depth * 0.015;
      this.y += this.vy + dy * this.depth * 0.015;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 80%, 75%, ${this.alpha})`;
      ctx.shadowBlur = this.size * 2;
      ctx.shadowColor = `hsla(${this.hue}, 80%, 65%, ${this.alpha * 0.6})`;
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

  let lastTime = 0;
  let isTabActive = true;

  document.addEventListener('visibilitychange', () => {
    isTabActive = !document.hidden;
  });

  function render(time) {
    if (!isTabActive) {
      requestAnimationFrame(render);
      return;
    }

    // Smooth lerp for mouse parallax
    const dx = (targetMouseX - mouseX) * 0.04;
    const dy = (targetMouseY - mouseY) * 0.04;
    mouseX += dx;
    mouseY += dy;

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update(dx, dy);
      particles[i].draw();

      // Draw very subtle distant connection lines for neighboring nodes
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(particles[i].x - p2.x, particles[i].y - p2.y);
        if (dist < 95) {
          const lineAlpha = (1 - dist / 95) * 0.08;
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
 * Scroll triggered element reveals
 */
export function initScrollReveals() {
  const elements = document.querySelectorAll('.reveal-fade-up');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add('is-revealed'));
  }
}
