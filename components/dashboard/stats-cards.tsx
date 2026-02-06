"use client";

import * as React from "react";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type StatCardProps = {
  value: string | number;
  label: string;
  icon?: IconType;
  iconClassName?: string;
};

export function StatCard({
  value,
  label,
  icon: Icon,
  iconClassName = "",
}: StatCardProps) {
  return (
    <div
      className={[
        "relative bg-white",
        "min-w-[176px] min-h-[80px]",
        "rounded-[10px]",
        "border border-[#E0E8ED]",
        "px-4 py-4",
      ].join(" ")}
    >
      <div className="text-[#1D3557] font-extrabold text-[28px] leading-[1]">
        {value}
      </div>

      <div className="absolute left-4 bottom-3 text-[14px] text-[#8FA0AE] leading-none">
        {label}
      </div>

      {Icon ? (
        <Icon
          className={[
            "absolute right-4 top-3 h-7 w-7 text-[#E31B23]",
            iconClassName,
          ].join(" ")}
          strokeWidth={2}
        />
      ) : null}
    </div>
  );
}
