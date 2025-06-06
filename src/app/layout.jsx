import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import "./globals.css";
export const metadata = {
  title: "les photos de cecile",
  description: "Une application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full bg-background">
      <body className="flex flex-col h-full">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
