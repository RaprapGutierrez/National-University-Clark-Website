"use client";

import { useId, useState } from "react";
import CheckIcon from "@/components/CheckIcon";
import type { RequirementGroup } from "@/lib/admissions";

export default function RequirementsPanel({
  groups,
}: {
  groups: RequirementGroup[];
}) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const current = groups[active];

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-line bg-white">
      <div className="grid lg:grid-cols-[minmax(0,15.5rem)_minmax(0,1fr)]">
        <div
          role="tablist"
          aria-label="Applicant type"
          className="flex gap-2 overflow-x-auto border-b border-line bg-navy p-3 lg:flex-col lg:overflow-visible lg:border-b-0 lg:border-r lg:border-line lg:p-4"
        >
          {groups.map((g, i) => {
            const on = i === active;
            const tabId = `${baseId}-tab-${i}`;
            const panelId = `${baseId}-panel-${i}`;
            return (
              <button
                key={`${g.level}-${g.title}`}
                id={tabId}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls={panelId}
                onClick={() => setActive(i)}
                className={`shrink-0 rounded-2xl px-4 py-3 text-left transition lg:w-full ${
                  on
                    ? "bg-gold text-navy shadow-sm"
                    : "bg-white/10 text-white hover:bg-white/18"
                }`}
              >
                <span className="block text-[10px] font-bold uppercase tracking-[0.14em] opacity-80">
                  {g.level}
                </span>
                <span className="mt-0.5 block text-sm font-extrabold sm:text-base">
                  {g.title}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id={`${baseId}-panel-${active}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${active}`}
          className="p-5 sm:p-7 lg:p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-royal">
                {current.level}
              </p>
              <h3 className="mt-1 text-2xl font-extrabold text-navy sm:text-3xl">
                {current.title}
              </h3>
              <p className="mt-2 max-w-xl text-base leading-relaxed text-slate">
                {current.blurb}
              </p>
            </div>
            <span className="rounded-full bg-mist px-3 py-1.5 text-sm font-bold text-navy ring-1 ring-line">
              {current.items.length} documents
            </span>
          </div>

          <ol className="mt-6 space-y-3">
            {current.items.map((item, i) => (
              <li
                key={`${current.title}-${item}`}
                className="fade-rise flex gap-3 rounded-2xl border border-line bg-mist/60 px-4 py-4"
                style={{ animationDelay: `${i * 35}ms` }}
              >
                <span
                  aria-hidden
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-extrabold text-white"
                >
                  {i + 1}
                </span>
                <span className="pt-1.5 text-base font-medium leading-snug text-navy">
                  {item}
                </span>
              </li>
            ))}
          </ol>

          <p className="mt-5 flex gap-2 text-base leading-relaxed text-slate">
            <CheckIcon className="mt-1 shrink-0 text-royal" />
            <span>
              After you apply, Admissions will email the exact list for your
              case — use this checklist to get ahead.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
