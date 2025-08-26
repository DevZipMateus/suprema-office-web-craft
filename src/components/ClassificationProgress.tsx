
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Loader2 } from 'lucide-react';

interface ClassificationProgressProps {
  isAnalyzing: boolean;
  progress: number;
  total: number;
  currentImage?: string;
}

const ClassificationProgress = ({ isAnalyzing, progress, total, currentImage }: ClassificationProgressProps) => {
  if (!isAnalyzing) return null;

  const percentage = total > 0 ? (progress / total) * 100 : 0;

  return (
    <Card className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 min-w-[300px]">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Analisando imagens...</span>
              <span className="text-xs text-muted-foreground">{progress}/{total}</span>
            </div>
            <Progress value={percentage} className="w-full" />
            {currentImage && (
              <p className="text-xs text-muted-foreground mt-2 truncate">
                Processando: {currentImage}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClassificationProgress;
