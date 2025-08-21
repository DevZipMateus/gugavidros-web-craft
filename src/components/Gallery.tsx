
import { useState, useCallback, useMemo } from 'react';
import { Plus } from 'lucide-react';
import LazyImage from './LazyImage';

const Gallery = () => {
  // All images from the galeria folder
  const galleryImages = [
    '/lovable-uploads/galeria/01.jpg',
    '/lovable-uploads/galeria/02 (2).jpg',
    '/lovable-uploads/galeria/03 (2).jpg',
    '/lovable-uploads/galeria/04.jpg',
    '/lovable-uploads/galeria/05.jpg',
    '/lovable-uploads/galeria/06.jpg',
    '/lovable-uploads/galeria/07 (2).jpg',
    '/lovable-uploads/galeria/08.jpg',
    '/lovable-uploads/galeria/09.jpg',
    '/lovable-uploads/galeria/10 (2).jpg',
    '/lovable-uploads/galeria/11 (2).jpg',
    '/lovable-uploads/galeria/12.jpg',
    '/lovable-uploads/galeria/12 (2).jpg',
    '/lovable-uploads/galeria/13 (2).jpg',
    '/lovable-uploads/galeria/14.jpg',
    '/lovable-uploads/galeria/15 (2).jpg',
    '/lovable-uploads/galeria/16.jpg',
    '/lovable-uploads/galeria/18.jpg',
    '/lovable-uploads/galeria/19.jpg',
    '/lovable-uploads/galeria/20.jpg',
    '/lovable-uploads/galeria/20 (2).jpg',
    '/lovable-uploads/galeria/21.jpg',
    '/lovable-uploads/galeria/22.jpg',
    '/lovable-uploads/galeria/26.jpg',
    '/lovable-uploads/galeria/27.jpg',
    '/lovable-uploads/galeria/28.jpg',
    '/lovable-uploads/galeria/29.jpg',
    '/lovable-uploads/galeria/30.jpg',
    '/lovable-uploads/galeria/31.jpg',
    '/lovable-uploads/galeria/32.jpg',
    '/lovable-uploads/galeria/33.jpg',
    '/lovable-uploads/galeria/34.jpg',
    '/lovable-uploads/galeria/35.jpg',
  ];

  const [visibleImages, setVisibleImages] = useState(6);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const loadMoreImages = useCallback(() => {
    setVisibleImages(prev => Math.min(prev + 6, galleryImages.length));
  }, [galleryImages.length]);

  const handleImageError = useCallback((imageSrc: string) => {
    setFailedImages(prev => new Set([...prev, imageSrc]));
  }, []);

  const handleImageLoad = useCallback((imageSrc: string) => {
    setLoadedImages(prev => new Set([...prev, imageSrc]));
  }, []);

  const handleImageClick = useCallback((image: string) => {
    if (!failedImages.has(image)) {
      setSelectedImage(image);
    }
  }, [failedImages]);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const hasMoreImages = visibleImages < galleryImages.length;
  const loadingProgress = useMemo(() => {
    const visibleCount = Math.min(visibleImages, galleryImages.length);
    const loadedCount = loadedImages.size;
    return visibleCount > 0 ? Math.round((loadedCount / visibleCount) * 100) : 0;
  }, [visibleImages, galleryImages.length, loadedImages.size]);

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="section-title">Nossa Galeria</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos realizados em vidraçaria, serralheria e esquadrias de alumínio
          </p>
          
          {/* Loading Progress - Only show during initial load */}
          {loadedImages.size < visibleImages && visibleImages <= 6 && (
            <div className="mt-4 max-w-xs mx-auto">
              <div className="text-sm text-muted-foreground mb-2">
                Carregando imagens... {loadingProgress}%
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Image Grid - Fixed grid with stable dimensions */}
        <div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8"
          style={{
            contain: 'layout', // Contain layout changes to this grid
          }}
        >
          {galleryImages.slice(0, visibleImages).map((image, index) => (
            <LazyImage
              key={`${image}-${index}`}
              src={image}
              alt={`Trabalho GUGAVIDROS ${index + 1}`}
              index={index}
              onClick={() => handleImageClick(image)}
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          ))}
        </div>

        {/* Show More Button */}
        {hasMoreImages && (
          <div className="text-center">
            <button
              onClick={loadMoreImages}
              className="btn-hero inline-flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Ver Mais ({Math.min(6, galleryImages.length - visibleImages)} imagens)
            </button>
          </div>
        )}

        {/* Modal/Lightbox */}
        {selectedImage && !failedImages.has(selectedImage) && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={handleCloseModal}
            style={{ contain: 'layout style' }}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <img
                src={selectedImage}
                alt="Trabalho GUGAVIDROS - Visualização ampliada"
                className="w-full h-full object-contain rounded-lg"
                style={{ 
                  imageRendering: 'auto',
                  backfaceVisibility: 'hidden',
                }}
              />
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 w-10 h-10 bg-background/20 hover:bg-background/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
