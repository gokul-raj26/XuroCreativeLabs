import { useEffect, useState } from 'react';

export default function useParallax(multiplier = 0.04) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event) => {
      const x = (event.clientX - window.innerWidth / 2) * multiplier;
      const y = (event.clientY - window.innerHeight / 2) * multiplier;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [multiplier]);

  return offset;
}
