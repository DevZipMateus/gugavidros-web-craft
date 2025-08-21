
import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const { threshold = 0.1, rootMargin = '100px', triggerOnce = false } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    const isElementIntersecting = entry.isIntersecting;
    
    setIsIntersecting(isElementIntersecting);
    
    if (isElementIntersecting && triggerOnce && !hasTriggered) {
      setHasTriggered(true);
      // Disconnect observer if triggerOnce is true
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    }
  }, [triggerOnce, hasTriggered]);

  useEffect(() => {
    const element = ref.current;
    if (!element || (triggerOnce && hasTriggered)) return;

    // Clean up existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
      root: null,
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered, handleIntersection]);

  return { 
    ref, 
    isIntersecting: triggerOnce ? (isIntersecting || hasTriggered) : isIntersecting 
  };
};
