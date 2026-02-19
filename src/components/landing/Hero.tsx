import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="text-center">
            <p className="text-primary font-semibold">✨ +200 OPÇÕES DE TEMAS</p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-headline mt-2">
              +200 Capas de Caderno Infantis{' '}
              <span className="text-primary">Editáveis</span>
            </h1>
            <div className="my-8 flex justify-center">
              <Image
                src="https://i.postimg.cc/Gp31QvKr/image.png"
                alt="Mostruário com dezenas de capas de caderno infantis"
                width={800}
                height={806}
                className="rounded-lg shadow-2xl max-w-full h-auto"
                priority
                sizes="(max-width: 800px) 100vw, 800px"
                data-ai-hint="notebook covers collage"
              />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Crie capas personalizadas com os personagens favoritos das
              crianças. São mais de 200 templates prontos para{' '}
              <span className="font-semibold text-foreground">
                editar no Canva
              </span>
              .
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#oferta">
                <Button size="lg" className="animate-pulse-cta">
                  Quero as Capas Agora <ArrowRight className="ml-2" />
                </Button>
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              ✓ Acesso Imediato ✓ Editável no Canva ✓ Suporte Exclusivo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
