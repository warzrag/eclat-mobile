import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "L'Éclat Mobile - Bar Mobile Premium",
  description: "Service de bar mobile haut de gamme pour mariages et événements. Cocktails d'exception et service personnalisé.",
  keywords: "bar mobile, mariage, cocktails, événements, barman, premium",
  openGraph: {
    title: "L'Éclat Mobile - Bar Mobile Premium",
    description: "Service de bar mobile haut de gamme pour événements d'exception",
    images: ["/og-image.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-white text-black">
        {children}
      </body>
    </html>
  );
}
