
import { Award, Users, Clock, MapPin, Wrench, CheckCircle2 } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "15 Anos de Experiência",
      description: "Mais de uma década e meia de tradição e conhecimento no mercado de vidraçaria e serralheria"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Profissionais Qualificados",
      description: "Equipe altamente qualificada desde a produção até a finalização do projeto"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Produtos de Alta Qualidade",
      description: "Trabalhamos apenas com materiais premium, garantindo acabamento incrível e duradouro"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Cobertura Estadual",
      description: "Atendemos todo o Estado de São Paulo com a mesma qualidade e excelência"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Atendimento Ágil",
      description: "Resposta rápida e acompanhamento completo do projeto do início ao fim"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Soluções Personalizadas",
      description: "Desenvolvemos projetos sob medida para atender às suas necessidades específicas"
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title animate-fade-in text-3xl sm:text-4xl">
            Nossos Diferenciais
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
            O que nos torna únicos no mercado de vidraçaria e serralheria
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <div className="text-primary">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4 text-center">{item.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground text-center leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 px-4">
              Nossa Missão
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/95 mb-6 sm:mb-8 px-4">
              "Oferecer aos nossos clientes qualidade total desde o primeiro contato até o último toque"
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-2">100%</div>
                <div className="text-xs sm:text-sm text-white/80">Qualidade Garantida</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-2">15+</div>
                <div className="text-xs sm:text-sm text-white/80">Anos de Tradição</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-2">SP</div>
                <div className="text-xs sm:text-sm text-white/80">Todo o Estado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
