"use client";

import React, { useState, useEffect } from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import MusicPlayer from "@/components/MusicPlayer";

const AnimatedBackground = dynamic(
  () => import("@/components/animated-background"),
  { ssr: false, loading: () => <div className="w-full h-screen" /> }
);

function MainPage() {
  // Delay mount Spline cho page render trước
  const [showSpline, setShowSpline] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowSpline(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SmoothScroll>
        <main className={cn("bg-slate-100 dark:bg-transparent")}>
          <div className="top-0 z-0 fixed w-full h-screen">
            {showSpline && <AnimatedBackground />}
          </div>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </SmoothScroll>

      {/* 🎧 Player nằm ở góc phải dưới */}
      <MusicPlayer />
    </>
  );
}

export default MainPage;