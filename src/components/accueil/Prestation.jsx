import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { Button } from "../ui/button";

export default function Prestation() {
  return (
    <Card className="max-w-5xl mx-auto p-4 sm:p-6 mt-15">
      <CardTitle className="text-2xl font-bold mb-4 text-[#613213]">
        Prestations
      </CardTitle>
      <div className="flex flex-col lg:flex-row gap-6">
        <CardDescription className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px]">
          <img
            className="w-full h-full object-cover object-top rounded-lg mt-5 shadow-2xl"
            src="./prestation.png"
          />
        </CardDescription>
        <CardContent className="w-full lg:w-1/2 text-[#9e8b8b] leading-8 font-playfair py-4 sm:py-8 text-base sm:text-lg">
          <CardTitle className="text-xl sm:text-2xl font-bold mb-4 text-[#613213] w-full whitespace-nowrap overflow-hidden text-ellipsis">
            Bain thérapeutique photographié
          </CardTitle>
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5 text-justify">
            La séance se déroule à Rivery avec Hyn'Odysée bien naître et dure
            environ 1h30 parfois plus selon bébé.
          </p>
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5 text-justify">
            Le bain thérapeutique est un soin qui permet au bébé de retrouver
            les sensations connues de sa vie intra-utérine. Emmailloté dans une
            eau chaude, il est libre de ses mouvements et retrouve le bien-être
            du ventre maternel.
          </p>
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5 text-justify">
            Plongé dans ses souvenirs, le retrait du lange représente pour lui
            le moment de la naissance. Il refait le passage entre les deux
            mondes plus en douceur. Ce bain permet parfois de libérer des
            émotions pour le bébé et pour la maman, surtout lorsque
            l'accouchement n'est pas celui qui était souhaité...
          </p>
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5 text-justify">
            C'est Hélène qui s'occupera de réaliser le bain thérapeutique. Elle
            est auxiliaire de puériculture en maternité et s'est formée à
            l'école du bien naître de Sonia Krief.
          </p>
        </CardContent>
      </div>
      <CardFooter className="flex justify-center">
        <Button asChild className="items-center">
          <Link href="/prestations">Découvrir toutes nos prestations</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
