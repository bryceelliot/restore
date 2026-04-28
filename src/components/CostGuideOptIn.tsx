"use client";

import { useState } from "react";
import { Mail, Download, CheckCircle2 } from "lucide-react";

export default function CostGuideOptIn() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "err">(
    "idle"
  );

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("err");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/xpwzryao", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          source: "Cost Guide Opt-In",
          page: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("ok");
    } catch {
      setStatus("err");
    }
  };

  return (
    <section className="py-20 bg-[#0d1526] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg,#fff 0,#fff 1px,transparent 1px,transparent 14px)",
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <span className="inline-block bg-accent/15 text-accent px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-5">
              Free Download
            </span>
            <h2 className="text-2xl sm:text-4xl font-black leading-tight">
              The Okanagan Flooring Cost Guide
            </h2>
            <p className="text-gray-300 text-base mt-4 leading-relaxed">
              Real Kelowna pricing per square foot, what install actually costs,
              and the four hidden line items most quotes leave out. PDF emailed
              to you — no spam, no salesperson follow-up.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-gray-300">
              {[
                "Per-sq-ft ranges for laminate, hardwood, LVP, carpet, tile",
                "Subfloor prep, removal, and trim costs",
                "Five questions to ask any flooring quote",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-2xl">
            {status === "ok" ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-black text-charcoal text-lg">
                  Check your inbox
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  The cost guide is on its way to {email}.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <h3 className="font-black text-charcoal text-lg">
                  Email it to me
                </h3>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "err") setStatus("idle");
                    }}
                    placeholder="you@email.com"
                    className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold px-5 py-3 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Download className="w-4 h-4" />
                  {status === "submitting" ? "Sending…" : "Send Me the Guide"}
                </button>
                {status === "err" && (
                  <p className="text-xs text-red-600">
                    That didn&apos;t go through — please check your email and try again.
                  </p>
                )}
                <p className="text-xs text-gray-400 text-center">
                  We never share your email. Unsubscribe in one click.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
