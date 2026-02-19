import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const bonusItems = [
  {
    id: 'bonus-planner',
    title: 'Planner Semanal Infantil',
    description: 'Organize a semana das crianças de forma divertida e colorida.',
  },
  {
    id: 'bonus-labels',
    title: 'Etiquetas para Material',
    description: 'Deixe o material escolar mais divertido e organizado.',
  },
  {
    id: 'bonus-stickers',
    title: 'Folha de Figurinhas',
    description: 'Figurinhas para personalizar cadernos e seu filho se divertir.',
  },
];

export function Bonus() {
  const bonusImages = PlaceHolderImages.filter((p) =>
    bonusItems.some((b) => b.id === p.id)
  );

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary font-semibold text-sm px-3 py-1 rounded-full mb-2">
                APENAS HOJE
            </div>
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Bônus exclusivos
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Comprando o pacote premium você leva também estes bônus incríveis:
          </p>
        </div>
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {bonusItems.map((item) => {
            const image = bonusImages.find((img) => img.id === item.id);
            return (
              <Card key={item.id} className="text-center overflow-hidden relative flex flex-col w-full max-w-sm md:max-w-none">
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-md z-10">
                  BÔNUS
                </div>
                <CardHeader className="p-0">
                   {image && (
                     <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover aspect-square"
                        data-ai-hint={image.imageHint}
                     />
                   )}
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  {item.description && (
                    <CardDescription className="mt-2">
                      {item.description}
                    </CardDescription>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
