"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitForm } from "@/lib/sendEmail";
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

const initialState = {
  success: null,
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="">
      {pending ? "Envoi en cours..." : "Envoyer"}
    </Button>
  );
}

export default function Formcontent() {
  const [state, formAction] = useActionState(submitForm, initialState);
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
    <Card className="max-w-2xl mx-auto p-6 mt-32">
      <CardTitle className="text-2xl font-bold mb-4 text-[#613213]">
        Contactez-moi
      </CardTitle>
      <CardDescription className="mb-6 text-[#9e8b8b]">
        Pour toute demande, n'hésitez pas à m'écrire. Je serai ravie de vous
        répondre rapidement.
      </CardDescription>
      <form action={formAction} className="space-y-6 text-[#9e8b8b]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="nom">Votre nom</Label>
            <Input type="text" name="nom" placeholder="Dupont" />
          </div>
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="prenom">Votre prénom</Label>
            <Input type="text" name="prenom" placeholder="Jean" />
          </div>
        </div>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="email">Votre email</Label>
          <Input
            type="email"
            name="email"
            placeholder="jean.dupont@example.com"
          />
        </div>
        <div className="grid w-full gap-2">
          <Label htmlFor="message">Votre message</Label>
          <Textarea
            placeholder="Écrivez votre message ici..."
            name="message"
            className="min-h-[150px]"
          />
        </div>
        <div className="flex justify-center">
          <SubmitButton />
        </div>
      </form>
    </Card>
  );
}
