
import { useEffect } from 'react';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const GalleryPage = () => {
  useEffect(() => {
    // Update document title for gallery page
    document.title = 'Galeria - GUGAVIDROS | Nossos Trabalhos em Vidraçaria e Serralheria';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Confira nossa galeria com trabalhos realizados em vidraçaria, serralheria e esquadrias de alumínio. GUGAVIDROS - 15+ anos de experiência em SP.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20"> {/* Add padding to account for fixed header */}
        <Gallery />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default GalleryPage;
