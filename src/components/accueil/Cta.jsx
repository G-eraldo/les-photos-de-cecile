"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

import { presta } from "@/lib/dataPresta";

import Link from "next/link";
import { Button } from "../ui/button";

export default function Cta() {
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
    <Card className="max-w-5xl mx-auto p-6 mt-15">
      <CardTitle className="text-2xl font-bold mb-4 text-[#613213]">
        Tirages de Photos
      </CardTitle>
      <div className="flex gap-6">
        <CardDescription className="w-1/2 h-[300px]">
          <Carousel
            setApi={setApi}
            opts={{
              align: "end",
              loop: true,
            }}
            className="w-[320px] h-[210px] left-20 shadow-2xl"
          >
            <CarouselContent>
              {presta.map((src) => (
                <CarouselItem key={src.id}>
                  <div className="">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center">
                        <img
                          className="w-full h-full object-cover object-top rounded-lg mt-2"
                          src={src.src}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </CardDescription>
        <CardContent className="w-1/2 text-[#9e8b8b] leading-8 font-playfair py-8 text-lg text-justify">
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5">
            Chaque photographie raconte une histoire unique.
          </p>
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5 ">
            C'est pourquoi vous trouverez une variété de formats pour vos
            tirages, allant des petites impressions (idéales pour les albums)
            aux grands formats (qui sauront habiller vos murs avec élégance).
          </p>
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5">
            Les tirages sont réalisés avec des matériaux de haute qualité,
            garantissant une durabilité et une fidélité des couleurs qui
            mettront en valeur vos souvenirs pour les années à venir.
          </p>
        </CardContent>
      </div>
      <CardFooter className="flex justify-center">
        <Button asChild className="items-center">
          <Link href="/tirages-photo">Développer vos photos</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
