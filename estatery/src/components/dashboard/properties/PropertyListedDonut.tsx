"use client";

import { RefreshCw } from "lucide-react";

export function PropertyListedDonut() {
  const available = 47;
  const rent = 23;
  const sold = 12;
  const total = available + rent + sold;
  const pct = Math.round((sold / total) * 100);

  return (
    <div className="flex flex-col rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#1e293b]">Property Listed</h3>
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-lg border border-[#e2e8f0] text-[#64748b] hover:bg-[#f1f5f9]"
          aria-label="Refresh"
        >
          <RefreshCw className="size-4" />
        </button>
      </div>
      <div className="flex flex-col items-center sm:flex-row sm:gap-6">
        <div className="relative size-40 shrink-0">
          <svg viewBox="0 0 100 100" className="size-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="var(--logo)"
              strokeWidth="16"
              strokeDasharray={`${(available / total) * 251} 251`}
              strokeDashoffset="0"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#22c55e"
              strokeWidth="16"
              strokeDasharray={`${(rent / total) * 251} 251`}
              strokeDashoffset={`-${(available / total) * 251}`}
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#f97316"
              strokeWidth="16"
              strokeDasharray={`${(sold / total) * 251} 251`}
              strokeDashoffset={`-${((available + rent) / total) * 251}`}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-[#1e293b]">{pct}%</span>
            <span className="text-xs text-[#64748b]">sold</span>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2 sm:mt-0">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-[var(--logo)]" />
            <span className="text-sm text-[#64748b]">Available Properties ({available})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-[#22c55e]" />
            <span className="text-sm text-[#64748b]">Rent Properties ({rent})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-[#f97316]" />
            <span className="text-sm text-[#64748b]">Sold Properties ({sold})</span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-[#64748b]">{pct}% of your property has sold</p>
    </div>
  );
}
