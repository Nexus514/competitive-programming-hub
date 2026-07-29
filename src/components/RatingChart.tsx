"use client";

import { RatingPoint } from "@/lib/types";
import { useState } from "react";

export default function RatingChart({ data }: { data: RatingPoint[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const w = 600;
  const h = 240;
  const padLeft = 44;
  const padRight = 16;
  const padTop = 20;
  const padBottom = 28;
  const plotW = w - padLeft - padRight;
  const plotH = h - padTop - padBottom;

  const ratings = data.map((d) => d.rating);
  const minR = Math.floor(Math.min(...ratings) / 50) * 50 - 50;
  const maxR = Math.ceil(Math.max(...ratings) / 50) * 50 + 50;

  const y = (r: number) =>
    padTop + plotH - ((r - minR) / (maxR - minR)) * plotH;
  const x = (i: number) => padLeft + (i / (data.length - 1)) * plotW;

  const points = data.map((d, i) => `${x(i)},${y(d.rating)}`).join(" ");
  const area = `${x(0)},${padTop + plotH} ${points} ${x(data.length - 1)},${padTop + plotH}`;

  // Y-axis labels
  const yTicks = 5;
  const yLabels = Array.from({ length: yTicks }, (_, i) => {
    const val = minR + ((maxR - minR) / (yTicks - 1)) * i;
    return { val, y: y(val) };
  });

  // X-axis labels - show every other label to avoid crowding
  const xLabels = data.filter((_, i) => i % 3 === 0 || i === data.length - 1);

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full h-auto"
        style={{ maxHeight: "260px" }}
      >
        {/* Grid lines */}
        {yLabels.map(({ val, y: yy }, i) => (
          <g key={i}>
            <line
              x1={padLeft}
              y1={yy}
              x2={padLeft + plotW}
              y2={yy}
              stroke="#27272a"
              strokeDasharray="3 3"
            />
            <text
              x={padLeft - 8}
              y={yy + 4}
              textAnchor="end"
              className="text-[10px]"
              fill="#71717a"
            >
              {val}
            </text>
          </g>
        ))}

        {/* Area fill */}
        <polygon points={area} fill="url(#ratingGradient)" opacity="0.3" />

        {/* Gradient */}
        <defs>
          <linearGradient id="ratingGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Line */}
        <polyline
          points={points}
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points */}
        {data.map((d, i) => (
          <circle
            key={i}
            cx={x(i)}
            cy={y(d.rating)}
            r={hoveredIndex === i ? 5 : 2.5}
            fill={hoveredIndex === i ? "#10b981" : "#18181b"}
            stroke="#10b981"
            strokeWidth="1.5"
            className="transition-all cursor-pointer"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}

        {/* X-axis labels */}
        {xLabels.map((d, i) => {
          const idx = data.indexOf(d);
          return (
            <text
              key={i}
              x={x(idx)}
              y={h - 6}
              textAnchor="middle"
              className="text-[10px]"
              fill="#71717a"
            >
              {d.date}
            </text>
          );
        })}
      </svg>

      {/* Tooltip */}
      {hoveredIndex !== null && (
        <div
          className="absolute z-10 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 shadow-xl"
          style={{
            left: `${((hoveredIndex / (data.length - 1)) * 100).toFixed(1)}%`,
            top: "0",
            transform: "translate(-50%, -110%)",
          }}
        >
          <p className="text-xs font-medium text-zinc-200">
            {data[hoveredIndex].contest}
          </p>
          <p className="text-xs text-emerald-400">
            Rating: {data[hoveredIndex].rating}
          </p>
        </div>
      )}
    </div>
  );
}
