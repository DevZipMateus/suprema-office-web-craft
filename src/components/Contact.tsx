import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Contact = () => {
  const contactInfo = [{
    icon: Phone,
    title: 'Telefone',
    content: '(62) 98484-6914',
    action: 'tel:+5562984846914'
  }, {
    icon: Mail,
    title: 'E-mail',
    content: 'supremaoffice.go@gmail.com',
    action: 'mailto:supremaoffice.go@gmail.com'
  }, {
    icon: MapPin,
    title: 'Endereço',
    content: 'Av das Américas qd 6 LT 1\nresidencial ouro preto\nGoiânia - GO',
    action: 'https://maps.google.com/?q=Av+das+Américas+qd+6+LT+1+residencial+ouro+preto+Goiânia'
  }, {
    icon: Clock,
    title: 'Funcionamento',
    content: 'Seg-Sex: 8h às 18h\nSáb: 8h às 12h\nDom: Fechado',
    action: null
  }];
  return <section id="contact" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="animate-fade-up order-2 lg:order-1">
            <div className="mb-6 sm:mb-8">
              <span className="inline-block px-3 py-2 sm:px-4 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Entre em Contato
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                Vamos criar o{' '}
                <span className="text-primary">escritório dos seus sonhos</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8">
                Nossa equipe está pronta para desenvolver soluções personalizadas 
                que atendam perfeitamente às necessidades do seu negócio. Entre em 
                contato e descubra como podemos transformar seu ambiente corporativo.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-4 sm:gap-6 mb-6 sm:mb-8">
              {contactInfo.map((item, index) => <div key={item.title} className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-card rounded-xl border border-border/50 hover:shadow-md transition-all duration-300 animate-fade-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm sm:text-base mb-1">{item.title}</h4>
                    {item.action ? <a href={item.action} target={item.action.startsWith('http') ? '_blank' : '_self'} rel={item.action.startsWith('http') ? 'noopener noreferrer' : ''} className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors whitespace-pre-line">
                        {item.content}
                      </a> : <p className="text-xs sm:text-sm text-muted-foreground whitespace-pre-line">{item.content}</p>}
                  </div>
                </div>)}
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <span className="text-xs sm:text-sm font-medium">Siga-nos:</span>
              <a href="https://www.instagram.com/supremaoffice?igsh=MWg1YXkxY3N2YW56Zw==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Map and CTA */}
          <div className="animate-fade-in order-1 lg:order-2">
            {/* Interactive Map */}
            <div className="bg-card rounded-xl border border-border/50 overflow-hidden mb-6 sm:mb-8 hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-secondary to-accent flex items-center justify-center p-6 sm:p-8">
                <div className="text-center">
                  <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4">Nossa Localização</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                    Av das Américas qd 6 LT 1<br />
                    Residencial Ouro Preto<br />
                    Goiânia - GO
                  </p>
                  <a href="https://maps.google.com/?q=Av+das+Américas+qd+6+LT+1+residencial+ouro+preto+Goiânia" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3">
                      Ver no Google Maps
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-primary text-primary-foreground rounded-xl p-6 sm:p-8 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-primary-foreground">
                Pronto para começar seu projeto?
              </h3>
              <p className="text-sm sm:text-base mb-4 sm:mb-6 opacity-90">
                Entre em contato agora mesmo e receba um orçamento personalizado 
                para seu mobiliário corporativo.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a href="https://wa.me/5562984846914" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                    WhatsApp
                  </Button>
                </a>
                <a href="tel:+5562984846914">
                  <Button variant="outline" className="w-full sm:w-auto border-primary-foreground/30 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 bg-zinc-50 text-slate-950">
                    Ligar Agora
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;