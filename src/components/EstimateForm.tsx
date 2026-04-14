"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { trackFormSubmit } from "@/lib/ga";

const FORMSPREE_ENDPOINT = "https://formspree.io/kfssteam@gmail.com";

const flooringOptions = [
  "Laminate", "Hardwood", "Carpet", "Vinyl Plank",
  "Linoleum Sheet", "Tile", "Commercial", "Area Rugs", "Not Sure Yet",
];

export default function EstimateForm() {
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
        trackFormSubmit("estimate");
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
        <h3 className="text-xl font-bold text-charcoal">Request Received!</h3>
        <p className="text-gray-500 text-sm max-w-xs">
          We&apos;ll contact you within 1 business day to schedule your free estimate.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="_subject" value="New Estimate Request — KFSS Website" />
      <h3 className="text-xl font-black text-charcoal mb-1">Your Details</h3>

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
            className="w-full px-4 py-3 bg-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
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
            className="w-full px-4 py-3 bg-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
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
          className="w-full px-4 py-3 bg-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2">
          Phone <span className="text-accent">*</span>
        </label>
        <input
          name="phone"
          type="tel"
          required
          placeholder="(250) 555-0100"
          className="w-full px-4 py-3 bg-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2">
          Flooring Interest
        </label>
        <select
          name="flooring_type"
          className="w-full px-4 py-3 bg-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
        >
          <option value="">Select a flooring type</option>
          {flooringOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2">
          Project Address
        </label>
        <input
          name="address"
          type="text"
          placeholder="123 Main St, Kelowna, BC"
          className="w-full px-4 py-3 bg-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2">
          Additional Notes
        </label>
        <textarea
          name="notes"
          rows={3}
          placeholder="Room size, current flooring, special requirements..."
          className="w-full px-4 py-3 bg-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all resize-none"
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
        className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold py-4 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-accent/25 disabled:opacity-60"
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <><Send size={16} /> Request Free Estimate</>
        )}
      </button>
    </form>
  );
}
