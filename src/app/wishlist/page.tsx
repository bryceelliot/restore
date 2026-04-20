import type { Metadata } from "next";
import WishlistPage from "@/components/WishlistPage";

export const metadata: Metadata = {
  title: "My Flooring Wishlist | Kelowna Flooring Superstore",
  description:
    "Save the flooring types you love and request samples or a free estimate — all in one place.",
  alternates: { canonical: "https://www.kfssflooring.com/wishlist" },
};

export default function WishlistRoute() {
  return (
    <>
      <section className="bg-[#0d1526] pt-48 lg:pt-36 pb-4 border-b border-white/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-3">
            My <span className="text-accent">Wishlist</span>
          </h1>
          <p className="text-white/55 text-lg">
            Flooring types you&apos;ve saved. Request samples or a free estimate below.
          </p>
        </div>
      </section>
      <section className="bg-[#0d1526] min-h-[60vh] pb-24">
        <WishlistPage />
      </section>
    </>
  );
}
