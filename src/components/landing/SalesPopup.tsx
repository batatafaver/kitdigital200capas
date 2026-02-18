'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

const names = [
  'Maria S.',
  'João P.',
  'Ana C.',
  'Lucas M.',
  'Juliana F.',
  'Marcos V.',
  'Fernanda L.',
  'Ricardo A.',
];
const cities = [
  'São Paulo, SP',
  'Rio de Janeiro, RJ',
  'Belo Horizonte, MG',
  'Curitiba, PR',
  'Porto Alegre, RS',
  'Salvador, BA',
  'Fortaleza, CE',
  'Brasília, DF',
];

type Purchase = {
  name: string;
  city: string;
  time: string;
};

export function SalesPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null);

  useEffect(() => {
    const showRandomPopup = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const randomTime = Math.floor(Math.random() * 10) + 1;

      setCurrentPurchase({
        name: randomName,
        city: randomCity,
        time: `há ${randomTime} minutos`,
      });
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 6000); // Hide after 6 seconds
    };

    // Show the first popup after a short delay
    const initialTimeout = setTimeout(showRandomPopup, 8000);

    // Then show a new popup every 15-25 seconds
    const interval = setInterval(showRandomPopup, Math.floor(Math.random() * 10000) + 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible || !currentPurchase) {
    return null;
  }

  return (
    <div className="fixed bottom-5 left-5 z-50 w-full max-w-sm">
      <Card className="shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-bottom-2">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
                <Zap className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm text-foreground">
                {currentPurchase.name} de {currentPurchase.city}
              </p>
              <p className="text-sm text-muted-foreground">
                Acabou de adquirir o Pacote Premium!
              </p>
               <p className="text-xs text-muted-foreground/80 mt-1">{currentPurchase.time}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
