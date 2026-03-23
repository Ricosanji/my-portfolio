"use client";
import { createContext, useContext } from "react";
import { usePerformanceMode, PerfMode } from "@/hooks/usePerformanceMode";

type PerfContextType = { mode: PerfMode };
const PerfContext = createContext<PerfContextType>({ mode: "full" });

export const usePerf = () => useContext(PerfContext);

export default function PerfProvider({ children }: { children: React.ReactNode }) {
  const { mode } = usePerformanceMode();

  return (
    <PerfContext.Provider value={{ mode }}>
      {children}
    </PerfContext.Provider>
  );
}
