import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonialAvatars = PlaceHolderImages.filter((p) =>
  p.id.startsWith('testimonial-avatar')
);

const testimonials = [
  {
    name: 'Juliana S.',
    title: 'Mãe',
    text: 'Meu filho amou a capa do Sonic! Foi super fácil de colocar o nome dele. Recomendo muito!',
    avatarId: 'testimonial-avatar-1',
  },
  {
    name: 'Ricardo M.',
    title: 'Professor',
    text: 'Incrível a variedade! Encontrei todos os personagens que meus alunos gostam. Facilitou muito meu trabalho.',
    avatarId: 'testimonial-avatar-2',
  },
  {
    name: 'Fernanda P.',
    title: 'Mãe',
    text: 'Qualidade excelente e muito prático. Minha filha ficou encantada com a capa da Frozen que fizemos juntas.',
    avatarId: 'testimonial-avatar-3',
  },
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            O que nossos clientes dizem
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            A satisfação de quem já transformou o material escolar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const avatar = testimonialAvatars.find(
              (a) => a.id === testimonial.avatarId
            );
            return (
              <Card key={index} className="flex flex-col bg-card/80">
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
