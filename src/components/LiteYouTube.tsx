"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  videoId: string;
  title: string;
  /** Optional local poster — falls back to YouTube hqdefault if not given */
  poster?: string;
  className?: string;
}

/**
 * Click-to-play YouTube facade. Renders a poster image only;
 * the real iframe (and YouTube's ~760KB of player JS) loads
 * only after the user clicks play.
 */
export default function LiteYouTube({ videoId, title, poster, className }: Props) {
  const [activated, setActivated] = useState(false);
  const posterSrc = poster || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  if (activated) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={className ?? "absolute inset-0 w-full h-full"}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      aria-label={`Play video: ${title}`}
      className={`group relative block w-full h-full overflow-hidden ${className ?? ""}`}
    >
      {poster ? (
        <Image
          src={posterSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 896px"
        />
      ) : (
        // Remote YouTube poster — use plain img so Next.js doesn't need to optimize it
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={posterSrc}
          alt={title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-white/95 group-hover:bg-white shadow-2xl flex items-center justify-center transition-all group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-accent ml-1" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
