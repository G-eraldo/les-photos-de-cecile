"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useFormStatus } from "react-dom";

const varie = [
  { name: "10x15", price: "6" },
  { name: "13x18 / 15x15", price: "8" },
  { name: "20x20 / 18x24 / A4 / 20x30", price: "15" },
  { name: "30x30", price: "20" },
  { name: "30x40", price: "25" },
  { name: "A2", price: "40" },
];

const qualite = [
  { name: "10x15", price: "8" },
  { name: "13x18 / 15x15", price: "10" },
  { name: "20x20 / 18x24 / A4 / 20x30", price: "17" },
  { name: "30x30", price: "22" },
  { name: "30x40", price: "27" },
];

export default function CommandeInfo() {
  const { pending } = useFormStatus();

  const [type, setType] = useState("");
  const [format, setFormat] = useState("");
  const [price, setPrice] = useState("");
  const formats =
    type === "formats-varies"
      ? varie
      : type === "impression-qualite"
        ? qualite
        : [];

  // Lorsqu'on choisit un format, on retrouve l'objet complet pour en extraire le prix
  function handleFormatChange(selectedName) {
    setFormat(selectedName);
    const obj = formats.find((f) => f.name === selectedName);
    setPrice(obj ? obj.price : "");
  }

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="type">Type de prestation</Label>
          <Select name="type" onValueChange={setType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choisir" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="formats-varies">
                Gamme de formats variés
              </SelectItem>
              <SelectItem value="impression-qualite">
                Impression de qualité
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="format">Format</Label>
          <Select
            name="format"
            onValueChange={handleFormatChange}
            value={format}
            disabled={formats.length === 0}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choisir" />
            </SelectTrigger>
            <SelectContent>
              {formats.map((item) => (
                <SelectItem key={item.name} value={item.name}>
                  {item.name} - {item.price} €
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="marge">Type de marges</Label>
          <Select name="marge">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choisir" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="avec-marges">Avec marges</SelectItem>
              <SelectItem value="sans-marges">Sans marges</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="image">Photo</Label>
          <Input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            required
          />
        </div>
      </div>
      <input type="hidden" name="price" value={price} />
      <div className="mt-6 flex justify-center md:justify-start">
        <Button className="w-full md:w-auto" type="submit" disabled={pending}>
          {pending
            ? "Envoi en cours..."
            : price === ""
              ? "Payer"
              : `Payer ${price} €`}
        </Button>
      </div>
    </div>
  );
}
