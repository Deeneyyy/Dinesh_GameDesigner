/**
 * Dear Studio Monkeys - Client Interactions & Enhancements
 * Dinesh A portfolio introduction
 */

(() => {
  'use strict';

  // 1. Resume Disclosure & Smooth Scrolling
  const resumeLinks = document.querySelectorAll('[data-open-resume]');
  const resumeDetails = document.getElementById('resume-details');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const openResume = () => {
    if (resumeDetails) {
      resumeDetails.open = true;
    }
    const resumeSection = document.getElementById('resume');
    if (resumeSection) {
      resumeSection.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start'
      });
    }
    window.setTimeout(() => {
      resumeDetails?.querySelector('summary')?.focus({ preventScroll: true });
    }, prefersReducedMotion ? 50 : 350);
  };

  resumeLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      openResume();
    });
  });

  // Handle direct navigation via URL hash (#resume)
  if (window.location.hash === '#resume') {
    window.setTimeout(openResume, 150);
  }
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#resume') {
      openResume();
    }
  });

  // 2. Official Instagram Embeds Processing
  const processInstagram = () => {
    if (window.instgrm?.Embeds?.process) {
      window.instgrm.Embeds.process();
    }
  };

  window.addEventListener('load', processInstagram);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      processInstagram();
    }
  });

  // Retry processing shortly after load in case script was still initializing
  window.setTimeout(processInstagram, 1200);

  // 3. Scroll Reveal Animations (IntersectionObserver)
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    document.querySelectorAll('.reveal-init').forEach(el => {
      revealObserver.observe(el);
    });
  } else {
    // If reduced motion or observer unsupported, make immediately visible
    document.querySelectorAll('.reveal-init').forEach(el => {
      el.classList.add('reveal-active');
    });
  }

  // 4. Subtle Hover-Tilt for Non-Embed Cards (desktop with fine pointer only)
  const isFinePointer = window.matchMedia('(pointer: fine) and (min-width: 900px)').matches;
  if (isFinePointer && !prefersReducedMotion) {
    const tiltTargets = document.querySelectorAll('.brand-card, .thumbnail-card');
    tiltTargets.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -2.5;
        const rotateY = ((x - centerX) / centerX) * 2.5;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // 5. Interactive Pipeline Visual Interaction
  const pipeNodes = document.querySelectorAll('.pipe-node');
  pipeNodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      pipeNodes.forEach(n => n.classList.remove('node-active'));
      node.classList.add('node-active');
    });
  });

})();
