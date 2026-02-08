"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ListCardProps = {
  title: string;
  right?: React.ReactNode;
  headerDivider?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function ListCard({
  title,
  right,
  headerDivider = false,
  className,
  children,
}: ListCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-[10px] border border-[#E0E8ED]",
        className,
      )}
    >
      <div className="px-6 pt-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[16px] font-semibold text-[#1D3557] leading-tight">
            {title}
          </h3>
          {right ? <div className="shrink-0">{right}</div> : null}
        </div>
        {headerDivider ? <div className="mt-4 h-px bg-[#E0E8ED]" /> : null}
      </div>

      <div className="px-6 pb-6">{children}</div>
    </div>
  );
}
