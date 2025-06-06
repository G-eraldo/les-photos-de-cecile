"use server";

import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";
import { resend } from "./resend";

// Configuration Cloudinary
cloudinary.config({
  cloud_url: process.env.CLOUDINARY_URL,
});

// Fonction pour uploader vers Cloudinary
async function uploadToCloudinary(file) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "client-photos",
          resource_type: "image",
          tags: ["client-upload"],
        },
        function (error, result) {
          if (error || result === undefined) {
            reject(error || new Error("Upload result is undefined"));
            return;
          }
          resolve(result);
        }
      )
      .end(buffer);
  });
}

// CORRECTION: Ajout de prevState comme premier paramètre
export async function submitPhotoForm(prevState, formData) {
  try {
    // Récupération des données du formulaire
    const nom = formData.get("nom");
    const prenom = formData.get("prenom");
    const email = formData.get("email");
    const image = formData.get("image");

    // Limite de taille (10MB)
    const maxSize = 10 * 1024 * 1024;
    if (image.size > maxSize) {
      return {
        success: false,
        message: "L'image ne doit pas dépasser 10MB",
      };
    }

    // Upload vers Cloudinary
    const uploadResult = await uploadToCloudinary(image);

    // Ici vous pouvez sauvegarder les informations en base de données
    const clientData = {
      nom,
      prenom,
      email,
      imageUrl: uploadResult.secure_url,
      imagePublicId: uploadResult.public_id,
      uploadDate: new Date().toISOString(),
    };

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "gerald-f@hotmail.fr",
      subject: "Develeoppement de photo",
      text: `Bonjour, vous avez une nouvelle commande de developpement de la part de ${prenom}, liens vers la photo: https://console.cloudinary.com/app/c-7ac43c69e3a0bb774adfaf91a66f96/assets/media_library/folders/cb981666428978bb8f17845c1db81f5658?view_mode=list`,
    });
    console.log(`Nouvelle demande reçue de ${prenom} ${nom} (${email})`);
    console.log(`Photo uploadée sur Cloudinary : ${uploadResult.secure_url}`);
    console.log(`Public ID : ${uploadResult.public_id}`);

    // Revalidation pour mettre à jour la page
    revalidatePath("/");

    return {
      success: true,
      message: `Merci ${prenom} ! Votre photo a été envoyée avec succès sur Cloudinary. Nous vous contacterons bientôt sur ${email}.`,
      imageUrl: uploadResult.secure_url,
    };
  } catch (error) {
    console.error("Erreur lors de l'upload vers Cloudinary:", error);
    return {
      success: false,
      message: "Une erreur est survenue lors de l'upload. Veuillez réessayer.",
    };
  }
}
