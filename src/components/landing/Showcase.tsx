"use client"

import * as React from "react"
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

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
    const showcaseImages = PlaceHolderImages.filter(p => carouselImageIds.includes(p.id));

    return (
        <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">
                    <span role="img" aria-label="palette emoji" className="mr-2">🎨</span>
                    Temas que as crianças AMAM
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    De super-heróis a princesas.
                    <br />
                    De dinossauros a unicórnios.
                </p>
                <p className="mt-2 text-lg text-foreground/90">
                    Você sempre terá um modelo ideal para cada criança — e isso aumenta o valor percebido.
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
                    {showcaseImages.map((image, index) => (
                        <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={image.imageHint}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
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
