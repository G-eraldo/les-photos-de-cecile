"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
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
import { presta } from "@/lib/dataPresta";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Prestation() {
  return (
    <Card className="max-w-6xl mx-auto p-4 md:p-6 mt-32">
      <CardTitle className="text-xl md:text-2xl font-bold mb-4 text-[#613213]">
        Prestations
      </CardTitle>
      <div className="mt-4 md:mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {presta.map((prestas) => (
            <Card
              key={prestas.id}
              className="p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#f8f4f1] flex flex-col"
            >
              <img
                src={prestas.src}
                className="w-full h-48 md:h-56 rounded-lg object-cover"
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
                <div>
                  <CardContent className="p-0 font-medium text-[#9e8b8b] mb-5">
                    {prestas.price}
                  </CardContent>
                </div>
                <div className="mt-auto flex justify-center">
                  <Dialog>
                    <DialogTrigger
                      className={cn(buttonVariants(), "cursor-pointer")}
                    >
                      Détails
                    </DialogTrigger>
                    <DialogContent className="max-w-[90vw] max-h-[90vh] overflow-y-auto md:max-w-3xl">
                      <DialogHeader>
                        <DialogTitle className="text-[#613213] text-xl md:text-2xl font-bold mb-4">
                          {prestas.name}
                        </DialogTitle>
                        <div className="space-y-4">
                          <DialogDescription
                            className={cn(
                              "text-[#9e8b8b]",
                              prestas.forfait1 &&
                                prestas.forfait1.length > 0 &&
                                "border-b-2 pb-4"
                            )}
                          >
                            {prestas.info}
                          </DialogDescription>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            {prestas.forfait1 &&
                              prestas.forfait1.map((forfait) => (
                                <DialogDescription
                                  key={forfait}
                                  className="text-[#9e8b8b] border-r-2 font-medium"
                                >
                                  {forfait}
                                </DialogDescription>
                              ))}
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            {prestas.forfait2 &&
                              prestas.forfait2.map((forfait) => (
                                <DialogDescription
                                  key={forfait}
                                  className="text-[#9e8b8b] border-r-2 font-medium"
                                >
                                  {forfait}
                                </DialogDescription>
                              ))}
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            {prestas.forfait3 &&
                              prestas.forfait3.map((forfait) => (
                                <DialogDescription
                                  key={forfait}
                                  className="text-[#9e8b8b] border-r-2 font-medium"
                                >
                                  {forfait}
                                </DialogDescription>
                              ))}
                          </div>
                          <DialogDescription
                            className={cn(
                              "text-[#9e8b8b]",
                              prestas.forfait2 &&
                                prestas.forfait2.length > 0 &&
                                "border-t-2 pt-4"
                            )}
                          ></DialogDescription>

                          {prestas.contact && (
                            <DialogDescription className="text-[#9e8b8b] flex flex-col gap-2 items-start md:gap-6">
                              {Array.isArray(prestas.contact) ? (
                                prestas.contact.map((contact, index) => (
                                  <li key={index} className="list-none">
                                    {contact}
                                  </li>
                                ))
                              ) : (
                                <span>{prestas.contact}</span>
                              )}
                              <Button asChild>
                                <Link href="/contact">
                                  <Mail />
                                  Contact
                                </Link>
                              </Button>
                            </DialogDescription>
                          )}
                        </div>
                      </DialogHeader>

                      <DialogFooter>
                        <DialogClose asChild>
                          <Button>Fermer</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
}
