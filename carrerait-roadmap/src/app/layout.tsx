import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarreraIT",
  description:
    "Plataforma para aspirantes y profesionales de IT, con cuestionarios personalizados que ofrecen recomendaciones según tu situación, recursos gratuitos de excelente calidad y guías de orientación para tu carrera.",
  keywords: [
    "CarreraIT",
    "IT",
    "Programación",
    "Cuestionarios",
    "Guías",
    "Recursos gratuitos",
    "Orientación",
  ],
  robots: "index, follow",
  authors: [
    {
      name: "Milena Sol Aron",
      url: "https://www.linkedin.com/in/milenasaron/",
    },
  ],
  publisher: "CarreraIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-gray-900 text-white">
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </main>
      </body>
    </html>
  );
}
