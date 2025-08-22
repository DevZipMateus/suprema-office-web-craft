
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
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-suprema">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Sobre a Suprema Office
              </span>
              <h2 className="text-headline mb-6">
                Excelência em{' '}
                <span className="text-primary">mobiliário corporativo</span>{' '}
                há mais de 15 anos
              </h2>
              <p className="text-body-large text-muted-foreground mb-6">
                A Suprema Office nasceu da paixão por criar ambientes de trabalho 
                excepcionais. Especializada em mobiliário corporativo de alto padrão, 
                combinamos design sofisticado, ergonomia avançada e qualidade superior 
                para transformar escritórios em espaços inspiradores.
              </p>
              <p className="text-body text-muted-foreground mb-8">
                Nossa missão é elevar o padrão do seu ambiente corporativo através de 
                soluções personalizadas que refletem profissionalismo e bom gosto. 
                Cada projeto é desenvolvido com atenção aos detalhes e foco na 
                experiência do usuário.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5562984846914" target="_blank" rel="noopener noreferrer">
                <Button className="btn-hero">
                  Conheça Nossos Projetos
                </Button>
              </a>
              <Button 
                variant="outline" 
                className="btn-ghost-hero"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Entre em Contato
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="card-feature group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-title mb-3">{feature.title}</h3>
                <p className="text-caption leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 pt-16 border-t border-border/50">
          <div className="text-center mb-12">
            <h3 className="text-title mb-4">Nossos Valores</h3>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Princípios que norteiam cada projeto e relacionamento com nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <Shield className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h4 className="font-semibold mb-2">Confiabilidade</h4>
              <p className="text-sm text-muted-foreground">
                Cumprimos prazos e mantemos nossa palavra em cada compromisso assumido.
              </p>
            </div>

            <div className="group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <Star className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h4 className="font-semibold mb-2">Excelência</h4>
              <p className="text-sm text-muted-foreground">
                Buscamos sempre superar expectativas em qualidade e atendimento.
              </p>
            </div>

            <div className="group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <Users className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h4 className="font-semibold mb-2">Relacionamento</h4>
              <p className="text-sm text-muted-foreground">
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
