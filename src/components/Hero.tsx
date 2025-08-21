
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import GalleryButton from './GalleryButton';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"></div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white/60 rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-white/40 -rotate-12"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border-2 border-white/30 rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          {/* Main Heading */}
          <h1 className="hero-text mb-6 animate-fade-in">
            GUGAVIDROS
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-4 text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Transparência que Reflete Qualidade
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/80 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Há mais de 15 anos atuando no mercado de vidraçaria e serralheria, 
            oferecemos soluções completas em esquadrias de alumínio e vidros para todo o Estado de São Paulo.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-3 glass-effect p-4 rounded-lg">
              <Award className="w-8 h-8 text-secondary" />
              <div className="text-left">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-white/80">Anos de Experiência</div>
              </div>
            </div>
            <div className="flex items-center gap-3 glass-effect p-4 rounded-lg">
              <Shield className="w-8 h-8 text-secondary" />
              <div className="text-left">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-white/80">Qualidade Garantida</div>
              </div>
            </div>
            <div className="flex items-center gap-3 glass-effect p-4 rounded-lg">
              <Users className="w-8 h-8 text-secondary" />
              <div className="text-left">
                <div className="text-2xl font-bold">SP</div>
                <div className="text-sm text-white/80">Todo o Estado</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://wa.me/5512996403219"
              className="btn-hero inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#servicos"
              className="btn-outline inline-flex items-center gap-2"
            >
              Nossos Serviços
            </a>
          </div>

          {/* Gallery Button */}
          <GalleryButton />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
