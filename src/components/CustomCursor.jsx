import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canUse = window.matchMedia('(pointer: fine)').matches;
    setEnabled(canUse);
    if (!canUse) return undefined;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;

    const moveCursor = (event) => {
      mx = event.clientX;
      my = event.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }

      if (Math.random() < 0.22) {
        const trail = document.createElement('span');
        trail.className = 'cursor-trail';
        const angle = Math.random() * Math.PI * 2;
        const distance = 10 + Math.random() * 18;
        trail.style.left = `${mx}px`;
        trail.style.top = `${my}px`;
        trail.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
        trail.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
        document.body.appendChild(trail);
        setTimeout(() => trail.remove(), 520);
      }
    };

    const animateRing = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      requestAnimationFrame(animateRing);
    };

    const setHover = (isHover) => {
      if (!dotRef.current || !ringRef.current) return;
      dotRef.current.style.width = isHover ? '22px' : '14px';
      dotRef.current.style.height = isHover ? '22px' : '14px';
      dotRef.current.style.background = isHover ? 'var(--cta)' : 'var(--electric)';
      ringRef.current.style.width = isHover ? '58px' : '40px';
      ringRef.current.style.height = isHover ? '58px' : '40px';
    };

    const onMouseOver = (event) => {
      const interactive = event.target.closest('a, button, input, textarea, select, [data-hoverable="true"]');
      setHover(Boolean(interactive));
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseover', onMouseOver);
    animateRing();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <span className="cursor-dot" ref={dotRef} />
      <span className="cursor-ring" ref={ringRef} />
    </>
  );
}
