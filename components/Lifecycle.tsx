"use client";
import { useState } from "react";
import { lifecycle } from "@/data/profile";

// The policy lifecycle is the core of this person's work, so the hero is built around it.
export default function Lifecycle() {
  const [active, setActive] = useState(0);
  const current = lifecycle[active];
  return (
    <div className="rounded-lg border border-line bg-surface p-5 sm:p-6">
      <p className="mb-4 font-serif text-lg font-semibold">The policy lifecycle I run</p>
      <div role="tablist" aria-label="Policy lifecycle stages" className="flex flex-wrap gap-y-2">
        {lifecycle.map((s, i) => (
          <button key={s.stage} role="tab" aria-selected={i === active} onClick={() => setActive(i)}
            className={`relative border-b-2 px-3 py-2 text-sm transition ${
              i === active ? "border-stamp font-semibold text-ink" : "border-line text-muted hover:text-ink"}`}>
            {s.stage}
          </button>
        ))}
      </div>
      <div role="tabpanel" key={current.stage} className="rise pt-5">
        <p className="max-w-prose leading-relaxed">{current.text}</p>
        <p className="mt-2 text-sm text-muted">Where: {current.where}</p>
      </div>
    </div>
  );
}
