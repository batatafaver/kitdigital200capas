import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const coverDesigns = PlaceHolderImages.filter((p) =>
  p.id.startsWith('cover-design')
);

export function Showcase() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Centenas de Opções Editáveis no Canva
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            De super-heróis a princesas, encontre os temas que as crianças mais amam.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {coverDesigns.map((design) => (
            <Card
              key={design.id}
              className="overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl group rounded-lg"
            >
              <CardContent className="p-0">
                <Image
                  src={design.imageUrl}
                  alt={design.description}
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover aspect-[4/5]"
                  data-ai-hint={design.imageHint}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
