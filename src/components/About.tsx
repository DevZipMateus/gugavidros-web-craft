
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

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Tradição e Qualidade em Cada Projeto
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A GUGAVIDROS é uma vidraçaria e serralheria que atua há mais de 15 anos no mercado, 
              com ampla visão sobre o segmento. Localizada no Litoral Norte de São Paulo, 
              atendemos em todo o Estado de São Paulo.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
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
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold mb-2">15+</div>
                  <div className="text-xl">Anos de Experiência</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm">SP Atendido</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">24h</div>
                    <div className="text-sm">Resposta Rápida</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full opacity-60"></div>
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
