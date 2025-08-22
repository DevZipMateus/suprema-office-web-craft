
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Início', action: () => scrollToSection('hero') },
    { name: 'Sobre', action: () => scrollToSection('about') },
    { name: 'Serviços', action: () => scrollToSection('services') },
    { name: 'Catálogo', href: '/catalogo' },
    { name: 'Contato', action: () => scrollToSection('contact') }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/lovable-uploads/fa262f54-2eae-4a81-a027-612688940af8.png"
                alt="Suprema Office"
                className="h-8 md:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.href ? (
                  <Link
                    to={item.href}
                    className="text-white hover:text-gray-300 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={item.action}
                    className="text-white hover:text-gray-300 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-gray-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-800">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="block px-3 py-2 text-white hover:text-gray-300 font-medium transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={item.action}
                      className="block w-full text-left px-3 py-2 text-white hover:text-gray-300 font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
