"use client"

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonialImageIds = [
  'testimonial-whatsapp-1',
  'testimonial-whatsapp-2',
  'testimonial-whatsapp-3',
  'testimonial-whatsapp-4',
  'testimonial-whatsapp-5',
  'testimonial-whatsapp-6',
];

export function Testimonials() {
  const testimonialImages = PlaceHolderImages.filter((p) =>
    testimonialImageIds.includes(p.id)
  );

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
        <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-marquee-slow">
                {[...testimonialImages, ...testimonialImages].map((testimonial, index) => (
                    <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 px-2">
                        <Card className="overflow-hidden rounded-lg shadow-lg w-72">
                            <CardContent className="p-0">
                                <Image
                                    src={testimonial.imageUrl}
                                    alt={testimonial.description}
                                    width={400}
                                    height={800}
                                    className="w-full h-auto object-cover"
                                    data-ai-hint={testimonial.imageHint}
                                />
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
