
import { useState, useCallback, useMemo } from 'react';
import { Plus } from 'lucide-react';
import LazyImage from './LazyImage';

const Gallery = () => {
  // All images from the galeria and novas folders
  const galleryImages = [
    // Galeria folder
    '/lovable-uploads/galeria/01.jpg',
    '/lovable-uploads/galeria/02%20(2).jpg',
    '/lovable-uploads/galeria/03%20(2).jpg',
    '/lovable-uploads/galeria/04.jpg',
    '/lovable-uploads/galeria/05.jpg',
    '/lovable-uploads/galeria/06.jpg',
    '/lovable-uploads/galeria/07%20(2).jpg',
    '/lovable-uploads/galeria/08.jpg',
    '/lovable-uploads/galeria/09.jpg',
    '/lovable-uploads/galeria/10%20(2).jpg',
    '/lovable-uploads/galeria/11%20(2).jpg',
    '/lovable-uploads/galeria/12.jpg',
    '/lovable-uploads/galeria/12%20(2).jpg',
    '/lovable-uploads/galeria/13%20(2).jpg',
    '/lovable-uploads/galeria/14.jpg',
    '/lovable-uploads/galeria/15%20(2).jpg',
    '/lovable-uploads/galeria/16.jpg',
    '/lovable-uploads/galeria/18.jpg',
    '/lovable-uploads/galeria/19.jpg',
    '/lovable-uploads/galeria/20.jpg',
    '/lovable-uploads/galeria/20%20(2).jpg',
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
    // Novas folder
    '/lovable-uploads/novas/584486278020599.jpg',
    '/lovable-uploads/novas/619002297931326.jpg',
    '/lovable-uploads/novas/668125769244072.jpg',
    '/lovable-uploads/novas/692296890567149.jpg',
    '/lovable-uploads/novas/700147265718567.jpg',
    '/lovable-uploads/novas/766338459711671.jpg',
    '/lovable-uploads/novas/771163649091444.jpg',
    '/lovable-uploads/novas/773395802160511.jpg',
    '/lovable-uploads/novas/775478048634489.jpg',
    '/lovable-uploads/novas/778218711758808.jpg',
    '/lovable-uploads/novas/784914774268790.jpg',
    '/lovable-uploads/novas/787047374091781.jpg',
    '/lovable-uploads/novas/791540787170824.jpg',
    '/lovable-uploads/novas/795689326665897.jpg',
    '/lovable-uploads/novas/799594032830274.jpg',
    '/lovable-uploads/novas/801911709156015.jpg',
    '/lovable-uploads/novas/806825318960008.jpg',
    '/lovable-uploads/novas/833186819369565.jpg',
    '/lovable-uploads/novas/840598401632330.jpg',
    '/lovable-uploads/novas/1007278124829799.jpg',
    '/lovable-uploads/novas/1089898753299175.jpg',
    '/lovable-uploads/novas/1113011457213782.jpg',
    '/lovable-uploads/novas/1122957083280622.jpg',
    '/lovable-uploads/novas/1132831601648210.jpg',
    '/lovable-uploads/novas/1161945045817140.jpg',
    '/lovable-uploads/novas/1166505155535662.jpg',
    '/lovable-uploads/novas/1189080726405203.jpg',
    '/lovable-uploads/novas/1296106785581278.jpg',
    '/lovable-uploads/novas/1320242059222336.jpg',
    '/lovable-uploads/novas/1327487568859157.jpg',
    '/lovable-uploads/novas/1339533254184077.jpg',
    '/lovable-uploads/novas/1347788947038620.jpg',
    '/lovable-uploads/novas/1354777452730285.jpg',
    '/lovable-uploads/novas/1454999362380907.jpg',
    '/lovable-uploads/novas/1457522185517994.jpg',
    '/lovable-uploads/novas/1486874162439372.jpg',
    '/lovable-uploads/novas/1490933128763200.jpg',
    '/lovable-uploads/novas/1516118396479773.jpg',
    '/lovable-uploads/novas/1519624752508200.jpg',
    '/lovable-uploads/novas/1521114349044194.jpg',
    '/lovable-uploads/novas/1531587677845472.jpg',
    '/lovable-uploads/novas/1533602391425248.jpg',
    '/lovable-uploads/novas/1710463430342866.jpg',
    '/lovable-uploads/novas/1732763774079570.jpg',
    '/lovable-uploads/novas/1735888613785203.jpg',
    '/lovable-uploads/novas/1769601387094554.jpg',
    '/lovable-uploads/novas/1785206038857725.jpg',
    '/lovable-uploads/novas/1789028368371100.jpg',
    '/lovable-uploads/novas/1804495133526994.jpg',
    '/lovable-uploads/novas/1849579618930251.jpg',
    '/lovable-uploads/novas/1852195802386514.jpg',
    '/lovable-uploads/novas/1872103710381693.jpg',
    '/lovable-uploads/novas/1918658958992500.jpg',
    '/lovable-uploads/novas/1987898905300740.jpg',
    '/lovable-uploads/novas/2012329429590854.jpg',
    '/lovable-uploads/novas/2216434438802394.jpg',
    '/lovable-uploads/novas/2267493173695160.jpg',
    '/lovable-uploads/novas/2287777075017512.jpg',
    '/lovable-uploads/novas/2941859752667289.jpg',
    '/lovable-uploads/novas/3155043558012379.jpg',
    '/lovable-uploads/novas/3746710675628775.jpg',
    '/lovable-uploads/novas/4022611614667770.jpg',
    '/lovable-uploads/novas/24632051679798228.jpg',
    '/lovable-uploads/novas/25152139531059910.jpg',
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
