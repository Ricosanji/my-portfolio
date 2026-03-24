"use client";

import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Preloader from "@/components/preloader";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import ElasticCursor from "@/components/ui/ElasticCursor";
import Particles from "@/components/Particles";
import EasterEggs from "@/components/easter-eggs";
import { usePerf } from "@/providers/PerfProvider";
import dynamic from "next/dynamic";

const MusicPlayer = dynamic(() => import("@/components/MusicPlayer"), { ssr: false });

export default function AppContent({ children }: { children: React.ReactNode }) {
  const { mode } = usePerf();

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
      {mode !== "ultra-lite" && (
        <Particles className="fixed inset-0 -z-10 animate-fade-in" quantity={50} />
      )}
      <Preloader>
        <TooltipProvider>
          <Header />
          {children}
          <Footer />
        </TooltipProvider>
        <Toaster />
        {mode !== "ultra-lite" && <ElasticCursor />}
        {mode !== "ultra-lite" && <MusicPlayer />}
        <EasterEggs />
      </Preloader>
    </ThemeProvider>
  );
}