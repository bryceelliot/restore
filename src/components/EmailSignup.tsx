"use client";

import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    if (!WEB3FORMS_KEY) { setStatus("ok"); return; }
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "[NEWSLETTER] New Newsletter Signup — KFSS",
          from_name: "KFSS Newsletter",
          replyto: email,
          email,
          source: "Newsletter signup",
          route_to: "kfss.bryce@gmail.com",
          botcheck: "",
        }),
      });
      const r = await res.json().catch(() => ({}));
      setStatus(res.ok && r.success ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="flex items-center gap-3 bg-accent/15 border border-accent/30 rounded-xl px-4 py-3 text-white">
        <CheckCircle2 size={18} className="text-accent shrink-0" />
        <p className="text-sm">Thanks — we&apos;ll be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-2">
      <div className="relative flex-1">
        <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="w-full pl-9 pr-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none focus:border-accent transition-colors"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-accent hover:bg-accent-dark text-white font-bold px-5 py-3 rounded-xl text-sm transition-all whitespace-nowrap disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Subscribe"}
      </button>
      {status === "error" && <p className="text-accent text-xs sm:absolute sm:-bottom-6 sm:left-0">Something went wrong — try again or call us.</p>}
    </form>
  );
}
