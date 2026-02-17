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
            src="https://www.arquivos-digitais.com/wp-content/uploads/2024/01/Capas-de-Caderno-Infantil-Editavel-no-Canva-pack-768x432.jpeg"
            alt="A vibrant collage of personalized kids' notebooks with popular characters, being edited on a laptop and tablet."
            width={768}
            height={432}
            className="rounded-lg shadow-xl max-w-full h-auto"
            data-ai-hint="kids notebooks collage"
          />
        </div>
      </div>
    </section>
  );
}
