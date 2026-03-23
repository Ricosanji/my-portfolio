import { useState } from "react";

export const useDevToolsOpen = () => {
  const [isDevToolsOpen] = useState(false);
  return { isDevToolsOpen };
};