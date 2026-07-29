"use client";

import { ActivityDay } from "@/lib/types";

function getColor(count: number): string {
  if (count === 0) return "#18181b";
  if (count === 1) return "#064e3b";
  if (count === 2) return "#047857";
  if (count === 3) return "#059669";
  if (count <= 5) return "#10b981";
  return "#34d399";
}

function getMonthLabels(data: ActivityDay[]): { label: string; col: number }[] {
  const months: { label: string; col: number }[] = [];
  let lastMonth = "";
  data.forEach((d, i) => {
    const month = new Date(d.date + "T00:00:00").toLocaleString("en", {
      month: "short",
    });
    if (month !== lastMonth) {
      months.push({ label: month, col: Math.floor(i / 7) });
      lastMonth = month;
    }
  });
  return months;
}

export default function ActivityHeatmap({ data }: { data: ActivityDay[] }) {
  const weeks: ActivityDay[][] = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  const monthLabels = getMonthLabels(data);
  const dayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];

  return (
    <div className="overflow-x-auto">
      <div className="inline-flex flex-col gap-1">
        {/* Month labels */}
        <div className="flex ml-8 mb-0.5">
          {monthLabels.map((m, i) => (
            <div
              key={i}
              className="text-[10px] text-zinc-600"
              style={{
                position: "relative",
                left: `${m.col * 13}px`,
                marginRight: i < monthLabels.length - 1 ? `${(monthLabels[i + 1].col - m.col) * 13 - 24}px` : "0",
              }}
            >
              {m.label}
            </div>
          ))}
        </div>

        <div className="flex gap-1">
          {/* Day labels */}
          <div className="flex flex-col gap-[3px] mr-1">
            {dayLabels.map((label, i) => (
              <div
                key={i}
                className="h-[11px] text-[10px] leading-[11px] text-zinc-600"
              >
                {label}
              </div>
            ))}
          </div>

          {/* Heatmap grid */}
          <div className="flex gap-[3px]">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((day, di) => (
                  <div
                    key={di}
                    className="h-[11px] w-[11px] rounded-sm"
                    style={{ backgroundColor: getColor(day.count) }}
                    title={`${day.date}: ${day.count} submissions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-1.5 mt-1 ml-8">
          <span className="text-[10px] text-zinc-600">Less</span>
          {[0, 1, 2, 3, 5].map((c) => (
            <div
              key={c}
              className="h-[10px] w-[10px] rounded-sm"
              style={{ backgroundColor: getColor(c) }}
            />
          ))}
          <span className="text-[10px] text-zinc-600">More</span>
        </div>
      </div>
    </div>
  );
}
