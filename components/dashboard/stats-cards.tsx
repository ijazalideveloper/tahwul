"use client";

import * as React from "react";
import Image from "next/image";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>> | string;

type StatCardVariant = "default" | "leftIcon";

type StatCardProps = {
  value: string | number;
  label: string;
  icon?: IconType;
  iconClassName?: string;
  variant?: StatCardVariant;
  iconWrapClassName?: string;
};

export type StatItem = {
  value: string | number;
  label: string;
  icon?: IconType;
};

export default function StatCard({
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
          "rounded-[10px]",
          "border border-[#E0E8ED]",
          "px-4 py-4 w",
        ].join(" ")}
      >
        <div className="flex justify-between">
          <div className="text-[#1D3557] font-extrabold text-[24px] leading-none mb-4">
            {value}
          </div>
          {Icon ? (
            typeof Icon === "string" ? (
              <div className="relative h-[24px] w-[24px]">
                <Image
                  src={Icon}
                  alt=""
                  fill
                  className={[" right-4 top-0", iconClassName].join(" ")}
                />
              </div>
            ) : (
              <div>
                <Icon
                  className={[
                    " right-4 top-3 h-7 w-7 text-[#E31B23]",
                    iconClassName,
                  ].join(" ")}
                  strokeWidth={2}
                />
              </div>
            )
          ) : null}
        </div>
        <div className="text-[13px] text-[#8FA0AE] leading-none">{label}</div>
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
          {typeof Icon === "string" ? (
            <Image
              src={Icon}
              alt=""
              width={32}
              height={32}
              className={iconClassName}
            />
          ) : (
            <Icon
              className={["h-8 w-8 text-[#E31B23]", iconClassName].join(" ")}
              strokeWidth={2}
            />
          )}
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
