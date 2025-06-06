"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import { useFormStatus } from "react-dom";
import PersonnalInfo from "./PersonnalInfo";
import CommandeInfo from "./CommandeInfo";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="bg-[#9e8b8b] hover:bg-hover-btn"
    >
      {pending ? "Envoi en cours..." : "Payer"}
    </Button>
  );
}

export default function Commande() {
  return (
    <Card className="max-w-5xl mx-auto p-6 mt-32">
      <CardTitle className="text-2xl font-bold mb-4 text-[#613213]">
        Votre commande de tirage
      </CardTitle>
      <CardDescription className="text-[#9e8b8b]">
        Tirage d'art sur papier traditionnel
      </CardDescription>
      <form className="space-y-6 text-[#9e8b8b] mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information Section */}
          <PersonnalInfo />
          {/* Order Details Section */}
          <CommandeInfo />
        </div>

        <div className="flex justify-center mt-6">
          <SubmitButton />
        </div>
      </form>
    </Card>
  );
}
