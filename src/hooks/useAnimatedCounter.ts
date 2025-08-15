import { useState, useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

export const useAnimatedCounter = (target: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const controls = animate(0, target, {
            duration: duration,
            ease: "easeOut",
            onUpdate(value) {
              setCount(Math.round(value));
            }
          });
          // Stop observing after animation starts to prevent re-triggering
          observer.disconnect();
          
          return () => controls.stop();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [target, duration]);

  return { count, ref };
};
