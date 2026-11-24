"use client";

import { useState } from "react";
import CheckIcon from "@/components/CheckIcon";
import type { RequirementGroup } from "@/lib/admissions";

export default function RequirementsPanel({
  groups,
}: {
  groups: RequirementGroup[];
}) {
  const [active, setActive] = useState(0);
  const current = groups[active];

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_20px_50px_-28px_rgba(31,47,122,0.35)]">
      <div
        role="tablist"
        aria-label="Applicant type"
        className="flex flex-wrap gap-2 border-b border-line bg-navy p-3 sm:p-4"
      >
        {groups.map((g, i) => {
          const on = i === active;
          return (
            <button
              key={`${g.level}-${g.title}`}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-left text-sm font-bold transition ${
                on
                  ? "bg-gold text-navy"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <span className="block text-[10px] font-bold uppercase tracking-[0.14em] opacity-80">
                {g.level}
              </span>
              <span className="block">{g.title}</span>
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="p-6 sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-royal">
          {current.level}
        </p>
        <h3 className="mt-1 text-2xl font-extrabold text-navy sm:text-3xl">
          {current.title} checklist
        </h3>
        <p className="mt-2 max-w-2xl text-slate">
          Prepare clear copies of each item. After you apply, Admissions will
          email the exact list for your case.
        </p>

        <ul className="mt-6 divide-y divide-line border-y border-line">
          {current.items.map((item, i) => (
            <li
              key={`${current.title}-${item}`}
              className="fade-rise flex gap-3 py-3.5"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <CheckIcon />
              <span className="font-medium text-navy/90">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
