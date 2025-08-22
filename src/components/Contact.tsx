
import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(62) 98484-6914',
      action: 'tel:+5562984846914'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'supremaoffice.go@gmail.com',
      action: 'mailto:supremaoffice.go@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Av das Américas qd 6 LT 1\nresidencial ouro preto\nGoiânia - GO',
      action: 'https://maps.google.com/?q=Av+das+Américas+qd+6+LT+1+residencial+ouro+preto+Goiânia'
    },
    {
      icon: Clock,
      title: 'Funcionamento',
      content: 'Seg-Sex: 8h às 18h\nSáb: 8h às 12h\nDom: Fechado',
      action: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-suprema">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="animate-fade-up">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Entre em Contato
              </span>
              <h2 className="text-headline mb-6">
                Vamos criar o{' '}
                <span className="text-primary">escritório dos seus sonhos</span>
              </h2>
              <p className="text-body-large text-muted-foreground mb-8">
                Nossa equipe está pronta para desenvolver soluções personalizadas 
                que atendam perfeitamente às necessidades do seu negócio. Entre em 
                contato e descubra como podemos transformar seu ambiente corporativo.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={item.title}
                  className="flex items-start space-x-4 p-6 bg-card rounded-xl border border-border/50 hover:shadow-md transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    {item.action ? (
                      <a 
                        href={item.action}
                        target={item.action.startsWith('http') ? '_blank' : '_self'}
                        rel={item.action.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Siga-nos:</span>
              <a 
                href="https://www.instagram.com/supremaoffice?igsh=MWg1YXkxY3N2YW56Zw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Map and CTA */}
          <div className="animate-fade-in">
            {/* Interactive Map */}
            <div className="bg-card rounded-xl border border-border/50 overflow-hidden mb-8 hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-title mb-2">Nossa Localização</h3>
                  <p className="text-muted-foreground mb-4">
                    Av das Américas qd 6 LT 1<br />
                    Residencial Ouro Preto<br />
                    Goiânia - GO
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Av+das+Américas+qd+6+LT+1+residencial+ouro+preto+Goiânia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="btn-ghost-hero">
                      Ver no Google Maps
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
              <h3 className="text-title mb-4 text-primary-foreground">
                Pronto para começar seu projeto?
              </h3>
              <p className="mb-6 opacity-90">
                Entre em contato agora mesmo e receba um orçamento personalizado 
                para seu mobiliário corporativo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/5562984846914" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="secondary" 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full sm:w-auto"
                  >
                    WhatsApp
                  </Button>
                </a>
                <a href="tel:+5562984846914">
                  <Button 
                    variant="outline" 
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto"
                  >
                    Ligar Agora
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
