"use server";

import { resend } from "./resend";
export async function submitForm(prevState, formData) {
  try {
    const nom = formData.get("nom");
    const prenom = formData.get("prenom");
    const email = formData.get("email");
    const message = formData.get("message");

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "gerald-f@hotmail.fr",
      subject: "Nouveau formulaire de contact",
      text: `Bonjour Cécile, tu as une nouvelle demande de contact de la part de ${prenom}.\n\nVoici son message:\n${message}\n\nTu peux la recontacter à l'adresse suivante: ${email}`,
    });
    console.log(`Nouvelle demande reçue de ${prenom} ${nom} (${email})`);

    return {
      success: true,
      message: `Merci ${prenom} ! Votre message a été enovoyé avec succès. Nous vous contacterons bientôt sur ${email}.`,
    };
  } catch (error) {
    return {
      success: false,
      message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
    };
  }
}
