import React from 'react';
import { Instagram as InstagramIcon } from 'lucide-react';
import { Button } from './ui/button';

const Instagram = () => {
  return (
    <section id="instagram" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] mb-6 sm:mb-8">
            <InstagramIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Siga-nos no Instagram
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto">
            Acompanhe as novidades, projetos exclusivos e inspirações para transformar seu espaço de trabalho.
          </p>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <a 
              href="https://www.instagram.com/supremamoveisplanejados/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <InstagramIcon className="w-5 h-5" />
              Conferir Novidades
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
