import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const bonusItems = [
  {
    id: 'bonus-planner',
    title: 'Planner Semanal',
  },
  {
    id: 'bonus-labels',
    title: 'Etiquetas para Material',
  },
  {
    id: 'bonus-schedule',
    title: 'Horário de Aulas',
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {bonusItems.map((item) => {
            const image = bonusImages.find((img) => img.id === item.id);
            return (
              <Card key={item.id} className="text-center overflow-hidden">
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
                <CardContent className="p-4">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
