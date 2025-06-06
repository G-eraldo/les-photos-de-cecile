"use client";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { submitPhotoForm } from "@/lib/uploadAction";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import CommandeInfo from "./CommandeInfo";
import PersonnalInfo from "./PersonnalInfo";
const initialState = {
  success: null,
  message: null,
};

export default function Commande() {
  const [state, formAction] = useActionState(submitPhotoForm, initialState);
  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message); // Toast de succès
      } else {
        toast.error(state.message); // Toast d'erreur
      }
    }
  }, [state]); // Exécuter l'effet uniquement lorsque l'état change
  return (
    <Card className="max-w-5xl mx-auto p-6 mt-32">
      <CardTitle className="text-2xl font-bold mb-4 text-[#613213]">
        Votre commande de tirage
      </CardTitle>
      <CardDescription className="text-[#9e8b8b]">
        Tirage d'art sur papier traditionnel
      </CardDescription>
      <form action={formAction} className="space-y-6 text-[#9e8b8b] mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information Section */}
          <PersonnalInfo />
          {/* Order Details Section */}
          <CommandeInfo />
        </div>
      </form>
    </Card>
  );
}
