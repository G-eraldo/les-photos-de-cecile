"use client";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

import Link from "next/link";
import { Button } from "../ui/button";

export default function Cta() {
  return (
    <Card className="max-w-5xl mx-auto p-4 md:p-6 mt-12">
      <CardTitle className="text-2xl font-bold mb-4 text-[#613213] text-center md:text-left">
        Tirages de Photos
      </CardTitle>
      <div className="flex flex-col md:flex-row gap-6">
        <CardContent className="w-full md:w-1/2 text-[#9e8b8b] leading-8 font-playfair md:py-8 text-base md:text-lg">
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5 text-justify">
            Chaque photographie raconte une histoire unique.
          </p>
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5 text-justify">
            C'est pourquoi vous trouverez une variété de formats pour vos
            tirages, allant des petites impressions (idéales pour les albums)
            aux grands formats (qui sauront habiller vos murs avec élégance).
          </p>
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5 text-justify">
            Les tirages sont réalisés avec des matériaux de haute qualité,
            garantissant une durabilité et une fidélité des couleurs qui
            mettront en valeur vos souvenirs pour les années à venir.
          </p>
        </CardContent>
        <div className="w-full md:w-1/2 aspect-[3/4] md:aspect-[4/3] overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-lg shadow-2xl"
            src="./cta.png"
          />
        </div>
      </div>
      <CardFooter className="flex justify-center">
        <Button asChild className="items-center">
          <Link href="/tirages-photo">Développer vos photos</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
