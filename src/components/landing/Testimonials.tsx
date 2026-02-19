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
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            💬 O que quem já comprou diz
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Mais de 4.500 pessoas já transformaram o material escolar com este kit.
          </p>
          <p className="mt-2 text-lg text-foreground/90 font-semibold">
            Praticidade, economia e resultado real.
          </p>
        </div>
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 2000,
                    stopOnInteraction: false,
                }),
            ]}
            className="w-full"
        >
            <CarouselContent>
                {testimonialImages.map((testimonial, index) => (
                    <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                        <div className="p-1">
                            <Image
                                src={testimonial.imageUrl}
                                alt={testimonial.description}
                                width={281}
                                height={450}
                                className="w-full h-auto object-contain rounded-lg shadow-lg"
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
