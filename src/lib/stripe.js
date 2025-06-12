"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function createStripeCheckout(formData, imagePublicId) {
  const type = formData.get("type");
  const format = formData.get("format");
  const image = formData.get("image");
  const nom = formData.get("nom");
  const prenom = formData.get("prenom");
  const email = formData.get("email");

  const unitAmount = parseInt(format, 10) * 100;

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
          unit_amount: unitAmount,
        },
        quantity: 1,
      },
    ],
    metadata: {
      type,
      format,
      image: image.name,
      imagePublicId: imagePublicId,
      nom,
      prenom,
      email,
    },
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/tirages-photo/commande?status=success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/tirages-photo/commande?status=cancel&imagePublicId=${imagePublicId}`,
  });

  redirect(session.url);
}
