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
            <p className="text-primary font-semibold">✨ +200 OPÇÕES DE TEMAS</p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-headline mt-2">
              +200 Capas de Caderno Infantis Editáveis
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Crie capas personalizadas com os personagens favoritos das crianças. São mais de 200 templates prontos para editar no Canva.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg">
                Quero as Capas Agora <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Designs
              </Button>
            </div>
             <p className="mt-4 text-sm text-muted-foreground">
              ✓ Acesso Imediato ✓ Editável no Canva ✓ Suporte Exclusivo
            </p>
          </div>
          <div className="flex justify-center">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={768}
                height={432}
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
