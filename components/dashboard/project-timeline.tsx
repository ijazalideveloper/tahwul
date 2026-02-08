"use client";

import { milestones } from "@/lib/data";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const YEARS = [2024, 2025, 2026, 2027];

const COMPLETED_WIDTH = 33;

type TimelineHeaderProps = {
  title: string;
  year: number;
  onYearChange: (year: number) => void;
};

function TimelineHeader({ title, year, onYearChange }: TimelineHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-[16px] font-semibold text-[#1D3557] leading-tight">
        {title}
      </h3>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 h-10 px-4 rounded-[10px] border border-[#E0E8ED] bg-white text-[14px] text-[#1D3557] shadow-sm hover:bg-[#F5F8FA] transition-colors">
            <span>{year}</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {YEARS.map((y) => (
            <DropdownMenuItem key={y} onClick={() => onYearChange(y)}>
              {y}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

const MILESTONE_COUNT = 6;

export default function ProjectTimeline() {
  const [selectedYear, setSelectedYear] = useState(2026);

  return (
    <div className="bg-white rounded-[10px] border border-[#E0E8ED] px-4 py-4 md:py-5 overflow-x-auto">
      <TimelineHeader
        title="Project Timeline"
        year={selectedYear}
        onYearChange={setSelectedYear}
      />

      <div
        className="grid mt-2 mb-2 gap-4 min-w-[600px]"
        style={{
          gridTemplateColumns: `repeat(${MILESTONE_COUNT}, minmax(0, 1fr))`,
        }}
      >
        <div
          className="col-span-full relative h-4"
          style={{ gridColumn: "1 / -1" }}
        >
          <div className="absolute inset-0 rounded-full bg-[#EEF3FA]" />

          <div
            className="absolute left-0 top-0 h-4 rounded-full bg-[#1EA54E]"
            style={{ width: `${COMPLETED_WIDTH}%` }}
          />

          <div
            className="absolute inset-0 grid place-items-center pointer-events-none"
            style={{
              gridTemplateColumns: `repeat(${MILESTONE_COUNT}, minmax(0, 1fr))`,
            }}
          >
            {milestones.map((milestone) => {
              const isInGreen = milestone.position <= COMPLETED_WIDTH;
              const innerDotBg = isInGreen ? "#FFFFFF" : "#E31B23";

              return (
                <span
                  key={milestone.id}
                  className="block w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: innerDotBg }}
                />
              );
            })}
          </div>
        </div>

        {milestones.map((milestone) => (
          <div
            key={milestone.id}
            className="flex flex-col items-center text-center min-w-0"
          >
            <span className="text-[14px] text-[#8FA0AE] mb-1">
              {milestone.date}
            </span>
            <span className="text-[14px] font-normal text-[#1D3557] leading-snug">
              {milestone.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
