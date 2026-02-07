"use client";

import { GaugeArcIcon, GaugeProgressIcon } from "@/icon/app-icon";

type GaugeStat = {
  label: string;
  value: number | string;
};

type GaugeCardProps = {
  title: string;
  value: number;
  subtitle?: string;
  color?: string;
  valueSuffix?: string;
  stats?: GaugeStat[];
};

export function GaugeCard({
  title,
  value,
  subtitle = "Readiness Level",
  color = "#1EA54E",
  valueSuffix = "%",
  stats,
}: GaugeCardProps) {
  const clampedValue = Math.max(0, Math.min(100, value));

  const showStats = stats && stats.length > 0;

  return (
    <div className="bg-white rounded-[10px] border border-[#E0E8ED] px-6 py-6">
      <h3 className="text-[16px] font-semibold text-[#1D3557] leading-tight">{title}</h3>

      <div className="relative mx-auto mb-4 h-44 w-full max-w-sm">
        <GaugeArcIcon className="h-full w-full" />

        <GaugeProgressIcon
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
          color={color}
          value={clampedValue}
        />

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center translate-y-8">
          <div className="text-[40px] font-extrabold leading-none text-[#1D3557]">
            {clampedValue}
            {valueSuffix}
          </div>
          <div className="mt-2 text-[16px] text-[#8FA0AE]">{subtitle}</div>
        </div>
      </div>

      {showStats && <div className="mt-4 mb-4 h-px bg-[#E0E8ED]" />}

      {showStats && (
        <div className="grid grid-cols-2 gap-8 mt-8">
          {stats!.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="text-[24px] font-semibold text-[#1D3557] leading-none">
                {stat.value}
              </div>
              <div className="mt-2 text-[14px] text-[#8FA0AE] text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
