"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Plus, Trash2, ArrowRight, Phone } from "lucide-react";

const FLOORING = [
  { slug: "laminate",       name: "Laminate",       matLow: 3,   matHigh: 7,  instLow: 2,   instHigh: 4, color: "#d97706" },
  { slug: "hardwood",       name: "Hardwood",        matLow: 6,   matHigh: 14, instLow: 3,   instHigh: 6, color: "#92400e" },
  { slug: "carpet",         name: "Carpet",          matLow: 2.5, matHigh: 7,  instLow: 1.5, instHigh: 3, color: "#7c3aed" },
  { slug: "vinyl-plank",    name: "Vinyl Plank",     matLow: 3,   matHigh: 9,  instLow: 2,   instHigh: 4, color: "#0d9488" },
  { slug: "linoleum-sheet", name: "Linoleum Sheet",  matLow: 2,   matHigh: 5,  instLow: 2.5, instHigh: 4, color: "#059669" },
  { slug: "tile",           name: "Tile",            matLow: 3,   matHigh: 12, instLow: 5,   instHigh: 9, color: "#64748b" },
];

const WASTE = { straight: 0.10, diagonal: 0.15, complex: 0.20 };

interface Room { id: number; name: string; length: string; width: string; }

let nextId = 1;

function fmt(n: number) {
  return n.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
}

export default function FlooringCalculator() {
  const [rooms, setRooms]           = useState<Room[]>([{ id: nextId++, name: "Living Room", length: "", width: "" }]);
  const [flooringSlug, setFlooringSlug] = useState("vinyl-plank");
  const [complexity, setComplexity] = useState<"straight" | "diagonal" | "complex">("straight");
  const [includeInstall, setIncludeInstall] = useState(true);

  const flooring = FLOORING.find(f => f.slug === flooringSlug)!;

  const baseSqFt = useMemo(() =>
    rooms.reduce((sum, r) => {
      const l = parseFloat(r.length) || 0;
      const w = parseFloat(r.width) || 0;
      return sum + l * w;
    }, 0),
    [rooms]
  );

  const wasteFactor = WASTE[complexity];
  const totalSqFt   = Math.ceil(baseSqFt * (1 + wasteFactor));

  const matLow  = totalSqFt * flooring.matLow;
  const matHigh = totalSqFt * flooring.matHigh;
  const insLow  = includeInstall ? totalSqFt * flooring.instLow  : 0;
  const insHigh = includeInstall ? totalSqFt * flooring.instHigh : 0;
  const totLow  = matLow  + insLow;
  const totHigh = matHigh + insHigh;

  const hasResult = baseSqFt > 0;

  function addRoom() {
    setRooms(r => [...r, { id: nextId++, name: `Room ${r.length + 1}`, length: "", width: "" }]);
  }
  function removeRoom(id: number) {
    setRooms(r => r.filter(x => x.id !== id));
  }
  function updateRoom(id: number, field: keyof Room, value: string) {
    setRooms(r => r.map(x => x.id === id ? { ...x, [field]: value } : x));
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">

        {/* ── Left: inputs ─────────────────────────────────────── */}
        <div className="space-y-8">

          {/* Step 1: Flooring type */}
          <div>
            <p className="text-white font-bold text-base uppercase tracking-widest mb-4">
              Step 1 — Choose Your Flooring
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {FLOORING.map(f => (
                <button
                  key={f.slug}
                  onClick={() => setFlooringSlug(f.slug)}
                  className={`relative px-4 py-3.5 rounded-xl border-2 text-left transition-all ${
                    flooringSlug === f.slug
                      ? "border-accent bg-accent/10"
                      : "border-white/10 bg-white/5 hover:border-white/30"
                  }`}
                >
                  <span
                    className="block w-3 h-3 rounded-full mb-2"
                    style={{ backgroundColor: f.color }}
                  />
                  <span className="text-white font-semibold text-sm block">{f.name}</span>
                  <span className="text-white/50 text-xs">
                    ${f.matLow}–${f.matHigh}/sqft
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Room dimensions */}
          <div>
            <p className="text-white font-bold text-base uppercase tracking-widest mb-4">
              Step 2 — Enter Room Dimensions
            </p>
            <div className="space-y-3">
              {rooms.map(room => (
                <div key={room.id} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <input
                      type="text"
                      value={room.name}
                      onChange={e => updateRoom(room.id, "name", e.target.value)}
                      className="flex-1 bg-transparent border-b border-white/20 text-white font-semibold text-sm pb-1 focus:outline-none focus:border-accent transition-colors"
                    />
                    {rooms.length > 1 && (
                      <button
                        onClick={() => removeRoom(room.id)}
                        className="text-white/30 hover:text-red-400 transition-colors"
                        aria-label="Remove room"
                      >
                        <Trash2 size={15} />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-white/50 text-xs block mb-1">Length (ft)</label>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        placeholder="e.g. 15"
                        value={room.length}
                        onChange={e => updateRoom(room.id, "length", e.target.value)}
                        className="w-full bg-white/8 border border-white/15 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs block mb-1">Width (ft)</label>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        placeholder="e.g. 12"
                        value={room.width}
                        onChange={e => updateRoom(room.id, "width", e.target.value)}
                        className="w-full bg-white/8 border border-white/15 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>
                  {room.length && room.width && (
                    <p className="text-white/40 text-xs mt-2">
                      {((parseFloat(room.length) || 0) * (parseFloat(room.width) || 0)).toFixed(0)} sqft
                    </p>
                  )}
                </div>
              ))}
              <button
                onClick={addRoom}
                className="flex items-center gap-2 text-accent hover:text-white text-sm font-semibold transition-colors py-1"
              >
                <Plus size={16} /> Add another room
              </button>
            </div>
          </div>

          {/* Step 3: Options */}
          <div>
            <p className="text-white font-bold text-base uppercase tracking-widest mb-4">
              Step 3 — Installation Options
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-sm mb-2">Cut pattern (affects waste)</p>
                <div className="flex flex-wrap gap-2">
                  {(["straight", "diagonal", "complex"] as const).map(c => (
                    <button
                      key={c}
                      onClick={() => setComplexity(c)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all capitalize ${
                        complexity === c
                          ? "bg-accent border-accent text-white"
                          : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
                      }`}
                    >
                      {c === "straight" ? "Straight (+10%)" : c === "diagonal" ? "Diagonal (+15%)" : "Complex (+20%)"}
                    </button>
                  ))}
                </div>
              </div>
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <div
                  onClick={() => setIncludeInstall(v => !v)}
                  className={`w-11 h-6 rounded-full transition-colors relative shrink-0 ${includeInstall ? "bg-accent" : "bg-white/20"}`}
                >
                  <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${includeInstall ? "translate-x-6" : "translate-x-1"}`} />
                </div>
                <span className="text-white text-sm font-semibold">Include professional installation</span>
              </label>
            </div>
          </div>
        </div>

        {/* ── Right: results ───────────────────────────────────── */}
        <div className="lg:sticky lg:top-28">
          <div className={`rounded-2xl border p-6 transition-all ${hasResult ? "border-accent/40 bg-[#0d1526]" : "border-white/10 bg-white/5"}`}>
            <p className="text-white font-bold text-base uppercase tracking-widest mb-5">
              Your Estimate
            </p>

            {!hasResult ? (
              <p className="text-white/40 text-sm leading-relaxed">
                Enter your room dimensions above to see an instant cost estimate.
              </p>
            ) : (
              <>
                <div className="space-y-3 mb-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Area (measured)</span>
                    <span className="text-white font-semibold">{baseSqFt.toFixed(0)} sqft</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">With {(wasteFactor * 100).toFixed(0)}% waste</span>
                    <span className="text-white font-semibold">{totalSqFt} sqft</span>
                  </div>
                  <div className="border-t border-white/10 pt-3 flex justify-between text-sm">
                    <span className="text-white/60">Materials</span>
                    <span className="text-white font-semibold">{fmt(matLow)} – {fmt(matHigh)}</span>
                  </div>
                  {includeInstall && (
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Installation</span>
                      <span className="text-white font-semibold">{fmt(insLow)} – {fmt(insHigh)}</span>
                    </div>
                  )}
                  <div className="border-t border-white/10 pt-3 flex justify-between">
                    <span className="text-white font-bold">Total Range</span>
                    <span className="text-accent font-black text-lg">{fmt(totLow)} – {fmt(totHigh)}</span>
                  </div>
                </div>

                <p className="text-white/35 text-xs leading-relaxed mb-5">
                  Estimates based on typical Kelowna market rates. Actual pricing depends on subfloor condition, room access, and product selection. Get a free exact quote.
                </p>

                <Link
                  href="/estimates"
                  className="flex items-center justify-center gap-2 bg-accent-dark hover:bg-[#a8281e] text-white font-bold px-5 py-3.5 rounded-xl text-sm transition-all w-full mb-3"
                >
                  Get Free Exact Estimate <ArrowRight size={15} />
                </Link>
                <a
                  href="tel:2508607847"
                  className="flex items-center justify-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-semibold px-5 py-3 rounded-xl text-sm transition-all w-full"
                >
                  <Phone size={14} /> (250) 860-7847
                </a>
              </>
            )}
          </div>

          {hasResult && (
            <p className="text-white/30 text-xs text-center mt-3">
              These are rough estimates only. Prices are in CAD.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
