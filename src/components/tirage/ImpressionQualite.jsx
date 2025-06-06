import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
const presta = [
  { name: "10x15", price: "8€" },
  { name: "13x18 / 15x15", price: "10€" },
  { name: "20x20 / 18x24 / A4 / 20x30", price: "17€" },
  { name: "30x30", price: "22€" },
  { name: "30x40", price: "27€" },
];

export default function ImpressionQualite() {
  return (
    <Card className="max-w-5xl mx-auto p-6 mt-15">
      <CardTitle className="text-2xl font-bold mb-4 text-[#613213]">
        Des prix pour une impression de qualité
      </CardTitle>
      <CardDescription className="text-[#9e8b8b] ">
        Tirage fine art sur papier coton grain + ou grain +++
      </CardDescription>
      <div className="flex gap-6 mt-6">
        <CardContent className="w-1/2 h-[480px]">
          <img
            src="/impression.png"
            className="w-full h-full object-cover object-top rounded-lg"
            alt="Formats disponibles"
          />
        </CardContent>
        <CardContent className="w-1/2">
          <div className="grid gap-4">
            {presta.map((prestas) => (
              <Card
                key={prestas.name}
                className="p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#f8f4f1]"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <CardDescription className="mb-1">Format</CardDescription>
                    <CardContent className="p-0 font-medium text-[#9e8b8b] ">
                      {prestas.name}
                    </CardContent>
                  </div>
                  <div>
                    <CardDescription className="mb-1">Prix</CardDescription>
                    <CardContent className="p-0 font-medium text-[#9e8b8b]">
                      {prestas.price}
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </div>
      <CardFooter>
        <div className="flex-cols">
          <div>
            <p className="p-0 font-medium text-[#9e8b8b]">
              Vous avez la possibilité de choisir avec ou sans marge.
            </p>

            <p className="p-0 font-medium text-xs text-[#9e8b8b]">
              * Tous les prix sont hors taxes
            </p>
          </div>
        </div>
        <div className="relative left-60">
          <Button className="text-lg max-w-xs">
            <Link href="/tirages-photo/commande">Developper vos photos</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
