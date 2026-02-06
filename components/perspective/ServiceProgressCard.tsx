import React from "react";

type ServiceProgressCardProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  progress?: number;
  className?: string;
};

function clamp(n: number, min = 0, max = 100) {
  return Math.min(max, Math.max(min, n));
}

function ProgressRing({
  value,
  size = 84,
  stroke = 8,
}: {
  value: number;
  size?: number;
  stroke?: number;
}) {
  const v = clamp(value);
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (v / 100) * c;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="block">
        {/* track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(229,231,235,1)"
          strokeWidth={stroke}
        />
        {/* progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(22,163,74,1)" 
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c - dash}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>

      {/* center text */}
      <div className="absolute inset-0 grid place-items-center">
        <span className="text-sm font-semibold text-gray-800">{v}%</span>
      </div>
    </div>
  );
}

export default function ServiceProgressCard({
  badge = "Strategy & Planning",
  title,
  subtitle,
  progress = 100,
  className = "",
}: ServiceProgressCardProps) {
  return (
    <div
      className={[
        "w-full rounded-xl border border-gray-200 bg-white",
        "px-5 py-4 shadow-[0_1px_0_rgba(17,24,39,0.04)]",
        className,
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-6">
        {/* Left content */}
        <div className="min-w-0">
          <div className="mb-2">
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600">
              {badge}
            </span>
          </div>

          <h3 className="truncate text-lg font-semibold text-gray-900">
            {title}
          </h3>

          {subtitle ? (
            <p className="mt-1 line-clamp-2 text-sm text-gray-500">
              {subtitle}
            </p>
          ) : null}
        </div>

        {/* Right progress */}
        <div className="shrink-0">
          <ProgressRing value={progress} />
        </div>
      </div>
    </div>
  );
}
