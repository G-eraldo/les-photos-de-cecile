"use client";
import {
  AlertDialog,
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

export default function page() {
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
                              "text-[#9e8b8b] pb-4",
                              prestas.forfait &&
                                prestas.forfait.length > 0 &&
                                "border-b-2"
                            )}
                          >
                            {prestas.condition}
                          </AlertDialogDescription>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <AlertDialogDescription className="text-[#9e8b8b] border-r-2 font-medium">
                              {prestas.forfait}
                            </AlertDialogDescription>
                            <AlertDialogDescription className="text-[#9e8b8b] border-r-2  font-medium">
                              {prestas.forfait1}
                            </AlertDialogDescription>
                            <AlertDialogDescription className="text-[#9e8b8b] font-medium">
                              {prestas.forfaitphoto}
                            </AlertDialogDescription>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <AlertDialogDescription className="text-[#9e8b8b] border-r-2 font-medium">
                              {prestas.forfait2}
                            </AlertDialogDescription>
                            <AlertDialogDescription className="text-[#9e8b8b] border-r-2  font-medium">
                              {prestas.forfait2prix}
                            </AlertDialogDescription>
                            <AlertDialogDescription className="text-[#9e8b8b] font-medium">
                              {prestas.forfaitphoto2}
                            </AlertDialogDescription>
                          </div>
                          <AlertDialogDescription
                            className={cn(
                              "text-[#9e8b8b]",
                              prestas.forfait &&
                                prestas.forfait.length > 0 &&
                                "border-t-2 pt-4"
                            )}
                          >
                            {prestas.detail}
                          </AlertDialogDescription>
                          <AlertDialogDescription className="text-[#9e8b8b] pt-4">
                            {prestas.retouche}
                          </AlertDialogDescription>
                          <AlertDialogDescription className="text-[#9e8b8b] pt-2">
                            {prestas.restriction}
                          </AlertDialogDescription>
                          <AlertDialogDescription className="text-[#9e8b8b]  pt-2">
                            {prestas.info}
                          </AlertDialogDescription>
                          <AlertDialogDescription className="text-[#9e8b8b] pt-2">
                            {prestas.delivre}
                          </AlertDialogDescription>
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
