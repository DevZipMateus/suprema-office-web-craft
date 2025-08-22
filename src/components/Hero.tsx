
import React from 'react';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container-suprema relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Mobiliário Corporativo de Alto Padrão
              </span>
              <h1 className="text-display mb-6 text-foreground">
                Transforme seu{' '}
                <span className="text-primary font-bold">escritório</span>{' '}
                com elegância e{' '}
                <span className="text-primary font-bold">sofisticação</span>
              </h1>
              <p className="text-body-large text-muted-foreground max-w-lg">
                Na Suprema Office, criamos ambientes corporativos que inspiram produtividade 
                e bem-estar. Móveis ergonômicos, design sofisticado e qualidade excepcional 
                para sua empresa.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href="https://wa.me/5562984846914" target="_blank" rel="noopener noreferrer">
                <Button className="btn-hero group">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Button 
                variant="outline" 
                className="btn-outline-hero"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Award className="h-5 w-5 text-primary mr-2" />
                  <span className="text-2xl font-bold text-primary">15+</span>
                </div>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span className="text-2xl font-bold text-primary">500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span className="text-2xl font-bold text-primary">24h</span>
                </div>
                <p className="text-sm text-muted-foreground">Suporte técnico</p>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative lg:pl-8 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-border/50">
                <div className="aspect-square bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/fa262f54-2eae-4a81-a027-612688940af8.png" 
                    alt="Suprema Office - Mobiliário de Alto Padrão"
                    className="w-32 h-32 object-contain animate-float"
                  />
                </div>
                
                {/* Feature Cards */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">Ergonomia</h4>
                    <p className="text-xs text-muted-foreground">Conforto garantido</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">Qualidade</h4>
                    <p className="text-xs text-muted-foreground">Materiais premium</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">Design</h4>
                    <p className="text-xs text-muted-foreground">Estética moderna</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">Durabilidade</h4>
                    <p className="text-xs text-muted-foreground">Longa vida útil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-pulse-glow">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent rounded-lg transform rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
