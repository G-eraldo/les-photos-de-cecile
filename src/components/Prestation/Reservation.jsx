"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";

export default function Reservation() {
  return (
    <Dialog>
      <DialogTrigger className={cn(buttonVariants(), "cursor-pointer")}>
        <Calendar /> Réserver un créneau
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-[#613213] text-2xl font-bold mb-4">
            Réserver votre créneau
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose className="cursor-pointer">Fermer</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
