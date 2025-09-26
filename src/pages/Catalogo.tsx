
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const Catalogo = () => {
  // Organizando as imagens por categoria
  const imagesByCategory = {
    mesas: [],
    cadeiras: [],
    estantes: [],
    armarios: [],
    poltronas: []
  };

  const [imageLoaded, setImageLoaded] = React.useState<{ [key: string]: boolean }>({});

  const handleImageLoad = (imageKey: string) => {
    setImageLoaded(prev => ({ ...prev, [imageKey]: true }));
  };

  const handleSolicitarOrcamento = (imageName: string) => {
    const message = `Olá! Gostaria de solicitar um orçamento para um projeto similar ao: ${imageName}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const ImageCard = ({ image, category, index }: { image: { src: string; alt: string }, category: string, index: number }) => {
    const imageKey = `${category}-${index}`;
    
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-0 relative aspect-square group">
          {!imageLoaded[imageKey] && (
            <Skeleton className="w-full h-full absolute inset-0" />
          )}
          <img
            src={image.src}
            alt={image.alt}
            className={`w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300 ${
              imageLoaded[imageKey] ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => handleImageLoad(imageKey)}
            onClick={() => window.open(image.src, '_blank')}
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleSolicitarOrcamento(image.alt);
              }}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Solicitar Orçamento
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <Link to="/">
                <Button variant="outline" className="mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              </Link>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Nosso Catálogo
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Explore nossa galeria de projetos organizados por categoria
            </p>
          </div>
        </div>
      </section>

      {/* Catalog Section with Tabs */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="mesas" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="mesas">Mesas</TabsTrigger>
              <TabsTrigger value="cadeiras">Cadeiras</TabsTrigger>
              <TabsTrigger value="estantes">Estantes</TabsTrigger>
              <TabsTrigger value="armarios">Armários</TabsTrigger>
              <TabsTrigger value="poltronas">Poltronas</TabsTrigger>
            </TabsList>

            {Object.entries(imagesByCategory).map(([category, images]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {images.map((image, index) => (
                    <ImageCard 
                      key={index} 
                      image={image} 
                      category={category} 
                      index={index} 
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Bottom Back Button */}
      <section className="py-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Catalogo;
