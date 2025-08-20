
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/6b7daadc-31c4-43f8-84cf-6bbc0709fe36.png" 
                alt="GUGAVIDROS"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Há mais de 15 anos oferecendo soluções completas em vidraçaria e serralheria 
              para todo o Estado de São Paulo. Qualidade, tradição e confiança em cada projeto.
            </p>
            <p className="text-white/60 text-sm">
              CNPJ: 19.971.148/0001-00
            </p>
            <p className="text-white/90 font-medium mt-2">
              "Transparência que Reflete Qualidade"
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <a 
                  href="tel:+5512996403219"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  (12) 99640-3219
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <a 
                  href="mailto:gugavidros@hotmail.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  gugavidros@hotmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                <span className="text-white/80">
                  Rua Benedito Braz Moreira, 855<br />
                  Litoral Norte - SP
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-secondary" />
                <span className="text-white/80">@GUGAVIDROS2014</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Serviços</h3>
            <ul className="space-y-2 text-white/80">
              <li>Esquadrias de Alumínio</li>
              <li>Vidros Temperados</li>
              <li>Vidros Laminados</li>
              <li>Janelas</li>
              <li>Portas</li>
              <li>Acessórios</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 GUGAVIDROS. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/5512996403219"
                className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
