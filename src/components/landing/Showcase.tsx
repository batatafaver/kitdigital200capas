"use client"

import * as React from "react"
import Image from 'next/image';

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
            <div className="relative w-full overflow-hidden">
                <div className="flex w-max animate-marquee">
                    {[...showcaseImages, ...showcaseImages].map((image, index) => (
                        <div key={`${image.id}-${index}`} className="flex-shrink-0 px-2">
                             <div className="relative aspect-square w-64 h-64 overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    className="object-contain"
                                    data-ai-hint={image.imageHint}
                                    sizes="256px"
                                />
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
        </section>
    );
}
