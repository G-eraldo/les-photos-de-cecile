import Accueil from "@/components/accueil/Accueil";
import Cta from "@/components/accueil/Cta";
import Prestation from "@/components/accueil/Prestation";

export default function Home() {
  return (
    <div className="">
      <Accueil />
      <Cta />
      <Prestation />
    </div>
  );
}
