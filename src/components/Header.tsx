
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    // Close mobile menu
    setIsMenuOpen(false);
    
    // If it's a section link (starts with #)
    if (href.startsWith('#')) {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll to section
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // We're already on home page, just scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // It's a regular route, navigate normally
      navigate(href);
    }
  };

  const menuItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '/galeria', label: 'Galeria' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <>
      {/* Top Bar - Fixed height to prevent layout shifts */}
      <div className={`bg-primary text-white py-2 px-4 transition-all duration-300 ${
        isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-10 opacity-100'
      }`}>
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(12) 99640-3219</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>gugavidros@hotmail.com</span>
            </div>
          </div>
          <div className="hidden md:block text-sm">
            @GUGAVIDROS2014
          </div>
        </div>
      </div>

      {/* Main Header - Fixed position without dynamic top changes */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 will-change-transform">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <button onClick={() => handleNavigation('/')}>
                <img 
                  src="/lovable-uploads/6b7daadc-31c4-43f8-84cf-6bbc0709fe36.png" 
                  alt="GUGAVIDROS - Vidros e Esquadrias de Alumínio"
                  className="h-12 w-auto"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className="font-medium text-foreground transition-colors duration-300 hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="https://wa.me/5512996403219"
                className="btn-hero text-sm px-6 py-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-foreground transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="text-foreground font-medium py-2 border-b border-border text-left"
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="https://wa.me/5512996403219"
                  className="btn-hero text-center mt-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Orçamento
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
