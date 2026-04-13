import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Cuentos para la Calma",
  description: "Acompañamiento emocional para madres e hijos a través de cuentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${poppins.variable} font-poppins bg-beige min-h-screen`}
      >
        <Navbar />
        <main>{children}</main>
        <footer className="bg-beige border-t border-rosa/30 py-8 text-center">
          <p className="font-poppins text-sm text-gray-500">
            © 2024 Cuentos para la Calma · Con amor 💖
          </p>
        </footer>
      </body>
    </html>
  );
}
