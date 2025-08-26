
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, MessageCircle, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import ClassificationProgress from '@/components/ClassificationProgress';
import { useImageClassification, ClassificationResult } from '@/hooks/useImageClassification';

const Catalogo = () => {
  // Todas as imagens originais
  const allImages = [
    { src: "/lovable-uploads/galeria/Cliente_1_1_IMG_20250817_114008.jpg", alt: "Cliente 1" },
    { src: "/lovable-uploads/galeria/Cliente_1_2_IMG-20250816-WA0000.jpg", alt: "Cliente 2" },
    { src: "/lovable-uploads/galeria/Cliente_1_3_IMG-20250805-WA0004.jpg", alt: "Cliente 3" },
    { src: "/lovable-uploads/galeria/Cliente_1_4_IMG_20250723_180817_151.jpg", alt: "Cliente 4" },
    { src: "/lovable-uploads/galeria/Cliente_1_5_IMG_20250723_180814_758.jpg", alt: "Cliente 5" },
    { src: "/lovable-uploads/galeria/Cliente_1_10_Screenshot_2025-07-08-14-55-58.jpg", alt: "Cliente 10" },
    { src: "/lovable-uploads/galeria/Cliente_1_11_IMG-20250708-WA0001.jpg", alt: "Cliente 11" },
    { src: "/lovable-uploads/galeria/Cliente_1_12_IMG_20250708_133537_359.jpg", alt: "Cliente 12" },
    { src: "/lovable-uploads/galeria/Cliente_1_13_Screenshot_2025-07-04-21-32-59.jpg", alt: "Cliente 13" },
    { src: "/lovable-uploads/galeria/Cliente_1_14_1751473216458.jpg", alt: "Cliente 14" },
    { src: "/lovable-uploads/galeria/Cliente_1_20_IMG_20250626_190247_073.jpg", alt: "Cliente 20" },
    { src: "/lovable-uploads/galeria/Cliente_1_21_IMG_20250626_190242_315.jpg", alt: "Cliente 21" },
    { src: "/lovable-uploads/galeria/Cliente_1_22_IMG_20250626_190241_152.jpg", alt: "Cliente 22" },
    { src: "/lovable-uploads/galeria/Cliente_1_23_IMG_20250626_190239_613.jpg", alt: "Cliente 23" },
    { src: "/lovable-uploads/galeria/Cliente_1_24_IMG-20250626-WA0049.jpg", alt: "Cliente 24" },
    { src: "/lovable-uploads/galeria/Cliente_1_30_IMG-20250626-WA0009.jpg", alt: "Cliente 30" },
    { src: "/lovable-uploads/galeria/Cliente_1_31_IMG-20250626-WA0003.jpg", alt: "Cliente 31" },
    { src: "/lovable-uploads/galeria/Cliente_1_32_IMG-20250626-WA0006.jpg", alt: "Cliente 32" },
    { src: "/lovable-uploads/galeria/Cliente_1_33_IMG-20250625-WA0006.jpg", alt: "Cliente 33" },
    { src: "/lovable-uploads/galeria/Cliente_1_34_IMG_20250625_082132.jpg", alt: "Cliente 34" },
    { src: "/lovable-uploads/galeria/Cliente_1_35_IMG_20250624_102215_739.webp", alt: "Cliente 35" },
    { src: "/lovable-uploads/galeria/Cliente_1_40_IMG-20250623-WA0107.jpg", alt: "Cliente 40" },
    { src: "/lovable-uploads/galeria/Cliente_1_41_IMG-20250623-WA0076.jpg", alt: "Cliente 41" },
    { src: "/lovable-uploads/galeria/Cliente_1_42_IMG-20250623-WA0024.jpg", alt: "Cliente 42" },
    { src: "/lovable-uploads/galeria/Cliente_1_43_IMG-20250623-WA0090.jpg", alt: "Cliente 43" },
    { src: "/lovable-uploads/galeria/Cliente_1_44_IMG-20250623-WA0091.jpg", alt: "Cliente 44" },
    { src: "/lovable-uploads/galeria/Cliente_1_50_Screenshot_2024-07-24-08-58-20.jpg", alt: "Cliente 50" },
    { src: "/lovable-uploads/galeria/Cliente_1_51_IMG_20240405_124418_194.jpg", alt: "Cliente 51" },
    { src: "/lovable-uploads/galeria/Cliente_1_52_IMG_20231128_144139.jpg", alt: "Cliente 52" },
    { src: "/lovable-uploads/galeria/Cliente_1_53_IMG-20220329-WA0030_16287b.jpg", alt: "Cliente 53" },
  ];

  const { classifyImage, isLoading: classifierLoading, error: classifierError, isReady } = useImageClassification();
  
  const [imagesByCategory, setImagesByCategory] = useState<{
    mesas: typeof allImages;
    cadeiras: typeof allImages;
    estantes: typeof allImages;
    armarios: typeof allImages;
    poltronas: typeof allImages;
  }>({
    mesas: [],
    cadeiras: [],
    estantes: [],
    armarios: [],
    poltronas: []
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [currentAnalyzing, setCurrentAnalyzing] = useState<string>('');
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({});

  const handleImageLoad = (imageKey: string) => {
    setImageLoaded(prev => ({ ...prev, [imageKey]: true }));
  };

  const handleSolicitarOrcamento = (imageName: string) => {
    const message = `Olá! Gostaria de solicitar um orçamento para um projeto similar ao: ${imageName}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const analyzeImages = async () => {
    if (!isReady) return;

    setIsAnalyzing(true);
    setAnalysisProgress(0);

    const categorizedImages = {
      mesas: [] as typeof allImages,
      cadeiras: [] as typeof allImages,
      estantes: [] as typeof allImages,
      armarios: [] as typeof allImages,
      poltronas: [] as typeof allImages
    };

    for (let i = 0; i < allImages.length; i++) {
      const image = allImages[i];
      setCurrentAnalyzing(image.alt);
      
      try {
        const result = await classifyImage(image.src);
        categorizedImages[result.category].push(image);
        console.log(`Classified ${image.alt} as ${result.category} (confidence: ${result.confidence})`);
      } catch (error) {
        console.error(`Error classifying ${image.alt}:`, error);
        // Em caso de erro, adicionar à categoria mesas por padrão
        categorizedImages.mesas.push(image);
      }

      setAnalysisProgress(i + 1);
      
      // Pequeno delay para mostrar o progresso
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    setImagesByCategory(categorizedImages);
    setIsAnalyzing(false);
    setCurrentAnalyzing('');
  };

  useEffect(() => {
    if (isReady && Object.values(imagesByCategory).every(arr => arr.length === 0)) {
      analyzeImages();
    }
  }, [isReady]);

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
      
      <ClassificationProgress 
        isAnalyzing={isAnalyzing}
        progress={analysisProgress}
        total={allImages.length}
        currentImage={currentAnalyzing}
      />
      
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
              Explore nossa galeria de projetos organizados automaticamente por categoria
            </p>
            {classifierError && (
              <div className="mb-4 p-4 bg-destructive/10 text-destructive rounded-md">
                Erro na classificação automática: {classifierError}
              </div>
            )}
            {!isAnalyzing && isReady && (
              <Button onClick={analyzeImages} variant="outline" className="mb-4">
                <RefreshCw className="w-4 h-4 mr-2" />
                Reanalisar Imagens
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Catalog Section with Tabs */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="mesas" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="mesas">Mesas ({imagesByCategory.mesas.length})</TabsTrigger>
              <TabsTrigger value="cadeiras">Cadeiras ({imagesByCategory.cadeiras.length})</TabsTrigger>
              <TabsTrigger value="estantes">Estantes ({imagesByCategory.estantes.length})</TabsTrigger>
              <TabsTrigger value="armarios">Armários ({imagesByCategory.armarios.length})</TabsTrigger>
              <TabsTrigger value="poltronas">Poltronas ({imagesByCategory.poltronas.length})</TabsTrigger>
            </TabsList>

            {Object.entries(imagesByCategory).map(([category, images]) => (
              <TabsContent key={category} value={category}>
                {images.length > 0 ? (
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
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      {isAnalyzing ? 'Analisando imagens...' : 'Nenhuma imagem encontrada nesta categoria.'}
                    </p>
                  </div>
                )}
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
