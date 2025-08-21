
import React, { useState, useEffect, memo } from 'react';
import { Eye } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LazyImageProps {
  src: string;
  alt: string;
  index: number;
  onClick: () => void;
  onError: (src: string) => void;
  onLoad: (src: string) => void;
}

const LazyImage = memo(({ src, alt, index, onClick, onError, onLoad }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px', // Reduced for better performance
    triggerOnce: true, // Only trigger once to prevent re-renders
  });

  // Start loading when intersecting
  useEffect(() => {
    if (isIntersecting && !shouldLoad && !hasError) {
      setShouldLoad(true);
    }
  }, [isIntersecting, shouldLoad, hasError]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad(src);
  };

  const handleError = () => {
    setHasError(true);
    onError(src);
  };

  return (
    <div
      ref={ref}
      className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer will-change-transform"
      style={{
        minHeight: '200px', // Fixed minimum height to prevent layout shifts
        contain: 'layout style', // Contain layout changes
      }}
      onClick={() => !hasError && onClick()}
    >
      {/* Background placeholder to maintain dimensions */}
      <div className="absolute inset-0 bg-muted animate-pulse" />

      {/* Load image when should load */}
      {shouldLoad && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          style={{
            backfaceVisibility: 'hidden', // Optimize for transforms
          }}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-sm text-center px-2">
            Imagem não disponível
          </span>
        </div>
      )}

      {/* Hover overlay for loaded images */}
      {isLoaded && !hasError && (
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Eye className="w-8 h-8 text-white" />
        </div>
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

export default LazyImage;
