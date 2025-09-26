
import React from 'react';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/30 pt-16 sm:pt-20 lg:pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up order-2 lg:order-1">
            <div className="mb-6 lg:mb-8">
              <span className="inline-block px-3 py-2 sm:px-4 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 lg:mb-6">
                Mobiliário Corporativo de Alto Padrão
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 lg:mb-6 text-foreground">
                Transforme seu{' '}
                <span className="text-primary font-bold">escritório</span>{' '}
                com elegância e{' '}
                <span className="text-primary font-bold">sofisticação</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Na Suprema Office, criamos ambientes corporativos que inspiram produtividade 
                e bem-estar. Móveis ergonômicos, design sofisticado e qualidade excepcional 
                para sua empresa.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 lg:mb-12">
              <a href="https://wa.me/5562984846914" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 group">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 pt-6 lg:pt-8 border-t border-border/50">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-1 sm:mb-2">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-1 sm:mr-2" />
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">15+</span>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">Anos de experiência</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-1 sm:mb-2">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-1 sm:mr-2" />
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">500+</span>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">Clientes satisfeitos</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-1 sm:mb-2">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-1 sm:mr-2" />
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">24h</span>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">Suporte técnico</p>
              </div>
            </div>
          </div>

          {/* Video/Visual */}
          <div className="relative animate-fade-in order-1 lg:order-2">
            <div className="relative max-w-lg mx-auto lg:max-w-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-2 lg:rotate-3"></div>
              <div className="relative bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border border-border/50">
                <div className="w-full h-[28rem] bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center overflow-hidden">
                  <video 
                    src="/lovable-uploads/galeria/suprema.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-xl"
                  >
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
                
                {/* Feature Cards */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mt-4 sm:mt-6">
                  <div className="text-center p-2 sm:p-3 lg:p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-xs sm:text-sm lg:text-base mb-1">Ergonomia</h4>
                    <p className="text-xs lg:text-sm text-muted-foreground">Conforto garantido</p>
                  </div>
                  <div className="text-center p-2 sm:p-3 lg:p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-xs sm:text-sm lg:text-base mb-1">Qualidade</h4>
                    <p className="text-xs lg:text-sm text-muted-foreground">Materiais premium</p>
                  </div>
                  <div className="text-center p-2 sm:p-3 lg:p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-xs sm:text-sm lg:text-base mb-1">Design</h4>
                    <p className="text-xs lg:text-sm text-muted-foreground">Estética moderna</p>
                  </div>
                  <div className="text-center p-2 sm:p-3 lg:p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-xs sm:text-sm lg:text-base mb-1">Durabilidade</h4>
                    <p className="text-xs lg:text-sm text-muted-foreground">Longa vida útil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center animate-pulse-glow">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary" />
            </div>
            <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-accent rounded-lg transform rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
