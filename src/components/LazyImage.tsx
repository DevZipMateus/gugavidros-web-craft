
import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Skeleton } from '@/components/ui/skeleton';

interface LazyImageProps {
  src: string;
  alt: string;
  index: number;
  onClick: () => void;
  onError: (src: string) => void;
  onLoad: (src: string) => void;
}

const LazyImage = ({ src, alt, index, onClick, onError, onLoad }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '200px',
  });

  // Start loading when intersecting
  useEffect(() => {
    if (isIntersecting && !shouldLoad && !hasError) {
      console.log(`Starting to load image: ${src}`);
      setShouldLoad(true);
    }
  }, [isIntersecting, shouldLoad, hasError, src]);

  const handleLoad = () => {
    console.log(`Successfully loaded image: ${src}`);
    setIsLoaded(true);
    onLoad(src);
  };

  const handleError = () => {
    console.log(`Failed to load image: ${src}`);
    setHasError(true);
    onError(src);
  };

  return (
    <div
      ref={ref}
      className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 will-change-transform"
      onClick={() => !hasError && onClick()}
    >
      {/* Show skeleton while not intersecting or while loading */}
      {(!isIntersecting || (shouldLoad && !isLoaded && !hasError)) && (
        <Skeleton className="w-full h-full" />
      )}

      {/* Load image when should load */}
      {shouldLoad && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            isLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
          }`}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          style={{
            imageRendering: 'auto',
            transform: 'translate3d(0, 0, 0)',
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
};

export default LazyImage;
