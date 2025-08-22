
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <img 
                src="/lovable-uploads/fa262f54-2eae-4a81-a027-612688940af8.png" 
                alt="Suprema Office"
                className="h-6 w-auto sm:h-8 brightness-0 invert"
              />
              <div>
                <h3 className="text-base sm:text-lg font-bold">Suprema Office</h3>
                <p className="text-xs sm:text-sm opacity-90">Mobiliário Corporativo</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm opacity-80 leading-relaxed mb-3 sm:mb-4">
              Especializada em mobiliário corporativo de alto padrão, combinando 
              design sofisticado, ergonomia e qualidade superior para transformar 
              ambientes de trabalho.
            </p>
            <p className="text-xs opacity-70">
              CNPJ: 963.440.751-04
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Contato</h4>
            <div className="space-y-2 sm:space-y-3">
              <a 
                href="tel:+5562984846914" 
                className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>(62) 98484-6914</span>
              </a>
              <a 
                href="mailto:supremaoffice.go@gmail.com" 
                className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>supremaoffice.go@gmail.com</span>
              </a>
              <a 
                href="https://maps.google.com/?q=Av+das+Américas+qd+6+LT+1+residencial+ouro+preto+Goiânia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2 sm:space-x-3 text-xs sm:text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Av das Américas qd 6 LT 1<br />
                  Residencial Ouro Preto<br />
                  Goiânia - GO
                </span>
              </a>
            </div>
          </div>

          {/* Opening Hours & Social */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Funcionamento</h4>
            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm opacity-90 mb-4 sm:mb-6">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
              <p>Domingo: Fechado</p>
            </div>
            
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Redes Sociais</h4>
            <a 
              href="https://www.instagram.com/supremaoffice?igsh=MWg1YXkxY3N2YW56Zw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs sm:text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>@supremaoffice</span>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <button 
              onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
              className="opacity-90 hover:opacity-100 transition-opacity"
            >
              Início
            </button>
            <button 
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="opacity-90 hover:opacity-100 transition-opacity"
            >
              Sobre
            </button>
            <button 
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="opacity-90 hover:opacity-100 transition-opacity"
            >
              Serviços
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="opacity-90 hover:opacity-100 transition-opacity"
            >
              Contato
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-4 sm:pt-6 text-center">
          <p className="text-xs sm:text-sm opacity-70">
            © {currentYear} Suprema Office. Todos os direitos reservados.
          </p>
          <p className="text-xs opacity-50 mt-1 sm:mt-2">
            Desenvolvido com tecnologia e design de ponta para oferecer a melhor experiência.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
