import { useCallback, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../animations/motionVariants';

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm-1.69-6A1.97 1.97 0 0 0 3.28 4.5c0 1.09.86 1.97 1.94 1.97h.03a1.97 1.97 0 1 0 0-3.94ZM20.72 13.4c0-3.2-1.71-4.69-3.99-4.69-1.84 0-2.66 1.01-3.12 1.72V8.5H10.2c.04 1.28 0 11.5 0 11.5h3.41v-6.42c0-.34.03-.68.13-.92.27-.68.89-1.38 1.94-1.38 1.37 0 1.92 1.05 1.92 2.59V20H21V13.4h-.28Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M12 7.84A4.16 4.16 0 1 0 12 16.16 4.16 4.16 0 1 0 12 7.84Zm0 6.86A2.7 2.7 0 1 1 12 9.3a2.7 2.7 0 0 1 0 5.4Zm5.3-6.98a.97.97 0 1 1-1.94 0 .97.97 0 0 1 1.94 0Zm2.74.98c-.06-1.2-.33-2.26-1.2-3.12-.86-.87-1.92-1.14-3.12-1.2C14.5 4.31 9.5 4.31 8.28 4.38c-1.2.06-2.26.33-3.12 1.2-.87.86-1.14 1.92-1.2 3.12-.07 1.22-.07 6.22 0 7.44.06 1.2.33 2.26 1.2 3.12.86.87 1.92 1.14 3.12 1.2 1.22.07 6.22.07 7.44 0 1.2-.06 2.26-.33 3.12-1.2.87-.86 1.14-1.92 1.2-3.12.07-1.22.07-6.22 0-7.44Zm-1.73 9.03c-.26.66-.77 1.17-1.43 1.43-.99.39-3.34.3-4.88.3-1.54 0-3.89.09-4.88-.3a2.4 2.4 0 0 1-1.43-1.43c-.39-.99-.3-3.34-.3-4.88 0-1.54-.09-3.89.3-4.88.26-.66.77-1.17 1.43-1.43.99-.39 3.34-.3 4.88-.3 1.54 0 3.89-.09 4.88.3.66.26 1.17.77 1.43 1.43.39.99.3 3.34.3 4.88 0 1.54.09 3.89-.3 4.88Z" />
    </svg>
  );
}

const KEYFRAMES_ID = 'xuro-teamcard-holo-keyframes';

const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);
const round = (v, precision = 3) => parseFloat(v.toFixed(precision));
const adjust = (v, fMin, fMax, tMin, tMax) => round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

if (typeof document !== 'undefined' && !document.getElementById(KEYFRAMES_ID)) {
  const style = document.createElement('style');
  style.id = KEYFRAMES_ID;
  style.textContent = `
    @keyframes xuro-team-holo-bg {
      0% { background-position: 0 var(--background-y), 0 0, center; }
      100% { background-position: 0 var(--background-y), 95% 95%, center; }
    }
  `;
  document.head.appendChild(style);
}

export default function TeamCard({ member }) {
  const wrapRef = useRef(null);
  const shellRef = useRef(null);
  const leaveRafRef = useRef(null);
  const enterTimerRef = useRef(null);

  const tiltEngine = useMemo(() => {
    let rafId = null;
    let running = false;
    let lastTs = 0;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const DEFAULT_TAU = 0.14;
    const INITIAL_TAU = 0.55;
    let initialUntil = 0;

    const setVars = (x, y) => {
      const shell = shellRef.current;
      const wrap = wrapRef.current;
      if (!shell || !wrap) return;

      const width = shell.clientWidth || 1;
      const height = shell.clientHeight || 1;
      const px = clamp((100 / width) * x);
      const py = clamp((100 / height) * y);
      const centerX = px - 50;
      const centerY = py - 50;

      wrap.style.setProperty('--pointer-x', `${px}%`);
      wrap.style.setProperty('--pointer-y', `${py}%`);
      wrap.style.setProperty('--background-x', `${adjust(px, 0, 100, 36, 64)}%`);
      wrap.style.setProperty('--background-y', `${adjust(py, 0, 100, 36, 64)}%`);
      wrap.style.setProperty('--pointer-from-center', `${clamp(Math.hypot(py - 50, px - 50) / 50, 0, 1)}`);
      wrap.style.setProperty('--rotate-x', `${round(-(centerX / 5))}deg`);
      wrap.style.setProperty('--rotate-y', `${round(centerY / 4)}deg`);
      wrap.style.setProperty('--pointer-from-top', `${py / 100}`);
      wrap.style.setProperty('--pointer-from-left', `${px / 100}`);
    };

    const step = (ts) => {
      if (!running) return;
      if (lastTs === 0) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;
      const tau = ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU;
      const k = 1 - Math.exp(-dt / tau);

      currentX += (targetX - currentX) * k;
      currentY += (targetY - currentY) * k;
      setVars(currentX, currentY);

      const stillMoving = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;
      if (stillMoving || document.hasFocus()) {
        rafId = requestAnimationFrame(step);
      } else {
        running = false;
        lastTs = 0;
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      lastTs = 0;
      rafId = requestAnimationFrame(step);
    };

    return {
      setImmediate(x, y) {
        currentX = x;
        currentY = y;
        setVars(currentX, currentY);
      },
      setTarget(x, y) {
        targetX = x;
        targetY = y;
        start();
      },
      toCenter() {
        const shell = shellRef.current;
        if (!shell) return;
        this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
      },
      beginInitial(durationMs) {
        initialUntil = performance.now() + durationMs;
        start();
      },
      getCurrent() {
        return { x: currentX, y: currentY, tx: targetX, ty: targetY };
      },
      cancel() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        running = false;
        lastTs = 0;
      }
    };
  }, []);

  const getOffsets = (evt, el) => {
    const rect = el.getBoundingClientRect();
    return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
  };

  const onPointerMove = useCallback(
    (event) => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;
      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine]
  );

  const onPointerEnter = useCallback(
    (event) => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;
      shell.classList.add('active', 'entering');
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      enterTimerRef.current = window.setTimeout(() => shell.classList.remove('entering'), 180);
      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine]
  );

  const onPointerLeave = useCallback(() => {
    const shell = shellRef.current;
    if (!shell || !tiltEngine) return;
    tiltEngine.toCenter();

    const settle = () => {
      const { x, y, tx, ty } = tiltEngine.getCurrent();
      const done = Math.hypot(tx - x, ty - y) < 0.6;
      if (done) {
        shell.classList.remove('active');
        leaveRafRef.current = null;
      } else {
        leaveRafRef.current = requestAnimationFrame(settle);
      }
    };

    if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
    leaveRafRef.current = requestAnimationFrame(settle);
  }, [tiltEngine]);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell || !tiltEngine) return undefined;

    shell.addEventListener('pointerenter', onPointerEnter);
    shell.addEventListener('pointermove', onPointerMove);
    shell.addEventListener('pointerleave', onPointerLeave);

    const initialX = (shell.clientWidth || 0) - 70;
    const initialY = 60;
    tiltEngine.setImmediate(initialX, initialY);
    tiltEngine.toCenter();
    tiltEngine.beginInitial(1200);

    return () => {
      shell.removeEventListener('pointerenter', onPointerEnter);
      shell.removeEventListener('pointermove', onPointerMove);
      shell.removeEventListener('pointerleave', onPointerLeave);
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
      tiltEngine.cancel();
      shell.classList.remove('entering');
    };
  }, [onPointerEnter, onPointerLeave, onPointerMove, tiltEngine]);

  const cardStyle = useMemo(
    () => ({
      '--pointer-x': '50%',
      '--pointer-y': '50%',
      '--background-x': '50%',
      '--background-y': '50%',
      '--pointer-from-center': '0',
      '--pointer-from-top': '0.5',
      '--pointer-from-left': '0.5',
      '--rotate-x': '0deg',
      '--rotate-y': '0deg'
    }),
    []
  );

  return (
    <motion.article
      variants={fadeUp}
      ref={wrapRef}
      style={cardStyle}
      className="relative rounded-2xl [transform:translate3d(0,0,0.1px)] [perspective:550px]"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-200"
        style={{
          background:
            'radial-gradient(circle at var(--pointer-x) var(--pointer-y), rgba(31,60,222,0.55) 0%, rgba(230,242,29,0.18) 34%, transparent 62%)',
          filter: 'blur(44px)',
          opacity: 'calc(0.7 + (var(--pointer-from-center) * 0.1))'
        }}
      />

      <section
        ref={shellRef}
        className="group relative z-[1] grid overflow-hidden rounded-2xl border border-[rgba(31,60,222,0.34)] bg-[rgba(3,8,20,0.9)]"
        style={{
          boxShadow:
            'rgba(0,0,0,0.82) calc((var(--pointer-from-left) * 10px) - 3px) calc((var(--pointer-from-top) * 20px) - 6px) 20px -5px',
          transition: 'transform 1s ease',
          transform: 'translateZ(0) rotateX(0deg) rotateY(0deg)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transition = 'none';
          e.currentTarget.style.transform = 'translateZ(0) rotateX(var(--rotate-y)) rotateY(var(--rotate-x))';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transition = 'transform 1s ease';
          e.currentTarget.style.transform = 'translateZ(0) rotateX(0deg) rotateY(0deg)';
        }}
      >
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(150deg,rgba(31,60,222,0.22)_0%,rgba(230,242,29,0.10)_45%,rgba(255,59,47,0.14)_100%)]" />
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            mixBlendMode: 'color-dodge',
            animation: 'xuro-team-holo-bg 16s linear infinite',
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              rgba(31,60,222,0.16) 0%,
              rgba(230,242,29,0.13) 5%,
              rgba(255,59,47,0.10) 10%,
              rgba(8,14,31,0.18) 15%
            )`
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-[3]"
          style={{
            background:
              'radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y), rgba(230,242,29,0.16) 8%, rgba(31,60,222,0.35) 48%, rgba(5,8,18,0.82) 100%)',
            mixBlendMode: 'overlay'
          }}
        />

        <img
          src={member.image}
          alt={`${member.name} portrait`}
          loading="lazy"
          decoding="async"
          className="relative z-[4] h-72 w-full object-cover object-top"
          style={{
            transform:
              'translateX(calc((var(--pointer-from-left) - 0.5) * 8px)) scaleY(calc(1 + (var(--pointer-from-top) - 0.5) * 0.025))'
          }}
        />

        <div className="relative z-[5] border-t border-[rgba(31,60,222,0.3)] bg-[rgba(4,10,24,0.68)] p-5 backdrop-blur-xl">
          <h3 className="font-heading text-xl font-bold text-text">{member.name}</h3>
          <p className="mt-1 text-sm text-muted">{member.role}</p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name} LinkedIn`}
              className="inline-flex h-9 w-9 items-center justify-center border border-[rgba(31,60,222,0.35)] text-neon transition hover:border-neon hover:bg-[rgba(31,60,222,0.2)]"
            >
              <LinkedInIcon />
            </a>
            <a
              href={member.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name} Instagram`}
              className="inline-flex h-9 w-9 items-center justify-center border border-[rgba(31,60,222,0.35)] text-neon transition hover:border-neon hover:bg-[rgba(31,60,222,0.2)]"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </section>
    </motion.article>
  );
}
