import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import AppContent from "@/components/AppContent";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: config.title,
  description: config.description.long,
};

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivoBlack.className}>
      <head>
      </head>
      <body>
        <ClientWrapper>
          <AppContent>{children}</AppContent>
        </ClientWrapper>
      </body>
    </html>
  );
}