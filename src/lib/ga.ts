/* Google Analytics 4 event helpers
   Usage: import { gaEvent } from "@/lib/ga";
          gaEvent("phone_click", { location: "navbar" });
*/

type GtagFn = (cmd: "event", name: string, params?: Record<string, string | number | boolean>) => void;

function gtag(...args: Parameters<GtagFn>) {
  const w = window as unknown as { gtag?: GtagFn };
  if (typeof w.gtag === "function") {
    w.gtag(...args);
  }
}

export function gaEvent(name: string, params?: Record<string, string | number | boolean>) {
  gtag("event", name, params);
}

export function trackPhoneClick(location: string) {
  gaEvent("phone_click", { location, value: 1 });
}

export function trackEstimateClick(location: string) {
  gaEvent("estimate_cta_click", { location });
}

export function trackFormSubmit(form_name: string) {
  gaEvent("form_submit", { form_name });
}
