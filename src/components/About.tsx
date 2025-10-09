
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Missão",
      description: "Oferecer aos nossos clientes qualidade total desde o primeiro contato até o último toque"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Visão Ampla",
      description: "Mais de 15 anos de ampla visão sobre o segmento de atuação no mercado"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Compromisso",
      description: "Profissionais altamente qualificados desde a produção até a finalização do projeto"
    }
  ];

  const features = [
    "Produtos de alta qualidade",
    "Acabamento incrível e duradouro",
    "Atendimento em todo o Estado de São Paulo",
    "Equipe de profissionais qualificados",
    "Localizada no Litoral Norte de SP"
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in">
            Sobre a GUGAVIDROS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Vidraçaria e serralheria com mais de 15 anos de tradição e excelência no mercado
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Video */}
          <div className="animate-fade-in order-2 lg:order-1" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-lg mx-auto lg:max-w-none">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ pointerEvents: 'none' }}
              >
                <source src="/lovable-uploads/novas/video2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
              Tradição e Qualidade em Cada Projeto
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              A GUGAVIDROS é uma vidraçaria e serralheria que atua há mais de 15 anos no mercado, 
              com ampla visão sobre o segmento. Localizada no Litoral Norte de São Paulo, 
              atendemos em todo o Estado de São Paulo.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Nossa equipe possui profissionais altamente qualificados desde a produção até a 
              finalização do projeto. Trabalhamos com produtos de alta qualidade, proporcionando 
              à obra um acabamento incrível e duradouro.
            </p>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${0.5 + (index * 0.1)}s` }}
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="service-card p-8 text-center animate-fade-in"
              style={{ animationDelay: `${0.6 + (index * 0.2)}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-primary">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
