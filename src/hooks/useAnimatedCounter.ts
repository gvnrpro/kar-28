import { useState, useEffect } from 'react';

export const useAnimatedCounter = (target: number, isInView: boolean, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / (duration / 16); // 16ms is approx 1 frame at 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [target, isInView, duration]);

  return count;
};
