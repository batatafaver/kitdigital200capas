import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonialAvatars = PlaceHolderImages.filter((p) =>
  p.id.startsWith('testimonial-avatar')
);

const testimonials = [
  {
    name: 'Juliana S.',
    title: 'Estudante',
    text: 'Amei a praticidade! Personalizei meu caderno em minutos e ficou com a minha cara. A qualidade dos designs é incrível.',
    avatarId: 'testimonial-avatar-1',
  },
  {
    name: 'Ricardo M.',
    title: 'Designer',
    text: 'Como designer, sou exigente. Fiquei impressionado com a curadoria dos templates. Economiza um tempo enorme e o resultado é profissional.',
    avatarId: 'testimonial-avatar-2',
  },
  {
    name: 'Fernanda P.',
    title: 'Empreendedora',
    text: 'Usei para criar cadernos para minha marca. O processo foi super intuitivo e o resultado ficou lindo. Recomendo!',
    avatarId: 'testimonial-avatar-3',
  },
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            O que Nossos Clientes Dizem
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            A satisfação de quem já transformou seus cadernos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const avatar = testimonialAvatars.find(
              (a) => a.id === testimonial.avatarId
            );
            return (
              <Card key={index} className="flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <p className="italic">"{testimonial.text}"</p>
                </CardContent>
                <CardHeader className="flex flex-row items-center gap-4 pt-0">
                  {avatar && (
                    <Avatar>
                      <AvatarImage
                        src={avatar.imageUrl}
                        alt={testimonial.name}
                        data-ai-hint={avatar.imageHint}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <CardTitle className="text-base">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
