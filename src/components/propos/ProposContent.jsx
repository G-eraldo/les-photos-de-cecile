import Image from "next/image";
import { Card, CardContent, CardTitle } from "../ui/card";

export default function ProposContent() {
  return (
    <Card className="max-w-5xl mx-auto p-4 md:p-6 mt-32">
      <CardTitle className="text-2xl font-bold mb-4 text-[#613213]">
        Un petit bout de moi
      </CardTitle>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 aspect-[3/4] md:aspect-video">
          <Image
            src="/profil.png"
            className="w-full h-full object-cover object-top rounded-lg shadow-2xl"
            alt="Photo de profil"
            width={500}
            height={500}
          />
        </div>
        <CardContent className="w-full md:w-1/2 text-[#9e8b8b] leading-8 font-playfair py-4 md:py-8 text-base md:text-lg">
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5 text-justify">
            J'ai commencé à m'intéresser à la photographie à l'âge de 17 ans.
            J'ai passé de nombreuses années à essayer toutes sortes de
            photographies, parfois passant des heures devant une abeille pour
            obtenir LA photo idéale.
          </p>
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5 text-justify">
            13 ans plus tard, je décide de transformer cette passion en une
            entreprise qui me ressemble, et qui rendra fiers les personnes qui
            m'entourent.
          </p>
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5 text-justify">
            Ce qui me distingue, c'est la capacité à mettre les clients à l'aise
            et à saisir des instants authentiques et spontanés.
          </p>
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5 text-justify">
            Que ce soit pour une séance photo de famille, un shooting grossesse
            ou un événement spécial, je m'efforce de refléter la personnalité de
            chacun à travers mon objectif.
          </p>
          <p className="hover:text-[#613213] transition-colors duration-300 text-justify">
            Vos regards et vos émotions sont capturés avec soin et précision.
          </p>
        </CardContent>
      </div>
    </Card>
  );
}
