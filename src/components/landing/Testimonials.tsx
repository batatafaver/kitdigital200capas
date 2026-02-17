"use client"

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonialImageIds = [
  'testimonial-whatsapp-1',
  'testimonial-whatsapp-2',
  'testimonial-whatsapp-3',
  'testimonial-whatsapp-4',
  'testimonial-whatsapp-5',
  'testimonial-whatsapp-6',
];

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false })
  );

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
            plugins={[plugin.current]}
            className="w-full"
            opts={{
                loop: true,
                align: 'start',
            }}
        >
            <CarouselContent>
            {testimonialImages.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card className="overflow-hidden rounded-lg shadow-lg">
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
                </CarouselItem>
            ))}
            </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
