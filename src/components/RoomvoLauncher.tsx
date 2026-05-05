"use client";

import { useState } from "react";
import { Layers } from "lucide-react";

declare global {
  interface Window {
    roomvoLoaded?: boolean;
  }
}

export default function RoomvoLauncher() {
  const [loading, setLoading] = useState(false);

  const launch = () => {
    if (typeof window === "undefined") return;
    if (window.roomvoLoaded) return;
    setLoading(true);
    const s = document.createElement("script");
    s.src = "https://www.roomvo.com/static/scripts/b2b/common/assistant.js";
    s.async = true;
    s.dataset.locale = "en-us";
    s.dataset.position = "bottom-right";
    s.onload = () => {
      window.roomvoLoaded = true;
      setLoading(false);
    };
    document.head.appendChild(s);
  };

  return (
    <button
      onClick={launch}
      aria-label="Visualize flooring in your room"
      className="fixed right-5 z-40 bg-accent hover:bg-accent/90 text-white font-bold text-sm px-4 py-3 rounded-full shadow-2xl shadow-black/30 inline-flex items-center gap-2 transition-transform hover:scale-105 bottom-[calc(70px+env(safe-area-inset-bottom))] lg:bottom-5"
      style={{ display: loading ? "none" : undefined }}
    >
      <Layers className="w-4 h-4" />
      <span className="hidden sm:inline">Visualize Floors</span>
      <span className="sm:hidden">Visualize</span>
    </button>
  );
}
