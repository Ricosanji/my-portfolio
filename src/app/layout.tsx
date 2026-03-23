import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Preloader from "@/components/preloader";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import ElasticCursor from "@/components/ui/ElasticCursor";
import Particles from "@/components/Particles";
import SocketContextProvider from "@/contexts/socketio";
import RemoteCursors from "@/components/realtime/remote-cursors";
import EasterEggs from "@/components/easter-eggs";
import ClientWrapper from "@/components/ClientWrapper";
import { config } from "@/data/config";
import { usePerf } from "@/providers/PerfProvider";
import dynamic from "next/dynamic";

const MusicPlayer = dynamic(() => import("@/components/MusicPlayer"), { ssr: false });

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
        <Script
          defer
          src={process.env.UMAMI_DOMAIN}
          data-website-id={process.env.UMAMI_SITE_ID}
        />
      </head>
      <body>
        <ClientWrapper>
          <AppContent>{children}</AppContent>
        </ClientWrapper>
      </body>
    </html>
  );
}

function AppContent({ children }: { children: React.ReactNode }) {
  const { mode } = usePerf();

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
      {mode !== "ultra-lite" && (
        <Particles className="fixed inset-0 -z-10 animate-fade-in" quantity={100} />
      )}
      <Preloader>
        <SocketContextProvider>
          <RemoteCursors />
          <TooltipProvider>
            <Header />
            {children}
            <Footer />
          </TooltipProvider>
        </SocketContextProvider>
        <Toaster />
        {mode !== "ultra-lite" && <ElasticCursor />}
        {mode !== "ultra-lite" && <MusicPlayer />}
        <EasterEggs />
      </Preloader>
    </ThemeProvider>
  );
}
