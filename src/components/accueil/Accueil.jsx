"use client";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { presta } from "@/lib/dataPresta";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function Accueil() {
  const [api, setApi] = useState();

  useEffect(() => {
    if (!api) {
      return;
    }

    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(autoplay);
  }, [api]);

  return (
    <Card className="max-w-5xl mx-auto p-4 md:p-6 mt-32">
      <CardTitle className="text-2xl font-bold mb-4 text-[#613213]">
        Bienvenue
      </CardTitle>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 aspect-[3/4] md:aspect-video overflow-hidden">
          <div className="relative w-full h-full md:pt-10">
            <Carousel
              className="w-full h-full"
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="h-full">
                {presta.map((src) => (
                  <CarouselItem key={src.id} className="h-full">
                    <div className="w-full h-full">
                      <img
                        className="w-full h-full object-cover rounded-lg"
                        src={src.src}
                        alt="Photo de prestation"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-10" />
              <CarouselNext className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-10" />
            </Carousel>
          </div>
        </div>
        <CardContent className="w-full md:w-1/2 text-[#9e8b8b] leading-8 font-playfair py-4 md:py-8 text-base md:text-lg">
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5 text-justify">
            Immortalisons ensemble les moments précieux de votre vie avec
            authenticité et passion. Située à Amiens, je capture votre quotidien
            au naturel pour des souvenirs intemporels.
          </p>
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5 text-justify">
            Je suis une photographe qui se déplace chez vous pour réaliser des
            séances en intérieur ou en extérieur dans notre belle région
            Picarde. Ma passion est de transformer vos moments de vie en
            souvenirs inoubliables.
          </p>
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5 text-justify">
            Je crois en la beauté de l'authenticité et m'efforce de raconter
            votre histoire à travers des images sincères.
          </p>
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5 text-justify">
            Que ce soit pour des portraits de famille, des photos de naissance,
            de grossesse, de vos animaux de compagnie, mais aussi de mariage ou
            bien encore tout simplement des instants de vie du quotidien, je
            vous offrirai un service chaleureux et sur-mesure.
          </p>
        </CardContent>
      </div>
      <CardFooter className="flex justify-center">
        <Button asChild className="items-center">
          <Link href="/portfolio">Découvrir quelques photos</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
