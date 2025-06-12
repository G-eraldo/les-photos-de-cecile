"use client";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { createStripeCheckout } from "@/lib/stripe";
import { deleteFromCloudinary, submitPhotoForm } from "@/lib/uploadAction";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import CommandeInfo from "./CommandeInfo";
import PersonnalInfo from "./PersonnalInfo";

const initialState = {
  success: null,
  message: null,
};

export default function Commande() {
  const [state, formAction] = useActionState(async (prevState, formData) => {
    let uploadResult = null;

    try {
      uploadResult = await submitPhotoForm(prevState, formData);

      if (!uploadResult.success) {
        return uploadResult;
      }

      // Passer les deux paramètres : formData ET imagePublicId
      await createStripeCheckout(formData, uploadResult.imagePublicId);

      return {
        success: true,
        message: "Redirection vers le paiement en cours...",
      };
    } catch (error) {
      console.error("Erreur lors du traitement de la commande:", error);

      if (uploadResult?.success && uploadResult?.imagePublicId) {
        try {
          await deleteFromCloudinary(uploadResult.imagePublicId);
          console.log("Image supprimée après erreur");
        } catch (deleteError) {
          console.error(
            "Erreur lors de la suppression de l'image:",
            deleteError
          );
        }
      }

      return {
        success: false,
        message:
          "Une erreur est survenue lors du traitement de votre commande. Veuillez réessayer.",
      };
    }
  }, initialState);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");
    const imagePublicId = params.get("imagePublicId");

    if (status === "success" || status === "cancel") {
      setTimeout(async () => {
        if (status === "success") {
          toast.success(
            "Paiement effectué avec succès ! Nous traiterons votre commande dans les plus brefs délais."
          );
        } else if (status === "cancel") {
          toast.error(
            "Le paiement a été annulé. Vous pouvez réessayer quand vous le souhaitez."
          );

          // Supprimer l'image lors de l'annulation
          if (imagePublicId) {
            try {
              await deleteFromCloudinary(imagePublicId);
              console.log("Image supprimée après annulation:", imagePublicId);
            } catch (error) {
              console.error("Erreur lors de la suppression:", error);
            }
          }
        }

        // Nettoyer l'URL après affichage
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
      }, 100);
    }
  }, []);

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
          <PersonnalInfo />
          <CommandeInfo />
        </div>
      </form>
    </Card>
  );
}
