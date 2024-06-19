"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Props {
  initialValue?: number;
  targetValue: number;
  duration?: number;
  threshold?: number;
  className?: string | undefined;
}

export default function CountFeature({
  initialValue = 0,
  targetValue,
  duration = 5000,
  threshold = 0.5,
  className,
}: Props) {
  const [count, setCount] = useState(initialValue);
  const counterRef = useRef<HTMLElement>(null);

  const updateCount = useCallback(() => {
    setCount((prevCount) => {
      const increment = Math.ceil((targetValue - prevCount) / (duration / 50));
      if (prevCount < targetValue) {
        return Math.min(prevCount + increment, targetValue);
      } else {
        return prevCount;
      }
    });
  }, [targetValue, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const interval = setInterval(updateCount, 50);
            return () => clearInterval(interval);
          }
        });
      },
      { threshold }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, updateCount]);

  return (
    <span ref={counterRef} className={className}>
      {count}
    </span>
  );
}
