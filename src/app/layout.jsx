import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import "./globals.css";
export const metadata = {
  title: "les photos de Cécile",
  description:
    "Je photographie les moments de vie de façon authentique à Amiens & ses alentours. Grossesse, naissance, shooting boudoir, baptême, mariage, anniversaire, animaux de compagnie, couple, famille...",
  other: {
    "geo.region": "FR-80",
    "geo.placename": "Amiens",
    ICBM: "49.894067,2.295753", // Coordonnées d'Amiens
    "DC.title": "Photographe professionnelle Amiens",
  },

  // Améliorer les mots-clés
  keywords: [
    "photographe Amiens",
    "photographe mariage Amiens",
    "photographe portrait Amiens",
    "shooting photo Amiens",
    "photographe grossesse Amiens",
    "photographe baptême Amiens",
    "photographe famille Picardie",
    "photographie professionnelle Somme",
  ],
  authors: [
    { name: "Cécile", url: "https://les-photos-de-cecile-l7f5.vercel.app" },
  ],
  creator: "Gérald Francois",
  publisher: "Gérald Francois",
  metadataBase: new URL("https://les-photos-de-cecile-l7f5.vercel.app"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "les photos de Cécile | Photographe à Amiens",
    description:
      "Je photographie les moments de vie de façon authentique à Amiens & ses alentours. Grossesse, naissance, shooting boudoir, baptême, mariage, anniversaire, animaux de compagnie, couple, famille...",
    url: "https://les-photos-de-cecile-l7f5.vercel.app",
    siteName: "Les photos de Cécile ",
    images: [
      {
        url: "/profil.png",
        width: 1200,
        height: 630,
        alt: "Photographe mariage et portrait à Amiens",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "les photos de Cécile | Photographe à Amiens",
    description:
      "Je photographie les moments de vie de façon authentique à Amiens & ses alentours. Grossesse, naissance, shooting boudoir, baptême, mariage, anniversaire, animaux de compagnie, couple, famille...",
    images: ["/profil.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  // Données structurées via JSON-LD
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Cécile",
      url: "https://les-photos-de-cecile-l7f5.vercel.app",
      image: "/profil.png",
      description:
        "Je photographie les moments de vie de façon authentique à Amiens & ses alentours. Grossesse, naissance, shooting boudoir, baptême, mariage, anniversaire, animaux de compagnie, couple, famille...",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amiens",
        addressCountry: "France",
      },
      sameAs: [
        "https://www.instagram.com/lesphotosdececile80/",
        "https://www.facebook.com/people/Les-photos-de-C%C3%A9cile/61564364920740/",
      ],
    }),
  },
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
