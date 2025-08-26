
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
    mesas: [
      { src: "/lovable-uploads/galeria/Cliente_1_1_IMG_20250817_114008.jpg", alt: "Mesa Cliente 1" },
      { src: "/lovable-uploads/galeria/Cliente_1_10_Screenshot_2025-07-08-14-55-58.jpg", alt: "Mesa Cliente 10" },
      { src: "/lovable-uploads/galeria/Cliente_1_20_IMG_20250626_190247_073.jpg", alt: "Mesa Cliente 20" },
      { src: "/lovable-uploads/galeria/Cliente_1_30_IMG-20250626-WA0009.jpg", alt: "Mesa Cliente 30" },
      { src: "/lovable-uploads/galeria/Cliente_1_40_IMG-20250623-WA0107.jpg", alt: "Mesa Cliente 40" },
      { src: "/lovable-uploads/galeria/Cliente_1_50_Screenshot_2024-07-24-08-58-20.jpg", alt: "Mesa Cliente 50" },
    ],
    cadeiras: [
      { src: "/lovable-uploads/galeria/Cliente_1_2_IMG-20250816-WA0000.jpg", alt: "Cadeira Cliente 2" },
      { src: "/lovable-uploads/galeria/Cliente_1_11_IMG-20250708-WA0001.jpg", alt: "Cadeira Cliente 11" },
      { src: "/lovable-uploads/galeria/Cliente_1_21_IMG_20250626_190242_315.jpg", alt: "Cadeira Cliente 21" },
      { src: "/lovable-uploads/galeria/Cliente_1_31_IMG-20250626-WA0003.jpg", alt: "Cadeira Cliente 31" },
      { src: "/lovable-uploads/galeria/Cliente_1_41_IMG-20250623-WA0076.jpg", alt: "Cadeira Cliente 41" },
      { src: "/lovable-uploads/galeria/Cliente_1_51_IMG_20240405_124418_194.jpg", alt: "Cadeira Cliente 51" },
    ],
    estantes: [
      { src: "/lovable-uploads/galeria/Cliente_1_3_IMG-20250805-WA0004.jpg", alt: "Estante Cliente 3" },
      { src: "/lovable-uploads/galeria/Cliente_1_12_IMG_20250708_133537_359.jpg", alt: "Estante Cliente 12" },
      { src: "/lovable-uploads/galeria/Cliente_1_22_IMG_20250626_190241_152.jpg", alt: "Estante Cliente 22" },
      { src: "/lovable-uploads/galeria/Cliente_1_32_IMG-20250626-WA0006.jpg", alt: "Estante Cliente 32" },
      { src: "/lovable-uploads/galeria/Cliente_1_42_IMG-20250623-WA0024.jpg", alt: "Estante Cliente 42" },
      { src: "/lovable-uploads/galeria/Cliente_1_52_IMG_20231128_144139.jpg", alt: "Estante Cliente 52" },
    ],
    armarios: [
      { src: "/lovable-uploads/galeria/Cliente_1_4_IMG_20250723_180817_151.jpg", alt: "Armário Cliente 4" },
      { src: "/lovable-uploads/galeria/Cliente_1_13_Screenshot_2025-07-04-21-32-59.jpg", alt: "Armário Cliente 13" },
      { src: "/lovable-uploads/galeria/Cliente_1_23_IMG_20250626_190239_613.jpg", alt: "Armário Cliente 23" },
      { src: "/lovable-uploads/galeria/Cliente_1_33_IMG-20250625-WA0006.jpg", alt: "Armário Cliente 33" },
      { src: "/lovable-uploads/galeria/Cliente_1_43_IMG-20250623-WA0090.jpg", alt: "Armário Cliente 43" },
      { src: "/lovable-uploads/galeria/Cliente_1_53_IMG-20220329-WA0030_16287b.jpg", alt: "Armário Cliente 53" },
    ],
    poltronas: [
      { src: "/lovable-uploads/galeria/Cliente_1_5_IMG_20250723_180814_758.jpg", alt: "Poltrona Cliente 5" },
      { src: "/lovable-uploads/galeria/Cliente_1_14_1751473216458.jpg", alt: "Poltrona Cliente 14" },
      { src: "/lovable-uploads/galeria/Cliente_1_24_IMG-20250626-WA0049.jpg", alt: "Poltrona Cliente 24" },
      { src: "/lovable-uploads/galeria/Cliente_1_34_IMG_20250625_082132.jpg", alt: "Poltrona Cliente 34" },
      { src: "/lovable-uploads/galeria/Cliente_1_44_IMG-20250623-WA0091.jpg", alt: "Poltrona Cliente 44" },
      { src: "/lovable-uploads/galeria/Cliente_1_35_IMG_20250624_102215_739.webp", alt: "Poltrona Cliente 35" },
    ]
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
