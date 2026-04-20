"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { isWishlisted, toggleWishlist } from "@/lib/wishlist";

interface Props {
  slug: string;
  name: string;
  className?: string;
}

export default function WishlistButton({ slug, name, className = "" }: Props) {
  const [saved, setSaved] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    setSaved(isWishlisted(slug));
  }, [slug]);

  function handleToggle() {
    const nowSaved = toggleWishlist(slug);
    setSaved(nowSaved);
    if (nowSaved) {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }
  }

  return (
    <button
      onClick={handleToggle}
      aria-label={saved ? `Remove ${name} from wishlist` : `Save ${name} to wishlist`}
      className={`flex items-center gap-2 border font-semibold px-4 py-2.5 rounded-xl text-sm transition-all ${
        saved
          ? "border-pink-500/50 bg-pink-500/10 text-pink-400 hover:bg-pink-500/20"
          : "border-white/20 text-white/60 hover:text-white hover:border-white/40"
      } ${pulse ? "scale-110" : "scale-100"} ${className}`}
    >
      <Heart
        size={16}
        className={`transition-all ${saved ? "fill-pink-400 text-pink-400" : ""} ${pulse ? "scale-125" : "scale-100"}`}
      />
      {saved ? "Saved to Wishlist" : "Save to Wishlist"}
    </button>
  );
}
