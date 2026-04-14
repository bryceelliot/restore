"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { trackFormSubmit } from "@/lib/ga";

const FORMSPREE_ENDPOINT = "https://formspree.io/kfssteam@gmail.com";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      if (res.ok) {
        setSubmitted(true);
        trackFormSubmit("contact");
      } else {
        setError("Something went wrong. Please call us at (250) 860-7847.");
      }
    } catch {
      setError("Something went wrong. Please call us at (250) 860-7847.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-charcoal">Message Sent!</h3>
        <p className="text-gray-500 text-sm max-w-xs">
          Thanks for reaching out. We&apos;ll get back to you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Hidden field so Formspree knows the subject */}
      <input type="hidden" name="_subject" value="New Contact Form Message — KFSS Website" />

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

      {error && (
        <p className="text-accent text-sm bg-accent/5 border border-accent/20 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

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
