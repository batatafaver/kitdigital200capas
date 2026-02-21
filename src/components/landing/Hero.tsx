import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-notebooks');

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-headline">
              <span role="img" aria-label="backpack emoji" className="mr-2">🎒</span>
              Capas de Caderno Infantis Editáveis no Canva
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Material escolar personalizado em minutos — sem saber design
            </p>
            
            <div className="my-8 flex justify-center">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={800}
                  height={806}
                  className="rounded-lg shadow-2xl max-w-full h-auto"
                  priority
                  sizes="(max-width: 800px) 100vw, 800px"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
            </div>

            <p className="text-primary font-semibold text-lg">✨ Mais de 200 capas infantis prontas para editar</p>

            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Perfeito para mães, professoras e empreendedoras de personalizados que querem algo bonito, rápido e profissional.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#oferta">
                <Button size="lg" className="animate-pulse-cta h-auto py-3 px-8 text-lg font-bold">
                  👉 QUERO AS CAPAS AGORA
                </Button>
              </a>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-6 gap-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Acesso imediato</span>
                </div>
                <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Canva 100% gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Uso pessoal ou comercial</span>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
