(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = document.querySelectorAll('main > section:not(.hero-section), .ticker');

  if (!reduceMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        const staggerItems = entry.target.querySelectorAll(
          '.capability-grid article, .identity-card, .product-figure, .product-detail-grid figure, .thumbnail-grid article, .screen-list article, .process-steps article, .experience-list article, .reel-card'
        );
        staggerItems.forEach((item, index) => {
          item.style.setProperty('--item-index', index);
          item.classList.add('item-reveal');
        });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });

    revealTargets.forEach(section => {
      section.classList.add('reveal');
      revealObserver.observe(section);
    });
  } else {
    revealTargets.forEach(section => section.classList.add('is-visible'));
  }

  // Instagram may load after the document. Process embeds both on script load and if already available.
  const processInstagramEmbeds = () => {
    try {
      if (window.instgrm && window.instgrm.Embeds) window.instgrm.Embeds.process();
    } catch (error) {
      // The direct Instagram links under each embed remain available as fallbacks.
    }
  };
  const instagramScript = document.querySelector('script[src*="instagram.com/embed.js"]');
  if (instagramScript) instagramScript.addEventListener('load', processInstagramEmbeds, { once: true });
  processInstagramEmbeds();

  // Keep keyboard focus visible on interactive image cards.
  document.querySelectorAll('.product-image-link, .product-detail-grid a, .thumbnail-grid a').forEach(link => {
    link.addEventListener('focus', () => link.closest('figure, article')?.classList.add('is-focused'));
    link.addEventListener('blur', () => link.closest('figure, article')?.classList.remove('is-focused'));
  });

  // Disable the browser context menu across this portfolio page as requested.
  document.addEventListener('contextmenu', (event) => event.preventDefault());

  // One continuously moving product gallery. Wheel, trackpad, touch, drag and keys all move it horizontally.
  document.querySelectorAll('.product-marquee-unified[data-product-marquee]').forEach((carousel) => {
    const viewport = carousel.querySelector('.product-marquee-viewport');
    const track = carousel.querySelector('.product-marquee-track');
    const originalGroup = track?.querySelector('.product-marquee-group');
    const button = carousel.querySelector('.marquee-toggle');
    if (!viewport || !track || !originalGroup || !button) return;

    // Clone the image sequence once to create a seamless loop. There are no visible captions or controls in the clones.
    const clone = originalGroup.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.setAttribute('inert', '');
    clone.querySelectorAll('[id]').forEach((node) => node.removeAttribute('id'));
    clone.querySelectorAll('a, button, input, select, textarea, [tabindex]').forEach((node) => node.removeAttribute('tabindex'));
    clone.querySelectorAll('img').forEach((img) => { img.draggable = false; img.loading = 'eager'; });
    track.appendChild(clone);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const speed = Number(viewport.dataset.speed || 38); // px per second
    let loopWidth = 0;
    let userPaused = reducedMotion;
    let hovering = false;
    let focused = false;
    let dragging = false;
    let pointerStartX = 0;
    let scrollStart = 0;
    let lastTime = 0;
    let raf = 0;

    const updateLoopDimensions = () => {
      const originals = originalGroup.querySelectorAll('.product-slide');
      const clones = clone.querySelectorAll('.product-slide');
      originals.forEach((slide, index) => {
        const width = getComputedStyle(slide).width;
        if (clones[index]) clones[index].style.width = width;
      });
      loopWidth = originalGroup.getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || '0');
      if (loopWidth > 0 && viewport.scrollLeft >= loopWidth) viewport.scrollLeft %= loopWidth;
    };

    const measureSlides = () => {
      const frameHeight = viewport.clientHeight;
      originalGroup.querySelectorAll('.product-slide').forEach((slide) => {
        const img = slide.querySelector('img');
        if (!img) return;
        const applyWidth = () => {
          const ratio = (img.naturalWidth && img.naturalHeight) ? img.naturalWidth / img.naturalHeight : 1.25;
          const width = Math.max(250, Math.min(820, frameHeight * ratio));
          slide.style.setProperty('--slide-width', `${width}px`);
          requestAnimationFrame(updateLoopDimensions);
        };
        if (img.complete && img.naturalWidth > 0) applyWidth();
        else img.addEventListener('load', applyWidth, { once: true });
      });
      requestAnimationFrame(updateLoopDimensions);
    };

    const updateButton = () => {
      button.textContent = userPaused ? 'Resume movement' : 'Pause movement';
      button.setAttribute('aria-pressed', String(userPaused));
      button.setAttribute('aria-label', userPaused ? 'Resume product gallery movement' : 'Pause product gallery movement');
      if (reducedMotion) {
        button.textContent = 'Motion reduced';
        button.disabled = true;
        button.setAttribute('aria-label', 'Automatic movement disabled by reduced motion preference');
      }
    };

    const moveTo = (target) => {
      if (!loopWidth) {
        viewport.scrollLeft = Math.max(0, target);
        return;
      }
      let next = target;
      if (next < 0) next = loopWidth + (next % loopWidth);
      if (next >= loopWidth) next = next % loopWidth;
      viewport.scrollLeft = next;
    };

    const wrapPosition = () => {
      if (!loopWidth) return;
      if (viewport.scrollLeft >= loopWidth) moveTo(viewport.scrollLeft);
    };

    const tick = (time) => {
      if (!lastTime) lastTime = time;
      const delta = Math.min(48, time - lastTime);
      lastTime = time;
      const shouldMove = !userPaused && !hovering && !focused && !dragging && !document.hidden && !reducedMotion;
      if (shouldMove && loopWidth > 0) {
        moveTo(viewport.scrollLeft + speed * (delta / 1000));
      }
      raf = window.requestAnimationFrame(tick);
    };

    button.addEventListener('click', () => {
      if (reducedMotion) return;
      userPaused = !userPaused;
      updateButton();
    });

    viewport.addEventListener('wheel', (event) => {
      // Convert vertical mouse-wheel movement into horizontal gallery movement.
      const amount = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      if (amount === 0) return;
      event.preventDefault();
      moveTo(viewport.scrollLeft + amount * (event.deltaMode === 1 ? 18 : event.deltaMode === 2 ? viewport.clientWidth : 1));
    }, { passive: false });

    viewport.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight' || event.key === 'PageDown') {
        event.preventDefault();
        moveTo(viewport.scrollLeft + Math.max(180, viewport.clientWidth * 0.55));
      } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault();
        moveTo(viewport.scrollLeft - Math.max(180, viewport.clientWidth * 0.55));
      } else if (event.key === 'Home') {
        event.preventDefault(); viewport.scrollLeft = 0;
      } else if (event.key === 'End') {
        event.preventDefault(); viewport.scrollLeft = Math.max(0, loopWidth - 1);
      }
    });

    viewport.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      dragging = true;
      pointerStartX = event.clientX;
      scrollStart = viewport.scrollLeft;
      viewport.setPointerCapture?.(event.pointerId);
    });
    viewport.addEventListener('pointermove', (event) => {
      if (!dragging) return;
      const delta = event.clientX - pointerStartX;
      moveTo(scrollStart - delta);
    });
    const stopDragging = () => { dragging = false; };
    viewport.addEventListener('pointerup', stopDragging);
    viewport.addEventListener('pointercancel', stopDragging);
    viewport.addEventListener('lostpointercapture', stopDragging);

    viewport.addEventListener('mouseenter', () => { hovering = true; });
    viewport.addEventListener('mouseleave', () => { hovering = false; });
    viewport.addEventListener('focusin', () => { focused = true; });
    viewport.addEventListener('focusout', (event) => {
      if (!viewport.contains(event.relatedTarget)) focused = false;
    });
    document.addEventListener('visibilitychange', () => { lastTime = 0; });

    measureSlides();
    updateButton();
    if ('ResizeObserver' in window) {
      const observer = new ResizeObserver(measureSlides);
      observer.observe(viewport);
    } else {
      window.addEventListener('resize', measureSlides, { passive: true });
    }
    window.addEventListener('load', measureSlides, { once: true });
    raf = window.requestAnimationFrame(tick);
  });

})();
