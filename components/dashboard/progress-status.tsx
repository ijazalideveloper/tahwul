"use client";

import * as React from "react";

export type StatusType =
  | "not-started"
  | "in-progress"
  | "completed"
  | "partially-uploaded"
  | "fully-uploaded"
  | "delayed";

export type StatusItem = {
  number: number;
  status: StatusType;
};

export type SubCategory = {
  title: string;
  items: StatusItem[];
};

export type ProgressStatusCard = {
  id: string | number;
  title: string;
  percentage: number;
  subCategories: SubCategory[];
};

type ProgressStatusProps = {
  title?: string;
  cards: ProgressStatusCard[];
  showLegend?: boolean;
  className?: string;
};

const STATUS_COLORS: Record<StatusType, string> = {
  "not-started": "#A0AEC0",
  "in-progress": "#F59E0B",
  completed: "#1EA54E",
  "partially-uploaded": "#3B82F6",
  "fully-uploaded": "#1D3557",
  delayed: "#E31B23",
};

const STATUS_LABELS: Record<StatusType, string> = {
  "not-started": "Not Started",
  "in-progress": "In Progress",
  completed: "Completed",
  "partially-uploaded": "Partially Uploaded",
  "fully-uploaded": "Fully Uploaded",
  delayed: "Delayed",
};

function StatusCircle({ number, status }: StatusItem) {
  return (
    <div
      className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold text-white"
      style={{ backgroundColor: STATUS_COLORS[status] }}
    >
      {number}
    </div>
  );
}

function ProgressStatusCard({ card }: { card: ProgressStatusCard }) {
  return (
    <div className="overflow-hidden h-full flex flex-col">
      {/* Header */}
      <div className="bg-[#1D3557] rounded-[16px] px-2 min-h-[96px] flex items-center justify-center">
        <div className="text-center w-full">
          <h3 className="text-[12px] font-semibold text-white leading-tight">
            {card.title}
          </h3>
          <div className="mt-2 text-[14px] font-bold text-white">
            {card.percentage.toFixed(2)}%
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col gap-[10px] mt-[10px] items-center justify-center">
        {card.subCategories.map((subCategory, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between px-2 py-3 rounded-[16px] border border-[#E0E8ED] bg-[#F5F8FB] flex-1"
          >
            <div className="text-[10px] font-normal text-[#17181C] text-center mb-[4px]">
              {subCategory.title}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {subCategory.items.map((item, itemIdx) => (
                <StatusCircle key={itemIdx} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProgressStatus({
  title = "Progress Status",
  cards,
  showLegend = true,
  className,
}: ProgressStatusProps) {
  return (
    <div
      className={`${className} bg-white rounded-[10px] border border-[#E0E8ED] px-6 py-4 md:py-5`}
    >
      {/* Header with Legend */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[16px] font-semibold text-[#1D3557] leading-tight">{title}</h2>

        {showLegend && (
          <div className="flex flex-wrap items-center gap-4">
            {Object.entries(STATUS_LABELS).map(([status, label]) => (
              <div key={status} className="flex items-center gap-2">
                <div
                  className="h-4 w-4 rounded-full"
                  style={{
                    backgroundColor: STATUS_COLORS[status as StatusType],
                  }}
                />
                <span className="text-[14px] text-[#17181C]">{label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4 items-stretch">
        {cards.map((card) => (
          <ProgressStatusCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
