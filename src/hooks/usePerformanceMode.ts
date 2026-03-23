"use client";
import { useEffect, useState } from "react";

export type PerfMode = "full" | "lite" | "ultra-lite";

export function usePerformanceMode() {
  const [mode, setMode] = useState<PerfMode>("full");

  useEffect(() => {
    console.log("🧩 usePerformanceMode hook is running...");

    const ua = navigator.userAgent || "";
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(ua);
    const isLowEnd =
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
      (navigator.deviceMemory && navigator.deviceMemory <= 2);

    const noWebAudio = typeof window.AudioContext === "undefined";
    const noWebGL = !window.WebGLRenderingContext;

    // ⚙️ Nếu là máy yếu, cũ hoặc Safari đời thấp → giảm hiệu năng
    if (isMobile && (isLowEnd || noWebAudio || noWebGL)) {
      setMode("ultra-lite");
      console.warn("🧩 Performance mode active: ultra-lite (mobile safe)");
    } else if (isMobile) {
      setMode("lite");
      console.log("🧩 Performance mode active: lite");
    } else {
      setMode("full");
      console.log("🧩 Performance mode active: full");
    }
  }, []);

  return { mode };
}
