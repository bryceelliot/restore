"use client";

import { useState } from "react";
import { Send, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";
import { trackFormSubmit } from "@/lib/ga";

const FORMSPREE_ENDPOINT = "https://formspree.io/kfssteam@gmail.com";

const flooringOptions = [
  "Laminate", "Hardwood", "Carpet", "Vinyl Plank",
  "Linoleum Sheet", "Tile", "Commercial", "Area Rugs", "Not Sure Yet",
];

const areaOptions = [
  "Under 200 sq ft", "200–500 sq ft", "500–1,000 sq ft",
  "1,000–2,000 sq ft", "Over 2,000 sq ft", "Not sure yet",
];

type FormData = {
  flooring_type: string;
  area: string;
  address: string;
  notes: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
};

const emptyForm: FormData = {
  flooring_type: "", area: "", address: "", notes: "",
  first_name: "", last_name: "", email: "", phone: "",
};

export default function EstimateForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function update(field: keyof FormData, value: string) {
    setData((d) => ({ ...d, [field]: value }));
  }

  function nextStep() {
    setError("");
    if (step === 1) {
      if (!data.flooring_type) { setError("Please select a flooring type."); return; }
    }
    if (step === 2) {
      if (!data.first_name || !data.last_name || !data.email || !data.phone) {
        setError("Please fill in all required fields."); return;
      }
    }
    setStep((s) => s + 1);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const body = new FormData();
      body.append("_subject", "New Estimate Request — KFSS Website");
      (Object.entries(data) as [string, string][]).forEach(([k, v]) => body.append(k, v));
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
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

  const inputClass = "w-full px-4 py-3 bg-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all";
  const labelClass = "block text-sm font-semibold text-charcoal mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-2">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition-all ${
              step === n ? "bg-accent text-white" :
              step > n  ? "bg-primary text-white" :
              "bg-gray-100 text-gray-400"
            }`}>{n}</div>
            {n < 3 && <div className={`h-0.5 flex-1 w-6 rounded-full transition-all ${step > n ? "bg-primary" : "bg-gray-200"}`} />}
          </div>
        ))}
        <span className="text-xs text-gray-400 ml-auto font-medium">
          {step === 1 ? "Your Project" : step === 2 ? "Your Details" : "Confirm"}
        </span>
      </div>

      {/* ── Step 1: Project ── */}
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Flooring Type <span className="text-accent">*</span></label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {flooringOptions.map((o) => (
                <button
                  key={o}
                  type="button"
                  onClick={() => update("flooring_type", o)}
                  className={`px-3 py-2.5 rounded-xl border text-xs font-semibold transition-all text-left ${
                    data.flooring_type === o
                      ? "bg-primary text-white border-primary"
                      : "bg-light border-gray-200 text-charcoal hover:border-primary"
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>Approximate Area</label>
            <select
              value={data.area}
              onChange={(e) => update("area", e.target.value)}
              className={inputClass}
            >
              <option value="">Select area size</option>
              {areaOptions.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          <div>
            <label className={labelClass}>Project Address</label>
            <input
              type="text"
              value={data.address}
              onChange={(e) => update("address", e.target.value)}
              placeholder="123 Main St, Kelowna, BC"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Additional Notes</label>
            <textarea
              value={data.notes}
              onChange={(e) => update("notes", e.target.value)}
              rows={3}
              placeholder="Room count, current flooring, special requirements..."
              className={`${inputClass} resize-none`}
            />
          </div>
        </div>
      )}

      {/* ── Step 2: Contact ── */}
      {step === 2 && (
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>First Name <span className="text-accent">*</span></label>
              <input type="text" value={data.first_name} onChange={(e) => update("first_name", e.target.value)} required placeholder="Jane" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Last Name <span className="text-accent">*</span></label>
              <input type="text" value={data.last_name} onChange={(e) => update("last_name", e.target.value)} required placeholder="Smith" className={inputClass} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Email <span className="text-accent">*</span></label>
            <input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} required placeholder="jane@example.com" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Phone <span className="text-accent">*</span></label>
            <input type="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} required placeholder="(250) 555-0100" className={inputClass} />
          </div>
        </div>
      )}

      {/* ── Step 3: Review ── */}
      {step === 3 && (
        <div className="space-y-3">
          <p className="text-sm text-gray-500 mb-4">Please review your details before submitting.</p>
          <div className="bg-light rounded-xl p-4 space-y-2 text-sm">
            <div className="flex justify-between gap-2">
              <span className="text-gray-500">Flooring</span>
              <span className="font-semibold text-charcoal">{data.flooring_type}</span>
            </div>
            {data.area && (
              <div className="flex justify-between gap-2">
                <span className="text-gray-500">Area</span>
                <span className="font-semibold text-charcoal">{data.area}</span>
              </div>
            )}
            {data.address && (
              <div className="flex justify-between gap-2">
                <span className="text-gray-500">Address</span>
                <span className="font-semibold text-charcoal text-right">{data.address}</span>
              </div>
            )}
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex justify-between gap-2">
                <span className="text-gray-500">Name</span>
                <span className="font-semibold text-charcoal">{data.first_name} {data.last_name}</span>
              </div>
              <div className="flex justify-between gap-2 mt-1.5">
                <span className="text-gray-500">Email</span>
                <span className="font-semibold text-charcoal">{data.email}</span>
              </div>
              <div className="flex justify-between gap-2 mt-1.5">
                <span className="text-gray-500">Phone</span>
                <span className="font-semibold text-charcoal">{data.phone}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {error && (
        <p className="text-accent text-sm bg-accent/5 border border-accent/20 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      {/* Navigation */}
      <div className={`flex gap-3 ${step > 1 ? "justify-between" : "justify-end"}`}>
        {step > 1 && (
          <button
            type="button"
            onClick={() => { setStep((s) => s - 1); setError(""); }}
            className="flex items-center gap-1.5 bg-light hover:bg-gray-200 text-charcoal font-semibold px-5 py-3 rounded-xl text-sm transition-all"
          >
            <ChevronLeft size={16} /> Back
          </button>
        )}
        {step < 3 ? (
          <button
            type="button"
            onClick={nextStep}
            className="flex items-center gap-1.5 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
          >
            Continue <ChevronRight size={16} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-accent/25 disabled:opacity-60"
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <><Send size={15} /> Submit Request</>
            )}
          </button>
        )}
      </div>
    </form>
  );
}
