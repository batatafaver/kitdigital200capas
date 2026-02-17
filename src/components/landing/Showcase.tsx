"use client"

import * as React from "react"
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { PlaceHolderImages } from '@/lib/placeholder-images';

const carouselImageIds = [
    'carousel-image-1',
    'carousel-image-2',
    'carousel-image-3',
    'carousel-image-4',
    'carousel-image-5',
    'carousel-image-6',
    'carousel-image-7',
    'carousel-image-8',
    'carousel-image-9',
    'carousel-image-10',
];


export function Showcase() {
    const plugin = React.useRef(
      Autoplay({ delay: 1000, stopOnInteraction: true })
    )
    const showcaseImages = PlaceHolderImages.filter(p => carouselImageIds.includes(p.id));

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
                 <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    opts={{
                      loop: true,
                    }}
                >
                    <CarouselContent>
                    {showcaseImages.map((image) => (
                        <CarouselItem key={image.id}>
                        <div className="p-1">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={image.imageHint}
                                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
        </section>
    );
}
