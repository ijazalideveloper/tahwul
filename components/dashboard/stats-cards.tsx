"use client";

import * as React from "react";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type StatCardVariant = "default" | "leftIcon";

type StatCardProps = {
  value: string | number;
  label: string;
  icon?: IconType;
  iconClassName?: string;
  variant?: StatCardVariant;
  iconWrapClassName?: string;
};

export function StatCard({
  value,
  label,
  icon: Icon,
  iconClassName = "",
  variant = "default",
  iconWrapClassName = "",
}: StatCardProps) {
  if (variant === "default") {
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

  return (
    <div
      className={[
        "bg-white",
        "min-w-[176px] min-h-[80px]",
        "rounded-[10px]",
        "border border-[#E0E8ED]",
        "px-5 py-4",
        "flex items-center gap-4",
      ].join(" ")}
    >
      {Icon ? (
        <div
          className={[
            "h-6 w-6 rounded-xl bg-white flex items-center justify-center",
            iconWrapClassName,
          ].join(" ")}
        >
          <Icon
            className={["h-8 w-8 text-[#E31B23]", iconClassName].join(" ")}
            strokeWidth={2}
          />
        </div>
      ) : null}

      <div className="min-w-0">
        <div className="text-[#1D3557] font-extrabold text-[24px] leading-[1]">
          {value}
        </div>
        <div className="mt-1 text-[14px] text-[#8FA0AE] leading-snug">
          {label}
        </div>
      </div>
    </div>
  );
}
