"use server";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_url: process.env.CLOUDINARY_URL,
});

export async function submitPhotoForm(prevState, formData) {
  const image = formData.get("image");
  const nom = formData.get("nom");
  const prenom = formData.get("prenom");
  const email = formData.get("email");
  

  if (!image || image.size === 0) {
    return {
      success: false,
      message: "Veuillez sélectionner une image.",
    };
  }

  if (!nom || !prenom || !email) {
    return {
      success: false,
      message: "Veuillez remplir tous les champs obligatoires.",
    };
  }

  try {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "client-photos",
            resource_type: "image",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(buffer);
    });

    console.log("Photo uploadée sur Cloudinary :", uploadResult.secure_url);
    console.log("Public ID :", uploadResult.public_id);

    return {
      success: true,
      message: `Merci ${prenom} ! Votre photo a été envoyée avec succès sur Cloudinary. Nous vous contacterons bientôt sur ${email}.`,
      imageUrl: uploadResult.secure_url,
      imagePublicId: uploadResult.public_id,
    };
  } catch (error) {
    console.error("Erreur lors de l'upload :", error);
    return {
      success: false,
      message: "Erreur lors de l'envoi de votre photo. Veuillez réessayer.",
    };
  }
}

export async function deleteFromCloudinary(publicId) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(
      publicId,
      {
        invalidate: true,
        resource_type: "image",
      },
      function (error, result) {
        if (error) {
          console.error("Erreur lors de la suppression Cloudinary:", error);
          reject(error);
        } else {
          console.log("Image supprimée de Cloudinary:", result);
          resolve(result);
        }
      }
    );
  });
}
