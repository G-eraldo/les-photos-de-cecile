import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

export default function ProposContent() {
  return (
    <Card className="max-w-5xl mx-auto p-6 mt-32">
      <CardTitle className="text-2xl font-bold mb-4 text-[#613213]">
        Un petit bout de moi
      </CardTitle>
      <div className="flex gap-6">
        <CardDescription className="w-1/2 h-[500px]">
          <img
            src="/profil.png"
            className="w-full h-full object-cover object-top rounded-lg mt-5"
          />
        </CardDescription>
        <CardContent className="w-1/2 text-[#9e8b8b] leading-8 font-playfair py-8 text-lg ">
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5">
            J'ai commencé à m'intéresser à la photographie à l'âge de 17 ans.
            J'ai passé de nombreuses années à essayer toutes sortes de
            photographies, parfois passant des heures devant une abeille pour
            obtenir LA photo idéale.
          </p>
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5 ">
            13 ans plus tard, je décide de transformer cette passion en une
            entreprise qui me ressemble, et qui rendra fier les personnes qui
            m'entourent.
          </p>
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5">
            Ce qui me distingue c'est la capacité à mettre les clients à l'aise
            et à saisir des instants authentiques et spontanés.
          </p>
          <p className="hover:text-[#613213] transition-colors duration-300 mb-5">
            Que ce soit pour une séance photo de famille, un shooting grossesse
            ou un événement spécial, je m'efforce de refléter la personnalité de
            chacun à travers mon objectif.
          </p>

          <p className="hover:text-[#613213] transition-colors duration-300">
            Vos regards et vos émotions sont capturés avec soin et précision.
          </p>
        </CardContent>
      </div>
    </Card>
  );
}
