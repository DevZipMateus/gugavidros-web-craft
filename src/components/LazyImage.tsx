
import { useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px',
  });

  const handleLoad = () => {
    setIsLoaded(true);
    setIsLoading(false);
    onLoad(src);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    onError(src);
  };

  const startLoading = () => {
    if (!isLoading && !isLoaded && !hasError) {
      setIsLoading(true);
    }
  };

  return (
    <div
      ref={ref}
      className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 will-change-transform"
      onClick={onClick}
    >
      {!isIntersecting && (
        <Skeleton className="w-full h-full" />
      )}
      
      {isIntersecting && !isLoaded && !hasError && !isLoading && (
        <div className="w-full h-full bg-muted animate-pulse" onMouseEnter={startLoading} />
      )}

      {isIntersecting && (isLoading || isLoaded) && !hasError && (
        <>
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            onLoad={handleLoad}
            onError={handleError}
            style={{
              imageRendering: 'optimizeQuality',
              transform: 'translate3d(0, 0, 0)',
            }}
          />
          {!isLoaded && (
            <Skeleton className="absolute inset-0" />
          )}
        </>
      )}

      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-sm text-center px-2">
            Imagem não disponível
          </span>
        </div>
      )}

      {isLoaded && !hasError && (
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Eye className="w-8 h-8 text-white" />
        </div>
      )}
    </div>
  );
};

export default LazyImage;
