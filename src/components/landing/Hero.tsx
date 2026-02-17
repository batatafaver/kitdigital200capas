import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-notebooks');

export function Hero() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-headline">
              Transforme Seu Caderno com Capas Únicas
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Crie e personalize capas incríveis para seus cadernos. Dezenas de
              templates prontos para editar no Canva e baixar na hora.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg">
                Quero Minhas Capas <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Designs
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
