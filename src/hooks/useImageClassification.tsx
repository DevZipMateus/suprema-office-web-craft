
import { useState, useEffect } from 'react';
import { pipeline, Pipeline } from '@huggingface/transformers';

export interface ClassificationResult {
  category: 'mesas' | 'cadeiras' | 'estantes' | 'armarios' | 'poltronas';
  confidence: number;
}

export const useImageClassification = () => {
  const [classifier, setClassifier] = useState<Pipeline | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initClassifier = async () => {
      try {
        setIsLoading(true);
        const imageClassifier = await pipeline(
          'image-classification',
          'microsoft/resnet-50',
          { device: 'webgpu' }
        );
        setClassifier(imageClassifier);
        setError(null);
      } catch (err) {
        console.error('Error initializing classifier:', err);
        setError('Failed to initialize image classifier');
      } finally {
        setIsLoading(false);
      }
    };

    initClassifier();
  }, []);

  const classifyImage = async (imageSrc: string): Promise<ClassificationResult> => {
    if (!classifier) {
      throw new Error('Classifier not initialized');
    }

    try {
      const results = await classifier(imageSrc);
      
      // Mapear labels do modelo para nossas categorias
      const categoryMap: { [key: string]: 'mesas' | 'cadeiras' | 'estantes' | 'armarios' | 'poltronas' } = {
        'table': 'mesas',
        'dining table': 'mesas',
        'desk': 'mesas',
        'chair': 'cadeiras',
        'armchair': 'poltronas',
        'recliner': 'poltronas',
        'bookshelf': 'estantes',
        'shelf': 'estantes',
        'cabinet': 'armarios',
        'wardrobe': 'armarios',
        'dresser': 'armarios',
        'chest of drawers': 'armarios'
      };

      // Encontrar a melhor correspondência
      let bestMatch: ClassificationResult = { category: 'mesas', confidence: 0 };
      
      for (const result of results) {
        const label = result.label.toLowerCase();
        for (const [key, category] of Object.entries(categoryMap)) {
          if (label.includes(key) && result.score > bestMatch.confidence) {
            bestMatch = { category, confidence: result.score };
          }
        }
      }

      // Se não encontrou uma categoria específica, usar heurísticas baseadas no nome do arquivo
      if (bestMatch.confidence < 0.3) {
        const filename = imageSrc.toLowerCase();
        if (filename.includes('mesa') || filename.includes('table')) {
          return { category: 'mesas', confidence: 0.5 };
        } else if (filename.includes('cadeira') || filename.includes('chair')) {
          return { category: 'cadeiras', confidence: 0.5 };
        } else if (filename.includes('estante') || filename.includes('shelf')) {
          return { category: 'estantes', confidence: 0.5 };
        } else if (filename.includes('armario') || filename.includes('cabinet')) {
          return { category: 'armarios', confidence: 0.5 };
        } else if (filename.includes('poltrona') || filename.includes('armchair')) {
          return { category: 'poltronas', confidence: 0.5 };
        }
      }

      return bestMatch.confidence > 0 ? bestMatch : { category: 'mesas', confidence: 0.1 };
    } catch (err) {
      console.error('Error classifying image:', err);
      throw new Error('Failed to classify image');
    }
  };

  return {
    classifyImage,
    isLoading,
    error,
    isReady: !!classifier && !isLoading
  };
};
