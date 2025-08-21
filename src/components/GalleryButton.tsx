
import { Images } from 'lucide-react';

const GalleryButton = () => {
  return (
    <div className="flex justify-center mt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
      <a
        href="/galeria"
        className="btn-outline inline-flex items-center gap-2"
      >
        <Images className="w-5 h-5" />
        Ver Nossa Galeria
      </a>
    </div>
  );
};

export default GalleryButton;
