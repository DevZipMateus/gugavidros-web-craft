
import { Building, Home, Shield, Layers, Square, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Esquadrias de Alumínio",
      description: "Janelas, portas e estruturas em alumínio com alta durabilidade e acabamento premium",
      features: ["Janelas de Correr", "Portas de Alumínio", "Estruturas Personalizadas"]
    },
    {
      icon: <Square className="w-8 h-8" />,
      title: "Vidros Temperados",
      description: "Vidros de segurança com alta resistência para diversas aplicações",
      features: ["Box para Banheiro", "Portas de Vidro", "Janelas Temperadas"]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Vidros Laminados",
      description: "Vidros com dupla proteção, ideais para segurança e isolamento acústico",
      features: ["Fachadas", "Guarda-Corpos", "Divisórias"]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Janelas",
      description: "Soluções completas em janelas para residências e empresas",
      features: ["Janelas de Alumínio", "Janelas de Vidro", "Instalação Completa"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Portas",
      description: "Portas em alumínio e vidro com design moderno e segurança",
      features: ["Portas Residenciais", "Portas Comerciais", "Portas de Segurança"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Acessórios",
      description: "Componentes e acessórios de alta qualidade para complementar seus projetos",
      features: ["Ferragens", "Vedações", "Acabamentos"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Soluções completas em vidraçaria e serralheria com qualidade garantida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card p-8 animate-fade-in"
              style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <div className="text-primary">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href="https://wa.me/5512996403219"
                  className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Orçamento →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-white animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Precisa de um Orçamento Personalizado?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Nossa equipe está pronta para desenvolver a solução ideal para seu projeto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5512996403219"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
              <a
                href="mailto:gugavidros@hotmail.com"
                className="bg-white/10 text-white border-2 border-white/60 hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Enviar E-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
