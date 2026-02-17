import Image from 'next/image';

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
        <div className="flex justify-center">
          <Image
            src="https://i.postimg.cc/Gp31QvKr/image.png"
            alt="Mostruário com dezenas de capas de caderno infantis"
            width={1007}
            height={1013}
            className="rounded-lg shadow-xl max-w-full h-auto"
            data-ai-hint="notebook covers collage"
          />
        </div>
      </div>
    </section>
  );
}
