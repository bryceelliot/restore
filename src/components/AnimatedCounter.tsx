"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({ to, duration = 1.8, suffix = "", prefix = "" }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const elapsed = (now - start) / (duration * 1000);
          const eased = 1 - Math.pow(1 - Math.min(elapsed, 1), 3);
          setCount(Math.round(eased * to));
          if (elapsed < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { rootMargin: "-60px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}
