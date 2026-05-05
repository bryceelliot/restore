"use client";

import { useState } from "react";
import { Send, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";
import { trackFormSubmit } from "@/lib/ga";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
const RECIPIENT = "kfssteam@gmail.com";

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

  const [honey, setHoney] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honey) { setSubmitted(true); return; }
    setLoading(true);
    setError("");
    if (WEB3FORMS_KEY) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `New Estimate Request from ${data.first_name} ${data.last_name}`,
            from_name: `${data.first_name} ${data.last_name}`,
            replyto: data.email,
            ...data,
            botcheck: "",
          }),
        });
        const r = await res.json().catch(() => ({}));
        if (res.ok && r.success) {
          setSubmitted(true);
          trackFormSubmit("estimate");
          setLoading(false);
          return;
        }
      } catch { /* fall through to mailto */ }
    }
    /* Mailto fallback */
    const subject = encodeURIComponent(`Estimate Request from ${data.first_name} ${data.last_name}`);
    const body = encodeURIComponent(
      `Name: ${data.first_name} ${data.last_name}\nEmail: ${data.email}\nPhone: ${data.phone}\nAddress: ${data.address}\nFlooring Type: ${data.flooring_type}\nArea: ${data.area}\n\nNotes:\n${data.notes}`
    );
    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    trackFormSubmit("estimate");
    setLoading(false);
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
      <input
        type="text"
        name="_honey"
        value={honey}
        onChange={(e) => setHoney(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
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
