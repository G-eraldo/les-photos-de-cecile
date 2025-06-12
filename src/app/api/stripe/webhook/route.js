import { resend } from "@/lib/resend";
import { deleteFromCloudinary } from "@/lib/uploadAction";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const sig = req.headers.get("stripe-signature");
  const rawBody = await req.text();
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  // Paiement réussi
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "gerald-f@hotmail.fr",
        subject: "Développement de photo",
        text: `Bonjour, vous avez une nouvelle commande de developpement de la part de ${session.metadata.prenom}, liens vers la photo: https://console.cloudinary.com/app/c-7ac43c69e3a0bb774adfaf91a66f96/assets/media_library/folders/cb981666428978bb8f17845c1db81f5658?view_mode=list

Paiement réussi pour la commande de ${session.metadata.prenom}.

Montant: ${session.amount_total / 100}€
Type: ${session.metadata.type || "Non spécifié"}
Format: ${session.metadata.format || "Non spécifié"}
Marge : ${session.metadata.marge || "Non spécifié"} 
Client: ${session.metadata.prenom} ${session.metadata.nom}
Email: ${session.metadata.email}
Image Public ID: ${session.metadata.imagePublicId}`,
      });
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: session.metadata.email,
        subject: "Votre commande de développement de photo",
        html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #613213;">Votre commande de développement de photo</h2>
            <p>Bonjour <strong>${session.metadata.prenom}</strong>,</p>
            <p>
              Merci pour votre commande !<br>
              Nous avons bien reçu votre demande de développement pour la photo&nbsp;:
              <strong>${session.metadata.image}</strong>
            </p>
            <p>
              <strong>Détails de la commande :</strong><br>
              Format choisi : <strong>${session.metadata.format}</strong><br>
              Montant total : <strong>${session.metadata.price} €</strong><br>
              Marges : <strong>${session.metadata.marge}</strong>
            </p>
            <p>
              Votre commande est en cours de traitement.<br>
              Vous recevrez prochainement un email avec les informations de suivi ou de retrait.
            </p>
            <p>
              Si vous avez la moindre question, n’hésitez pas à me contacter par retour de mail.
            </p>
            <p>
              À très bientôt,<br>
              <strong>Cécile</strong>
            </p>
          </div>
        `,
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi d'email:", error);
      return NextResponse.json(
        { error: "Erreur lors du traitement post-paiement" },
        { status: 500 }
      );
    }
  }

  // Session expirée (backup pour les cas où l'utilisateur ne revient pas)
  if (event.type === "checkout.session.expired") {
    const session = event.data.object;
    const imagePublicId = session.metadata?.imagePublicId;

    console.log("Session expirée détectée:", session.id);
    console.log("ImagePublicId à supprimer:", imagePublicId);

    if (imagePublicId) {
      try {
        await deleteFromCloudinary(imagePublicId);
        console.log(`Image supprimée pour session expirée: ${imagePublicId}`);
      } catch (error) {
        console.error("Erreur suppression image:", error);
      }
    }
  }

  return NextResponse.json({ received: true });
}
