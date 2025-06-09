"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { Button } from "../ui/button";

export default function Cta() {
  return (
    <Card className="max-w-5xl mx-auto p-4 sm:p-6 mt-15">
      <CardTitle className="text-2xl font-bold mb-4 text-[#613213] text-center sm:text-left">
        Tirages de Photos
      </CardTitle>
      <div className="flex flex-col sm:flex-row gap-6">
        <CardContent className="w-full sm:w-1/2 text-[#9e8b8b] leading-8 font-playfair sm:py-8 text-base sm:text-lg">
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
        <CardDescription className="w-full h-[300px] lg:w-1/2 sm:h-[300px]">
          <img
            className="w-full h-full object-cover rounded-lg shadow-2xl"
            src="./cta.png"
          />
        </CardDescription>
      </div>
      <CardFooter className="flex justify-center">
        <Button asChild className="items-center">
          <Link href="/tirages-photo">Développer vos photos</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
