import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function PersonnalInfo() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="nom">Votre nom</Label>
          <Input type="text" id="nom" name="nom" placeholder="Dupont" />
        </div>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="prenom">Votre prénom</Label>
          <Input type="text" id="prenom" name="prenom" placeholder="Jean" />
        </div>
      </div>
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="email">Votre email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="jean.dupont@example.com"
        />
      </div>
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="adresse">Votre adresse</Label>
        <Input
          type="text"
          id="adresse"
          name="adresse"
          placeholder="1 rue de l'eglise"
        />
      </div>
    </div>
  );
}
