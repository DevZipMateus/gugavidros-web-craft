
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      info: "(12) 99640-3219",
      link: "tel:+5512996403219"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      info: "gugavidros@hotmail.com",
      link: "mailto:gugavidros@hotmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Endereço",
      info: "Rua Benedito Braz Moreira, 855",
      link: "#"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Redes Sociais",
      info: "@GUGAVIDROS2014",
      link: "#"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Estamos prontos para desenvolver a solução ideal para seu projeto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold text-primary mb-8">
              Fale Conosco
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-primary">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    {item.link.startsWith('#') ? (
                      <p className="text-muted-foreground">{item.info}</p>
                    ) : (
                      <a 
                        href={item.link}
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        {item.info}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Service Areas */}
            <div className="bg-muted rounded-xl p-6">
              <h4 className="font-bold text-primary mb-4">Área de Atendimento</h4>
              <p className="text-muted-foreground mb-4">
                Localizados no Litoral Norte de São Paulo, atendemos em todo o Estado de São Paulo.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary font-medium">
                <MapPin className="w-4 h-4" />
                <span>Cobertura: Todo o Estado de São Paulo</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Solicite seu Orçamento
              </h3>
              <p className="text-white/90 mb-8 text-center leading-relaxed">
                Nossa equipe está pronta para atendê-lo e desenvolver a solução 
                ideal para seu projeto em vidraçaria e serralheria.
              </p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/5512996403219"
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-5 h-5" />
                  Falar pelo WhatsApp
                </a>
                
                <a
                  href="tel:+5512996403219"
                  className="w-full bg-white/10 text-white border-2 border-white/60 hover:bg-white hover:text-primary font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Ligar Agora
                </a>

                <a
                  href="mailto:gugavidros@hotmail.com"
                  className="w-full bg-white/10 text-white border-2 border-white/60 hover:bg-white hover:text-primary font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  Enviar E-mail
                </a>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">Resposta Rápida</span>
                </div>
                <p className="text-sm text-white/80">
                  Retornamos seu contato em até 24 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
