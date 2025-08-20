
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Differentials from '@/components/Differentials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  useEffect(() => {
    // Update document title and meta tags
    document.title = 'GUGAVIDROS - Vidraçaria e Serralheria | Esquadrias de Alumínio em SP';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'GUGAVIDROS: 15+ anos em vidraçaria e serralheria no Estado de São Paulo. Esquadrias de alumínio, vidros temperados e laminados. Qualidade garantida e atendimento especializado.');
    }

    // Add Open Graph tags
    const addMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    addMetaTag('og:title', 'GUGAVIDROS - Vidraçaria e Serralheria | Esquadrias de Alumínio em SP');
    addMetaTag('og:description', 'GUGAVIDROS: 15+ anos em vidraçaria e serralheria no Estado de São Paulo. Esquadrias de alumínio, vidros temperados e laminados. Qualidade garantida e atendimento especializado.');
    addMetaTag('og:type', 'website');
    addMetaTag('og:url', 'https://www.gugavidros.com.br');
    addMetaTag('og:image', '/lovable-uploads/6b7daadc-31c4-43f8-84cf-6bbc0709fe36.png');

    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "GUGAVIDROS",
      "description": "Vidraçaria e serralheria com mais de 15 anos de experiência",
      "url": "https://www.gugavidros.com.br",
      "telephone": "+5512996403219",
      "email": "gugavidros@hotmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Benedito Braz Moreira, 855",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "openingHours": "Mo-Fr 08:00-18:00",
      "priceRange": "$$",
      "image": "/lovable-uploads/6b7daadc-31c4-43f8-84cf-6bbc0709fe36.png"
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(scriptTag);

    return () => {
      // Cleanup structured data on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
