/**
 * NIGHTSHIFT HQ - MAIN SYSTEM CONTROLLER
 * Official Digital Headquarters
 * Founder: Priyansu | Developer: Priyansu + GPT | Manager: GPT
 */

import { initOpeningSequence, initAmbientCanvas, initScrollReveals } from './animations.js';
import { initProjectModal } from './projects.js';
import { initTeamModal } from './team.js';
import { initTimelineAndLogs } from './timeline.js';
import { initInteractions } from './interactions.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Opening Intro Sequence
  initOpeningSequence();

  // 2. Initialize Ambient Starfield & Particle Canvas
  initAmbientCanvas();

  // 3. Initialize Project Detail Dialog System
  initProjectModal();

  // 3.1 Initialize Team Dossier Modal System
  initTeamModal();

  // 4. Initialize Timeline & Dev Log Stream
  initTimelineAndLogs();

  // 5. Initialize Interactions, Audio Synthesizer & Filters
  initInteractions();

  // 6. Initialize Scroll-triggered Animations
  initScrollReveals();

  // 7. Initialize Real-Time Clock & Telemetry HUD
  initTelemetryClock();

  // 8. Initialize Header Scroll Effect & Mobile Navigation
  initNavigation();
});

/**
 * Real-time HUD Clock and Session Uptime Counter
 */
function initTelemetryClock() {
  const timeElement = document.getElementById('hud-live-time');
  const uptimeElement = document.getElementById('hud-uptime');

  const startTime = Date.now();

  function updateClock() {
    const now = new Date();
    
    // Format: 14:52:10 UTC+5:30
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    if (timeElement) {
      timeElement.textContent = `${hours}:${minutes}:${seconds} IST`;
    }

    // Uptime formatting
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

/**
 * Navigation Bar Behaviors (Scroll Blur & Mobile Menu)
 */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-link');

  // Header glass effect on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile drawer toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
}
