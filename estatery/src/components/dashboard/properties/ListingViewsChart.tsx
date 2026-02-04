"use client";

import * as React from "react";
import { RefreshCw } from "lucide-react";

export function ListingViewsChart() {
  const [range, setRange] = React.useState("Monthly");
  const data = [
    { label: "Jun 15", views: 420, count: 75 },
    { label: "Jun 20", views: 580, count: 92 },
    { label: "Jun 25", views: 380, count: 68 },
    { label: "Jun 30", views: 720, count: 110 },
    { label: "Jul 5", views: 650, count: 98 },
    { label: "Jul 10", views: 800, count: 125 },
    { label: "Jul 15", views: 760, count: 118 },
  ];
  const maxVal = Math.max(...data.flatMap((d) => [d.views, d.count]));

  return (
    <div className="flex flex-col rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-[#1e293b]">Listing Views</h3>
        <div className="flex items-center gap-2">
          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="rounded-lg border border-[#e2e8f0] bg-white px-3 py-2 text-sm text-[#1e293b] focus:border-[var(--logo)] focus:outline-none focus:ring-2 focus:ring-[var(--logo)]/20"
          >
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-lg border border-[#e2e8f0] text-[#64748b] hover:bg-[#f1f5f9]"
            aria-label="Refresh"
          >
            <RefreshCw className="size-4" />
          </button>
        </div>
      </div>
      <div className="flex gap-4 text-sm">
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-[#f97316]" /> Views Count
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-[#22c55e]" /> Property Count
        </span>
      </div>
      <div className="relative mt-4 h-48 flex items-end justify-between gap-1 pr-2">
        {data.map((d) => (
          <div key={d.label} className="flex flex-1 flex-col items-center gap-1">
            <div className="flex w-full flex-1 items-end justify-center gap-0.5">
              <div
                className="w-full max-w-[12px] rounded-t bg-[#f97316] opacity-90"
                style={{ height: `${(d.views / maxVal) * 100}%`, minHeight: 4 }}
              />
              <div
                className="w-full max-w-[12px] rounded-t bg-[#22c55e] opacity-90"
                style={{ height: `${(d.count / maxVal) * 100}%`, minHeight: 4 }}
              />
            </div>
            <span className="text-xs text-[#64748b]">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
