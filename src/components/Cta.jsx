import Link from "next/link";

import { Button } from "./ui/button";
import { Card, CardDescription, CardTitle } from "./ui/card";

export default function Cta() {
  return (
    <Card className="max-w-5xl mx-auto p-6 mt-32">
      <CardTitle className="text-2xl font-bold mb-4 text-[#613213]">
        Tirages de Photos
      </CardTitle>
      <CardDescription className="text-[#9e8b8b] text-lg mb-6">
        Chaque photographie raconte une histoire unique. C'est pourquoi vous
        trouverez une variété de formats pour vos tirages, allant des petites
        impressions (idéales pour les albums) aux grands formats (qui sauront
        habiller vos murs avec élégance). Les tirages sont réalisés avec des
        matériaux de haute qualité, garantissant une durabilité et une fidélité
        des couleurs qui mettront en valeur vos souvenirs pour les années à
        venir.
      </CardDescription>
      <div className="flex justify-center">
        <Button asChild className=" text-lg max-w-xs">
          <Link href="/tirages-photo">Developper vos photos</Link>
        </Button>
      </div>
    </Card>
  );
}
