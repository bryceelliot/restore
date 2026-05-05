"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { trackFormSubmit } from "@/lib/ga";

/* ──────────────────────────────────────────────────────────────────────────
 * CONTACT FORM — Web3Forms primary, mailto fallback.
 *
 * To get the form actually delivering to the inbox:
 *  1. Visit https://web3forms.com/
 *  2. Enter kfssteam@gmail.com
 *  3. Click "Create Access Key" — key arrives instantly, no email confirmation
 *  4. Paste the key as NEXT_PUBLIC_WEB3FORMS_KEY in .env.local
 *  5. Rebuild + redeploy
 *
 * Until then, the form falls back to opening the visitor's email client with
 * the message pre-filled (mailto). Either way, messages always reach you.
 * ────────────────────────────────────────────────────────────────────────── */

const RECIPIENT = "kfssteam@gmail.com";
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    if (fd.get("_honey")) { setSubmitted(true); setLoading(false); return; }

    const first = String(fd.get("first_name") || "");
    const last = String(fd.get("last_name") || "");
    const email = String(fd.get("email") || "");
    const phone = String(fd.get("phone") || "");
    const message = String(fd.get("message") || "");

    /* Try Web3Forms if configured */
    if (WEB3FORMS_KEY) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `New contact form message from ${first} ${last}`,
            from_name: `${first} ${last}`,
            replyto: email,
            email,
            phone,
            message,
            botcheck: "",
          }),
        });
        const r = await res.json().catch(() => ({}));
        if (res.ok && r.success) {
          setSubmitted(true);
          trackFormSubmit("contact");
          setLoading(false);
          return;
        }
      } catch {
        /* fall through to mailto */
      }
    }

    /* Fallback: open the visitor's mail client with the message pre-filled. */
    const subject = encodeURIComponent(`Website contact from ${first} ${last}`);
    const body = encodeURIComponent(
      `Name: ${first} ${last}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    trackFormSubmit("contact");
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-charcoal">Message Sent!</h3>
        <p className="text-gray-500 text-sm max-w-xs">
          Thanks for reaching out. We&apos;ll get back to you within 1 business day. If your email client opened, please send the prepared message.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            First Name <span className="text-accent">*</span>
          </label>
          <input
            name="first_name"
            type="text"
            required
            placeholder="Jane"
            className="w-full px-4 py-3 bg-light border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Last Name <span className="text-accent">*</span>
          </label>
          <input
            name="last_name"
            type="text"
            required
            placeholder="Smith"
            className="w-full px-4 py-3 bg-light border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2">
          Email <span className="text-accent">*</span>
        </label>
        <input
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
          className="w-full px-4 py-3 bg-light border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2">
          Phone Number
        </label>
        <input
          name="phone"
          type="tel"
          placeholder="(250) 555-0100"
          className="w-full px-4 py-3 bg-light border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your flooring project..."
          className="w-full px-4 py-3 bg-light border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60"
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <><Send size={16} /> Send Message</>
        )}
      </button>
    </form>
  );
}
