"use client";

import { trackPhoneClick, trackEstimateClick } from "@/lib/ga";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0d1526] border-t border-white/10 flex">
      <a
        href="tel:2508607847"
        onClick={() => trackPhoneClick("mobile_bottom_bar")}
        className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-bold text-sm border-r border-white/10 active:bg-white/5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z"/></svg>
        Call Us
      </a>
      <a
        href="/estimates"
        onClick={() => trackEstimateClick("mobile_bottom_bar")}
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-accent text-white font-bold text-sm active:bg-accent-dark"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
        Free Estimate
      </a>
    </div>
  );
}
