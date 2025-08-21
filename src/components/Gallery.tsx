
import { useState } from 'react';
import { Eye, Plus } from 'lucide-react';

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

  const [visibleImages, setVisibleImages] = useState(10); // Show 2 rows (10 images) initially
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const loadMoreImages = () => {
    setVisibleImages(prev => Math.min(prev + 10, galleryImages.length));
  };

  const handleImageError = (imageSrc: string) => {
    console.log(`Failed to load image: ${imageSrc}`);
    setFailedImages(prev => new Set([...prev, imageSrc]));
  };

  const handleImageLoad = (imageSrc: string) => {
    console.log(`Successfully loaded image: ${imageSrc}`);
  };

  const hasMoreImages = visibleImages < galleryImages.length;
  const workingImages = galleryImages.filter(img => !failedImages.has(img));

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-white to-muted">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="section-title">Nossa Galeria</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos realizados em vidraçaria, serralheria e esquadrias de alumínio
          </p>
        </div>

        {/* Debug Info - Remove in production */}
        {failedImages.size > 0 && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
            <p>Imagens que falharam ao carregar ({failedImages.size}):</p>
            <ul className="text-sm">
              {Array.from(failedImages).map((img, index) => (
                <li key={index}>• {img}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {galleryImages.slice(0, visibleImages).map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Trabalho GUGAVIDROS ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                onError={() => handleImageError(image)}
                onLoad={() => handleImageLoad(image)}
              />
              {failedImages.has(image) && (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Imagem não disponível</span>
                </div>
              )}
              {!failedImages.has(image) && (
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
              )}
            </div>
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
              Ver Mais ({Math.min(10, galleryImages.length - visibleImages)} imagens)
            </button>
          </div>
        )}

        {/* Modal/Lightbox */}
        {selectedImage && !failedImages.has(selectedImage) && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <img
                src={selectedImage}
                alt="Trabalho GUGAVIDROS - Visualização ampliada"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
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
