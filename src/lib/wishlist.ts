"use client";

const KEY = "kfss-wishlist";

export function getWishlist(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function toggleWishlist(slug: string): boolean {
  const list = getWishlist();
  const idx = list.indexOf(slug);
  if (idx === -1) {
    localStorage.setItem(KEY, JSON.stringify([...list, slug]));
    return true;
  } else {
    localStorage.setItem(KEY, JSON.stringify(list.filter(s => s !== slug)));
    return false;
  }
}

export function isWishlisted(slug: string): boolean {
  return getWishlist().includes(slug);
}
