'use client';

import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  target: number;
  duration?: number;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
}

export default function StatCounter({
  target,
  duration = 2000,
  label,
  sublabel,
  icon,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * target);
      setCount(current);

      if (progress === 1) {
        clearInterval(interval);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isVisible, target, duration]);

  return (
    <div ref={ref} className="hover:scale-105 transition-transform duration-300">
      {icon && <div className="mb-3">{icon}</div>}
      <div className="text-3xl md:text-4xl font-bold text-dark">
        {count.toLocaleString()}
        {sublabel && <span className="text-lg text-mid ml-1">{sublabel}</span>}
      </div>
      <div className="text-sm text-mid mt-2">{label}</div>
    </div>
  );
}
