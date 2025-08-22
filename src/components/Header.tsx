
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full z-40 bg-black shadow-lg">
      {/* Top Bar */}
      <div className="hidden lg:block bg-black text-white py-2 border-b border-white/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center text-xs xl:text-sm">
            <div className="flex items-center space-x-4 xl:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 xl:w-4 xl:h-4" />
                <span>(62) 98484-6914</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 xl:w-4 xl:h-4" />
                <span>supremaoffice.go@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3 h-3 xl:w-4 xl:h-4" />
              <span>Seg-Sex 8h-18h | Sáb 8h-12h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className="container mx-auto px-4 py-3 lg:py-4 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 lg:space-x-3">
            <img 
              src="/lovable-uploads/fa262f54-2eae-4a81-a027-612688940af8.png" 
              alt="Suprema Office - Mobiliário Corporativo"
              className="h-8 w-auto sm:h-10 lg:h-12"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Suprema Office</h1>
              <p className="text-xs sm:text-sm text-white/70">Mobiliário Corporativo</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm xl:text-base font-medium text-white hover:text-white/80 transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <a href="https://wa.me/5562984846914" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-black hover:bg-white/90 border-2 border-white hover:border-white/90 px-6 xl:px-8 py-2 xl:py-3 rounded-lg font-semibold text-sm xl:text-base transition-all duration-300">
                Orçamento
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-white/80 hover:bg-white/10"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black border-t border-white/20 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 sm:py-6 max-w-7xl">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-2 sm:py-3 text-base sm:text-lg text-white hover:text-white/80 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-white/20 space-y-3 sm:hidden">
                <div className="flex items-center space-x-2 text-sm text-white/80">
                  <Phone className="w-4 h-4" />
                  <span>(62) 98484-6914</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white/80">
                  <Mail className="w-4 h-4" />
                  <span>supremaoffice.go@gmail.com</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/20">
                <a href="https://wa.me/5562984846914" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-black hover:bg-white/90 w-full px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300">
                    Solicitar Orçamento
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
