"use client"

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"


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
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 4000,
                    stopOnInteraction: false,
                }),
            ]}
            className="w-full"
        >
            <CarouselContent>
                {testimonialImages.map((testimonial, index) => (
                    <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                        <div className="relative aspect-[1/2] w-full overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src={testimonial.imageUrl}
                                alt={testimonial.description}
                                fill
                                className="object-contain"
                                data-ai-hint={testimonial.imageHint}
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
