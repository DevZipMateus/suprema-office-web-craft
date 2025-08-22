
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const Catalogo = () => {
  const images = [
    { src: "/lovable-uploads/galeria/Cliente_1_1_IMG_20250817_114008.jpg", alt: "Projeto Cliente 1" },
    { src: "/lovable-uploads/galeria/Cliente_1_2_IMG-20250816-WA0000.jpg", alt: "Projeto Cliente 2" },
    { src: "/lovable-uploads/galeria/Cliente_1_3_IMG-20250805-WA0004.jpg", alt: "Projeto Cliente 3" },
    { src: "/lovable-uploads/galeria/Cliente_1_4_IMG_20250723_180817_151.jpg", alt: "Projeto Cliente 4" },
    { src: "/lovable-uploads/galeria/Cliente_1_5_IMG_20250723_180814_758.jpg", alt: "Projeto Cliente 5" },
    { src: "/lovable-uploads/galeria/Cliente_1_6_IMG-20250718-WA0000.jpg", alt: "Projeto Cliente 6" },
    { src: "/lovable-uploads/galeria/Cliente_1_7_IMG-20250711-WA0051.jpg", alt: "Projeto Cliente 7" },
    { src: "/lovable-uploads/galeria/Cliente_1_8_IMG-20250711-WA0060.jpg", alt: "Projeto Cliente 8" },
    { src: "/lovable-uploads/galeria/Cliente_1_9_IMG_20250711_145308.jpg", alt: "Projeto Cliente 9" },
    { src: "/lovable-uploads/galeria/Cliente_1_10_Screenshot_2025-07-08-14-55-58.jpg", alt: "Projeto Cliente 10" },
    { src: "/lovable-uploads/galeria/Cliente_1_11_IMG-20250708-WA0001.jpg", alt: "Projeto Cliente 11" },
    { src: "/lovable-uploads/galeria/Cliente_1_12_IMG_20250708_133537_359.jpg", alt: "Projeto Cliente 12" },
    { src: "/lovable-uploads/galeria/Cliente_1_13_Screenshot_2025-07-04-21-32-59.jpg", alt: "Projeto Cliente 13" },
    { src: "/lovable-uploads/galeria/Cliente_1_14_1751473216458.jpg", alt: "Projeto Cliente 14" },
    { src: "/lovable-uploads/galeria/Cliente_1_15_IMG-20250630-WA0024.jpg", alt: "Projeto Cliente 15" },
    { src: "/lovable-uploads/galeria/Cliente_1_16_IMG-20250630-WA0037.jpg", alt: "Projeto Cliente 16" },
    { src: "/lovable-uploads/galeria/Cliente_1_17_IMG-20250626-WA0070.jpg", alt: "Projeto Cliente 17" },
    { src: "/lovable-uploads/galeria/Cliente_1_18_IMG-20250626-WA0068.jpg", alt: "Projeto Cliente 18" },
    { src: "/lovable-uploads/galeria/Cliente_1_19_IMG-20250626-WA0064.jpg", alt: "Projeto Cliente 19" },
    { src: "/lovable-uploads/galeria/Cliente_1_20_IMG_20250626_190247_073.jpg", alt: "Projeto Cliente 20" },
    { src: "/lovable-uploads/galeria/Cliente_1_21_IMG_20250626_190242_315.jpg", alt: "Projeto Cliente 21" },
    { src: "/lovable-uploads/galeria/Cliente_1_22_IMG_20250626_190241_152.jpg", alt: "Projeto Cliente 22" },
    { src: "/lovable-uploads/galeria/Cliente_1_23_IMG_20250626_190239_613.jpg", alt: "Projeto Cliente 23" },
    { src: "/lovable-uploads/galeria/Cliente_1_24_IMG-20250626-WA0049.jpg", alt: "Projeto Cliente 24" },
    { src: "/lovable-uploads/galeria/Cliente_1_25_IMG-20250626-WA0017.jpg", alt: "Projeto Cliente 25" },
    { src: "/lovable-uploads/galeria/Cliente_1_26_IMG-20250626-WA0011.jpg", alt: "Projeto Cliente 26" },
    { src: "/lovable-uploads/galeria/Cliente_1_27_IMG-20250626-WA0000.jpg", alt: "Projeto Cliente 27" },
    { src: "/lovable-uploads/galeria/Cliente_1_28_IMG-20250626-WA0004.jpg", alt: "Projeto Cliente 28" },
    { src: "/lovable-uploads/galeria/Cliente_1_29_IMG-20250626-WA0008.jpg", alt: "Projeto Cliente 29" },
    { src: "/lovable-uploads/galeria/Cliente_1_30_IMG-20250626-WA0009.jpg", alt: "Projeto Cliente 30" },
    { src: "/lovable-uploads/galeria/Cliente_1_31_IMG-20250626-WA0003.jpg", alt: "Projeto Cliente 31" },
    { src: "/lovable-uploads/galeria/Cliente_1_32_IMG-20250626-WA0006.jpg", alt: "Projeto Cliente 32" },
    { src: "/lovable-uploads/galeria/Cliente_1_33_IMG-20250625-WA0006.jpg", alt: "Projeto Cliente 33" },
    { src: "/lovable-uploads/galeria/Cliente_1_34_IMG_20250625_082132.jpg", alt: "Projeto Cliente 34" },
    { src: "/lovable-uploads/galeria/Cliente_1_35_IMG_20250624_102215_739.webp", alt: "Projeto Cliente 35" },
    { src: "/lovable-uploads/galeria/Cliente_1_36_IMG-20250624-WA0021.jpg", alt: "Projeto Cliente 36" },
    { src: "/lovable-uploads/galeria/Cliente_1_37_IMG-20250624-WA0015.jpg", alt: "Projeto Cliente 37" },
    { src: "/lovable-uploads/galeria/Cliente_1_38_IMG-20250624-WA0014.jpg", alt: "Projeto Cliente 38" },
    { src: "/lovable-uploads/galeria/Cliente_1_39_IMG-20250624-WA0011.jpg", alt: "Projeto Cliente 39" },
    { src: "/lovable-uploads/galeria/Cliente_1_40_IMG-20250623-WA0107.jpg", alt: "Projeto Cliente 40" },
    { src: "/lovable-uploads/galeria/Cliente_1_41_IMG-20250623-WA0076.jpg", alt: "Projeto Cliente 41" },
    { src: "/lovable-uploads/galeria/Cliente_1_42_IMG-20250623-WA0024.jpg", alt: "Projeto Cliente 42" },
    { src: "/lovable-uploads/galeria/Cliente_1_43_IMG-20250623-WA0090.jpg", alt: "Projeto Cliente 43" },
    { src: "/lovable-uploads/galeria/Cliente_1_44_IMG-20250623-WA0091.jpg", alt: "Projeto Cliente 44" },
    { src: "/lovable-uploads/galeria/Cliente_1_45_IMG-20250623-WA0089.jpg", alt: "Projeto Cliente 45" },
    { src: "/lovable-uploads/galeria/Cliente_1_46_IMG-20250623-WA0039.jpg", alt: "Projeto Cliente 46" },
    { src: "/lovable-uploads/galeria/Cliente_1_47_IMG-20250623-WA0019.jpg", alt: "Projeto Cliente 47" },
    { src: "/lovable-uploads/galeria/Cliente_1_48_IMG-20250623-WA0040.jpg", alt: "Projeto Cliente 48" },
    { src: "/lovable-uploads/galeria/Cliente_1_49_IMG-20250623-WA0045.jpg", alt: "Projeto Cliente 49" },
    { src: "/lovable-uploads/galeria/Cliente_1_50_Screenshot_2024-07-24-08-58-20.jpg", alt: "Projeto Cliente 50" },
    { src: "/lovable-uploads/galeria/Cliente_1_51_IMG_20240405_124418_194.jpg", alt: "Projeto Cliente 51" },
    { src: "/lovable-uploads/galeria/Cliente_1_52_IMG_20231128_144139.jpg", alt: "Projeto Cliente 52" },
    { src: "/lovable-uploads/galeria/Cliente_1_53_IMG-20220329-WA0030_16287b.jpg", alt: "Projeto Cliente 53" }
  ];

  const [imageLoaded, setImageLoaded] = React.useState<{ [key: number]: boolean }>({});

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Space */}
      <div className="h-20"></div>
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Nosso Catálogo
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Explore nossa galeria de projetos realizados com mobiliário corporativo de alta qualidade
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0 relative aspect-square">
                  {!imageLoaded[index] && (
                    <Skeleton className="w-full h-full absolute inset-0" />
                  )}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300 ${
                      imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(index)}
                    onClick={() => window.open(image.src, '_blank')}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalogo;
