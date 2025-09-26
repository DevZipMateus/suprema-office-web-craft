
import React from 'react';
import { Shield, Star, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Produtos com certificação e garantia estendida para sua tranquilidade.'
    },
    {
      icon: Star,
      title: 'Sofisticação',
      description: 'Design elegante e moderno que valoriza seu ambiente corporativo.'
    },
    {
      icon: Zap,
      title: 'Ergonomia Avançada',
      description: 'Móveis desenvolvidos para máximo conforto e produtividade.'
    },
    {
      icon: Users,
      title: 'Atendimento Premium',
      description: 'Suporte personalizado do projeto à entrega e pós-venda.'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Video and Text Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Video */}
          <div className="relative animate-fade-in">
            <div className="relative max-w-lg mx-auto lg:max-w-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-2 lg:rotate-3"></div>
              <div className="relative bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border border-border/50">
                <div className="w-full h-[29rem] sm:h-[33rem] lg:h-[37rem] bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center overflow-hidden">
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
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-up">
            <div className="mb-6 sm:mb-8">
              <span className="inline-block px-3 py-2 sm:px-4 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Sobre a Suprema Office
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                Excelência em{' '}
                <span className="text-primary">mobiliário corporativo</span>{' '}
                há mais de 15 anos
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6">
                A Suprema Office nasceu da paixão por criar ambientes de trabalho 
                excepcionais. Especializada em mobiliário corporativo de alto padrão, 
                combinamos design sofisticado, ergonomia avançada e qualidade superior 
                para transformar escritórios em espaços inspiradores.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8">
                Nossa missão é elevar o padrão do seu ambiente corporativo através de 
                soluções personalizadas que refletem profissionalismo e bom gosto. 
                Cada projeto é desenvolvido com atenção aos detalhes e foco na 
                experiência do usuário.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="https://wa.me/5562984846914" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300">
                  Conheça Nossos Projetos
                </Button>
              </a>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Entre em Contato
              </Button>
            </div>
          </div>
        </div>

        {/* Features Grid Below */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-fade-in">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="bg-card p-4 sm:p-6 rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-12 sm:pt-16 border-t border-border/50">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Nossos Valores</h3>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Princípios que norteiam cada projeto e relacionamento com nossos clientes
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary transition-colors duration-300">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">Confiabilidade</h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Cumprimos prazos e mantemos nossa palavra em cada compromisso assumido.
              </p>
            </div>

            <div className="group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary transition-colors duration-300">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">Excelência</h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Buscamos sempre superar expectativas em qualidade e atendimento.
              </p>
            </div>

            <div className="group sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary transition-colors duration-300">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">Relacionamento</h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Construímos parcerias duradouras baseadas em confiança mútua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
