
import React from 'react';
import { Sofa, Wrench, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Sofa,
      title: 'Mobiliário Corporativo',
      description: 'Móveis ergonômicos e sofisticados para escritórios modernos.',
      features: [
        'Mesas executivas e operacionais',
        'Cadeiras ergonômicas premium',
        'Estações de trabalho modulares',
        'Armários e estantes corporativas',
        'Móveis para salas de reunião'
      ],
      highlight: 'Linha Premium'
    },
    {
      icon: Sparkles,
      title: 'Fabricação Personalizada',
      description: 'Desenvolvimento de móveis sob medida para seu espaço único.',
      features: [
        'Projetos exclusivos e personalizados',
        'Materiais de alta qualidade',
        'Design contemporâneo',
        'Acabamentos premium',
        'Garantia estendida'
      ],
      highlight: 'Sob Medida'
    },
    {
      icon: Wrench,
      title: 'Reforma e Manutenção',
      description: 'Revitalização e manutenção especializada de móveis corporativos.',
      features: [
        'Reforma de cadeiras ergonômicas',
        'Troca de tecidos e espumas',
        'Manutenção preventiva',
        'Reparo de mecanismos',
        'Restauração de acabamentos'
      ],
      highlight: 'Especializado'
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <span className="inline-block px-3 py-2 sm:px-4 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Nossos Serviços
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 sm:mb-6">
            Soluções completas em{' '}
            <span className="text-primary">mobiliário corporativo</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde a concepção até a entrega, oferecemos serviços especializados 
            para criar e manter ambientes corporativos de alto padrão.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-card rounded-xl border border-border/50 hover:shadow-xl transition-all duration-500 animate-fade-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-6 sm:p-8">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span className="px-2 py-1 sm:px-3 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    {service.highlight}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="https://wa.me/5562984846914" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full group/btn text-sm sm:text-base py-2 sm:py-3">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-secondary/50 rounded-2xl p-6 sm:p-8 lg:p-12 animate-fade-in">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Como Trabalhamos</h3>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Nosso processo é estruturado para garantir resultados excepcionais em cada projeto
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: '01',
                title: 'Consulta Inicial',
                description: 'Análise das necessidades e definição do projeto'
              },
              {
                step: '02',
                title: 'Desenvolvimento',
                description: 'Criação do design e seleção de materiais premium'
              },
              {
                step: '03',
                title: 'Fabricação',
                description: 'Produção com controle rigoroso de qualidade'
              },
              {
                step: '04',
                title: 'Entrega & Instalação',
                description: 'Montagem profissional e suporte contínuo'
              }
            ].map((process, index) => (
              <div key={process.step} className="text-center group">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm sm:text-lg mx-auto group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-6 sm:top-8 left-full w-full h-0.5 bg-border transform translate-x-4"></div>
                  )}
                </div>
                <h4 className="font-semibold text-sm sm:text-base mb-2">{process.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
