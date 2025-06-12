"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

const Map = dynamic(() => import("@/components/propos/Maps"), {
  ssr: false,
});

export default function MapContent() {
  return (
    <Card className="max-w-5xl mx-auto p-4 sm:p-8 mt-15 shadow-lg bg-white/90 backdrop-blur-sm">
      <CardTitle className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#613213] text-center">
        Envie d'immortaliser vos moments ?
      </CardTitle>
      <div className="flex flex-col md:flex-row gap-8 sm:gap-12">
        <div className="w-full md:w-1/2">
          <CardDescription className="space-y-6 sm:space-y-8 text-[#9e8b8b] text-base sm:text-lg">
            <p className="leading-relaxed">
              Contactez-moi dès aujourd'hui pour discuter de vos idées et
              planifier une séance photo qui vous ressemble.
            </p>
            <div className="border-l-4 border-[#613213] pl-4 sm:pl-6 py-2">
              <p className="hover:text-[#613213] transition-colors duration-300 mb-2">
                Localisation
              </p>
              <p className="hover:text-[#613213] transition-colors duration-300 mb-2">
                Les photos de Cécile
              </p>
              <p className="hover:text-[#613213] transition-colors duration-300">
                27b Grande rue, 80250 THORY France
              </p>
            </div>
          </CardDescription>
        </div>
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
          <CardContent className="text-[#9e8b8b] font-playfair text-base sm:text-lg">
            <Button asChild className="w-full mt-3">
              <Link href="/contact" className="w-full text-lg sm:text-xl">
                Contactez-moi
              </Link>
            </Button>
            <div className="mt-4 sm:mt-6">
              <Map />
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
