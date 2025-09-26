
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
      { src: '/lovable-uploads/novas fotos/mesas/1058048399738405.jpg', alt: 'Mesa Design 1058048399738405' },
      { src: '/lovable-uploads/novas fotos/mesas/1126553962939477.jpg', alt: 'Mesa Design 1126553962939477' },
      { src: '/lovable-uploads/novas fotos/mesas/1129098415324586.jpg', alt: 'Mesa Design 1129098415324586' },
      { src: '/lovable-uploads/novas fotos/mesas/1131333665610136.jpg', alt: 'Mesa Design 1131333665610136' },
      { src: '/lovable-uploads/novas fotos/mesas/1231545382111703.jpg', alt: 'Mesa Design 1231545382111703' },
      { src: '/lovable-uploads/novas fotos/mesas/1257071483099064.jpg', alt: 'Mesa Design 1257071483099064' },
      { src: '/lovable-uploads/novas fotos/mesas/1330652321905338.jpg', alt: 'Mesa Design 1330652321905338' },
      { src: '/lovable-uploads/novas fotos/mesas/1348656753524121.jpg', alt: 'Mesa Design 1348656753524121' },
      { src: '/lovable-uploads/novas fotos/mesas/1350127976758662.jpg', alt: 'Mesa Design 1350127976758662' },
      { src: '/lovable-uploads/novas fotos/mesas/1368604368605935.jpg', alt: 'Mesa Design 1368604368605935' },
      { src: '/lovable-uploads/novas fotos/mesas/1511858409987034.jpg', alt: 'Mesa Design 1511858409987034' },
      { src: '/lovable-uploads/novas fotos/mesas/1594568471522221.jpg', alt: 'Mesa Design 1594568471522221' },
      { src: '/lovable-uploads/novas fotos/mesas/1780567562566856.jpg', alt: 'Mesa Design 1780567562566856' },
      { src: '/lovable-uploads/novas fotos/mesas/1853004525426636.jpg', alt: 'Mesa Design 1853004525426636' },
      { src: '/lovable-uploads/novas fotos/mesas/1980401526091719.jpg', alt: 'Mesa Design 1980401526091719' },
      { src: '/lovable-uploads/novas fotos/mesas/1982864425797454.jpg', alt: 'Mesa Design 1982864425797454' },
      { src: '/lovable-uploads/novas fotos/mesas/2191524547998729.jpg', alt: 'Mesa Design 2191524547998729' },
      { src: '/lovable-uploads/novas fotos/mesas/24439385915742181.jpg', alt: 'Mesa Design 24439385915742181' },
      { src: '/lovable-uploads/novas fotos/mesas/4252318761693369.jpg', alt: 'Mesa Design 4252318761693369' },
      { src: '/lovable-uploads/novas fotos/mesas/809550864819075.jpg', alt: 'Mesa Design 809550864819075' },
      { src: '/lovable-uploads/novas fotos/mesas/829056076359438.jpg', alt: 'Mesa Design 829056076359438' },
      { src: '/lovable-uploads/novas fotos/mesas/974212134864788.jpg', alt: 'Mesa Design 974212134864788' }
    ],
    cadeiras: [
      { src: '/lovable-uploads/novas fotos/cadeiras/1115663940702811.jpg', alt: 'Cadeira Design 1115663940702811' },
      { src: '/lovable-uploads/novas fotos/cadeiras/1129074935352334.jpg', alt: 'Cadeira Design 1129074935352334' },
      { src: '/lovable-uploads/novas fotos/cadeiras/1153601650166944.jpg', alt: 'Cadeira Design 1153601650166944' },
      { src: '/lovable-uploads/novas fotos/cadeiras/1154898696496643.jpg', alt: 'Cadeira Design 1154898696496643' },
      { src: '/lovable-uploads/novas fotos/cadeiras/1157270309637868.jpg', alt: 'Cadeira Design 1157270309637868' },
      { src: '/lovable-uploads/novas fotos/cadeiras/1231780892324001.jpg', alt: 'Cadeira Design 1231780892324001' },
      { src: '/lovable-uploads/novas fotos/cadeiras/1300140694886164.jpg', alt: 'Cadeira Design 1300140694886164' },
      { src: '/lovable-uploads/novas fotos/cadeiras/1302167384681806.jpg', alt: 'Cadeira Design 1302167384681806' },
      { src: '/lovable-uploads/novas fotos/cadeiras/1315095226878682.jpg', alt: 'Cadeira Design 1315095226878682' },
      { src: '/lovable-uploads/novas fotos/cadeiras/1350929033406014.jpg', alt: 'Cadeira Design 1350929033406014' },
      { src: '/lovable-uploads/novas fotos/cadeiras/1374076460996019.jpg', alt: 'Cadeira Design 1374076460996019' },
      { src: '/lovable-uploads/novas fotos/cadeiras/1701636677196943.jpg', alt: 'Cadeira Design 1701636677196943' },
      { src: '/lovable-uploads/novas fotos/cadeiras/1848421562778219.jpg', alt: 'Cadeira Design 1848421562778219' },
      { src: '/lovable-uploads/novas fotos/cadeiras/1913876052669746.jpg', alt: 'Cadeira Design 1913876052669746' },
      { src: '/lovable-uploads/novas fotos/cadeiras/1933227337468500.jpg', alt: 'Cadeira Design 1933227337468500' },
      { src: '/lovable-uploads/novas fotos/cadeiras/1939379453577753.jpg', alt: 'Cadeira Design 1939379453577753' },
      { src: '/lovable-uploads/novas fotos/cadeiras/1968717630596611.jpg', alt: 'Cadeira Design 1968717630596611' },
      { src: '/lovable-uploads/novas fotos/cadeiras/2185766785223977.jpg', alt: 'Cadeira Design 2185766785223977' },
      { src: '/lovable-uploads/novas fotos/cadeiras/5069677853258105.jpg', alt: 'Cadeira Design 5069677853258105' },
      { src: '/lovable-uploads/novas fotos/cadeiras/780995248128518.jpg', alt: 'Cadeira Design 780995248128518' },
      { src: '/lovable-uploads/novas fotos/cadeiras/812944551404219.jpg', alt: 'Cadeira Design 812944551404219' },
      { src: '/lovable-uploads/novas fotos/cadeiras/823951383321728.jpg', alt: 'Cadeira Design 823951383321728' },
      { src: '/lovable-uploads/novas fotos/cadeiras/824986389960107.jpg', alt: 'Cadeira Design 824986389960107' }
    ],
    armarios: [
      { src: '/lovable-uploads/novas fotos/armarios/1133302382074585.jpg', alt: 'Armário Design 1133302382074585' },
      { src: '/lovable-uploads/novas fotos/armarios/1138888950909564.jpg', alt: 'Armário Design 1138888950909564' },
      { src: '/lovable-uploads/novas fotos/armarios/1242468251258130.jpg', alt: 'Armário Design 1242468251258130' },
      { src: '/lovable-uploads/novas fotos/armarios/1282050783983868.jpg', alt: 'Armário Design 1282050783983868' },
      { src: '/lovable-uploads/novas fotos/armarios/1300757828257669.jpg', alt: 'Armário Design 1300757828257669' },
      { src: '/lovable-uploads/novas fotos/armarios/1333512115012574.jpg', alt: 'Armário Design 1333512115012574' },
      { src: '/lovable-uploads/novas fotos/armarios/1341608403994507.jpg', alt: 'Armário Design 1341608403994507' },
      { src: '/lovable-uploads/novas fotos/armarios/1452472835825285.jpg', alt: 'Armário Design 1452472835825285' },
      { src: '/lovable-uploads/novas fotos/armarios/1521182385573786.jpg', alt: 'Armário Design 1521182385573786' },
      { src: '/lovable-uploads/novas fotos/armarios/1557093422133886.jpg', alt: 'Armário Design 1557093422133886' },
      { src: '/lovable-uploads/novas fotos/armarios/1568488440802025.jpg', alt: 'Armário Design 1568488440802025' },
      { src: '/lovable-uploads/novas fotos/armarios/1638668777092452.jpg', alt: 'Armário Design 1638668777092452' },
      { src: '/lovable-uploads/novas fotos/armarios/1747818539194714.jpg', alt: 'Armário Design 1747818539194714' },
      { src: '/lovable-uploads/novas fotos/armarios/1814351509163672.jpg', alt: 'Armário Design 1814351509163672' },
      { src: '/lovable-uploads/novas fotos/armarios/24486334811036375.jpg', alt: 'Armário Design 24486334811036375' },
      { src: '/lovable-uploads/novas fotos/armarios/24615217418128893.jpg', alt: 'Armário Design 24615217418128893' },
      { src: '/lovable-uploads/novas fotos/armarios/788148923920831.jpg', alt: 'Armário Design 788148923920831' },
      { src: '/lovable-uploads/novas fotos/armarios/810711554699496.jpg', alt: 'Armário Design 810711554699496' },
      { src: '/lovable-uploads/novas fotos/armarios/814830867702998.jpg', alt: 'Armário Design 814830867702998' }
    ],
    poltronas: [
      { src: '/lovable-uploads/novas fotos/poltronas/1096223605832728.jpg', alt: 'Poltrona Design 1096223605832728' },
      { src: '/lovable-uploads/novas fotos/poltronas/1149445193821002.jpg', alt: 'Poltrona Design 1149445193821002' },
      { src: '/lovable-uploads/novas fotos/poltronas/1456923468865968.jpg', alt: 'Poltrona Design 1456923468865968' },
      { src: '/lovable-uploads/novas fotos/poltronas/24866300812965416.jpg', alt: 'Poltrona Design 24866300812965416' },
      { src: '/lovable-uploads/novas fotos/poltronas/3254574814717303.jpg', alt: 'Poltrona Design 3254574814717303' },
      { src: '/lovable-uploads/novas fotos/poltronas/828361749530713.jpg', alt: 'Poltrona Design 828361749530713' }
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
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="mesas">Mesas</TabsTrigger>
              <TabsTrigger value="cadeiras">Cadeiras</TabsTrigger>
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
