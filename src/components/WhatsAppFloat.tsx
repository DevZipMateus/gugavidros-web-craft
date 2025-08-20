
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5512996403219"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};

export default WhatsAppFloat;
