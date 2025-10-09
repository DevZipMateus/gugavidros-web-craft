import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import GalleryButton from './GalleryButton';
const Hero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url(/lovable-uploads/5a96a1e9-3154-4bef-b9ed-0bbd3e926746.png)'
    }}></div>
      
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary/60"></div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[#fe8602]/[0.72]">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white/60 rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-white/40 -rotate-12"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border-2 border-white/30 rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left text-white order-2 lg:order-1">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in">
              GUGAVIDROS
            </h1>
            
            {/* Tagline */}
            <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-white/90 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              Transparência que Reflete Qualidade
            </p>
            
            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed text-white/80 animate-fade-in px-4 lg:px-0" style={{
            animationDelay: '0.4s'
          }}>
              Há mais de 15 anos atuando no mercado de vidraçaria e serralheria, 
              oferecemos soluções completas em esquadrias de alumínio e vidros para todo o Estado de São Paulo.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-6 mb-8 sm:mb-12 animate-fade-in px-4 lg:px-0" style={{
            animationDelay: '0.6s'
          }}>
              <div className="flex items-center gap-2 sm:gap-3 glass-effect p-3 sm:p-4 rounded-lg">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-secondary flex-shrink-0" />
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-bold">15+</div>
                  <div className="text-xs sm:text-sm text-white/80">Anos de Experiência</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 glass-effect p-3 sm:p-4 rounded-lg">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-secondary flex-shrink-0" />
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-bold">100%</div>
                  <div className="text-xs sm:text-sm text-white/80">Qualidade Garantida</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 glass-effect p-3 sm:p-4 rounded-lg">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-secondary flex-shrink-0" />
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-bold">SP</div>
                  <div className="text-xs sm:text-sm text-white/80">Todo o Estado</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in px-4 lg:px-0" style={{
            animationDelay: '0.8s'
          }}>
              <a href="https://wa.me/5512996403219" className="btn-hero inline-flex items-center justify-center gap-2 text-sm sm:text-base" target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#servicos" className="btn-outline inline-flex items-center justify-center gap-2 text-sm sm:text-base">
                Nossos Serviços
              </a>
            </div>

            {/* Gallery Button */}
            <GalleryButton />
          </div>

          {/* Video */}
          <div className="animate-fade-in order-1 lg:order-2 px-4 lg:px-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-sm sm:max-w-md mx-auto lg:max-w-none">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ pointerEvents: 'none' }}
              >
                <source src="/lovable-uploads/novas/video1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;