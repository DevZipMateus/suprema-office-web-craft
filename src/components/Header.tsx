
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
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container-suprema">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(62) 98484-6914</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>supremaoffice.go@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Seg-Sex 8h-18h | Sáb 8h-12h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed w-full z-40 bg-primary shadow-lg">
        <nav className="container-suprema py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/fa262f54-2eae-4a81-a027-612688940af8.png" 
                alt="Suprema Office - Mobiliário Corporativo"
                className="h-10 w-auto"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-primary-foreground">Suprema Office</h1>
                <p className="text-xs text-primary-foreground/70">Mobiliário Corporativo</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-foreground transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <a href="https://wa.me/5562984846914" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-2 border-primary-foreground hover:border-primary-foreground/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Orçamento
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary border-t border-primary-foreground/20 shadow-lg animate-fade-in">
            <div className="container-suprema py-6">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left py-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4 border-t border-primary-foreground/20">
                  <a href="https://wa.me/5562984846914" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                      Solicitar Orçamento
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
