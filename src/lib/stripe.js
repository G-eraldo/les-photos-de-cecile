"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";
import { getServerUrl } from "./server-url";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function createStripeCheckout(formData, imagePublicId) {
  const type = formData.get("type");
  const formatName = formData.get("format");
  const price = formData.get("prices");
  const image = formData.get("image");
  const nom = formData.get("nom");
  const prenom = formData.get("prenom");
  const email = formData.get("email");
  const marge = formData.get("marge");
  const adresse = formData.get("adresse");
  const franges = formData.get("franges");

  const unitAmount = parseInt(price, 10) * 100;
  const finalAmount = franges === "avec-franges" ? unitAmount + 50 : unitAmount;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name:
              type === "formats-varies"
                ? "Tirage format varié"
                : "tirage impression qualité",
          },
          unit_amount: finalAmount,
        },
        quantity: 1,
      },
    ],
    metadata: {
      type,
      format: formatName,
      price: price,
      image: image.name,
      imagePublicId: imagePublicId,
      nom,
      prenom,
      email,
      marge,
      adresse,
      franges,
    },
    success_url: `${getServerUrl()}/tirages-photo/commande?status=success`,
    cancel_url: `${getServerUrl()}/tirages-photo/commande?status=cancel&imagePublicId=${imagePublicId}`,
  });

  redirect(session.url);
}
