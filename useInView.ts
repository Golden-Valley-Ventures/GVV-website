"use client";

import { useRef, useState, useEffect } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useInView(opts: UseInViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: opts.threshold ?? 0.15,
        rootMargin: opts.rootMargin ?? "0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [opts.threshold, opts.rootMargin]);

  return [ref, visible] as const;
}
