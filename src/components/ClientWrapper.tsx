"use client";

import PerfProvider from "@/providers/PerfProvider";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PerfProvider>{children}</PerfProvider>;
}
