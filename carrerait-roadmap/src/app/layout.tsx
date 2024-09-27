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
    "Respondé algunas preguntas y recibí recomendaciones personalizadas basadas en tu perfil y las tendencias actuales del sector.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="bg-gray-900 text-white">
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </main>
      </body>
    </html>
  );
}
