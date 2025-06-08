"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { presta } from "@/lib/dataPresta";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Link from "next/link";
import Reservation from "./Reservation";

export default function Prestation() {
  return (
    <Card className="max-w-6xl mx-auto p-6 mt-32">
      <CardTitle className="text-2xl font-bold mb-4 text-[#613213]">
        Prestations
      </CardTitle>
      <div className="mt-6">
        <div className="grid grid-cols-3 gap-4 gap-y-8">
          {presta.map((prestas) => (
            <Card
              key={prestas.id}
              className="p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#f8f4f1] flex flex-col"
            >
              <img
                src={prestas.src}
                className="w-full object-cover rounded-lg"
                alt="Formats disponibles"
              />
              <div className="flex flex-col flex-1 mt-4">
                <div>
                  <CardContent className="p-0 font-medium mb-3 text-[#9e8b8b]">
                    {prestas.name}
                  </CardContent>
                </div>
                <div>
                  <CardContent className="p-0 font-medium text-sm text-[#9e8b8b] mb-3">
                    {prestas.description}
                  </CardContent>
                </div>
                <div className="">
                  <CardContent className="p-0 font-medium text-[#9e8b8b] mb-5">
                    {prestas.price}
                  </CardContent>
                </div>
                <div className="mt-auto flex justify-center">
                  <AlertDialog>
                    <AlertDialogTrigger
                      className={cn(buttonVariants(), "cursor-pointer")}
                    >
                      Détails
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-[#613213] text-2xl font-bold mb-4">
                          {prestas.name}
                        </AlertDialogTitle>
                        <div className="space-y-4">
                          <AlertDialogDescription
                            className={cn(
                              "text-[#9e8b8b]",
                              prestas.forfait1 &&
                                prestas.forfait1.length > 0 &&
                                "border-b-2 pb-4"
                            )}
                          >
                            {prestas.info}
                          </AlertDialogDescription>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            {prestas.forfait1 &&
                              prestas.forfait1.map((forfait) => (
                                <AlertDialogDescription
                                  key={forfait}
                                  className="text-[#9e8b8b] border-r-2 font-medium"
                                >
                                  {forfait}
                                </AlertDialogDescription>
                              ))}
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            {prestas.forfait2 &&
                              prestas.forfait2.map((forfait) => (
                                <AlertDialogDescription
                                  key={forfait}
                                  className="text-[#9e8b8b] border-r-2 font-medium"
                                >
                                  {forfait}
                                </AlertDialogDescription>
                              ))}
                          </div>
                          <AlertDialogDescription
                            className={cn(
                              "text-[#9e8b8b]",
                              prestas.forfait2 &&
                                prestas.forfait2.length > 0 &&
                                "border-t-2 pt-4"
                            )}
                          >
                            {prestas.restriction &&
                              prestas.restriction.map((restriction) => (
                                <li
                                  className="pb-4 list-none"
                                  key={restriction}
                                >
                                  {restriction}
                                </li>
                              ))}
                          </AlertDialogDescription>

                          {prestas.contact && prestas.contact.length > 0 ? (
                            <AlertDialogDescription className="text-[#9e8b8b] flex flex-col gap-6 items-start">
                              {prestas.contact}

                              <AlertDialogAction asChild>
                                <Link href="/contact">
                                  <Mail />
                                  contact
                                </Link>
                              </AlertDialogAction>
                            </AlertDialogDescription>
                          ) : null}

                          {prestas.forfait1 && prestas.forfait1.length > 0 ? (
                            <Reservation />
                          ) : null}
                        </div>
                      </AlertDialogHeader>

                      <AlertDialogFooter>
                        <AlertDialogCancel className="cursor-pointer">
                          Fermer
                        </AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
}
