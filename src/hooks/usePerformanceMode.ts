"use client";
import { useState } from "react";

export type PerfMode = "full" | "lite" | "ultra-lite";

export function usePerformanceMode() {
  const [mode] = useState<PerfMode>("full");
  return { mode };
}