"use client";

import { milestones } from "@/lib/data";
import { ChevronDown } from "lucide-react";

const YEAR = 2026;

const COMPLETED_WIDTH = 40;

type TimelineHeaderProps = {
  title: string;
  year: number;
};

function TimelineHeader({ title, year }: TimelineHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-[20px] font-semibold text-[#1D3557]">{title}</h3>
      <button className="flex items-center gap-2 h-10 px-4 rounded-[10px] border border-[#E0E8ED] bg-white text-[14px] text-[#1D3557] shadow-sm">
        <span>{year}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </div>
  );
}

export function ProjectTimeline() {
  return (
    <div className="bg-white rounded-[10px] border border-[#E0E8ED] px-6 py-4 md:py-5">
      <TimelineHeader title="Project Timeline" year={YEAR} />

      <div className="relative mt-2 mb-8">
        <div className="h-4 rounded-full bg-[#EEF3FA]" />

        <div
          className="absolute left-0 top-0 h-4 rounded-full bg-[#1EA54E]"
          style={{ width: `${COMPLETED_WIDTH}%` }}
        />

        {milestones.map((milestone) => {
          const isInGreen = milestone.position <= COMPLETED_WIDTH;
          const isCompleted = milestone.status === "completed" && isInGreen;

          const innerDotBg = isInGreen ? "#FFFFFF" : "#E31B23";
          const innerDotBorder = isInGreen ? "#1EA54E" : "#E31B23";

          return (
            <div
              key={milestone.id}
              className="absolute top-[2px]"
              style={{
                left: `${milestone.position}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div className="h-3 w-3 flex items-center justify-center">
                <span
                  className="block h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: isCompleted ? "#FFFFFF" : "#FFFFFF",
                    // boxShadow: isCompleted
                    //   ? '0 0 0 2px rgba(255,255,255,0.8)'
                    //   : '0 0 0 0 rgba(0,0,0,0)',
                    // border: `2px solid ${innerDotBorder}`,
                  }}
                >
                  {/* inner colored circle */}
                  <span
                    className="block h-full w-full rounded-full"
                    style={{
                      backgroundColor: innerDotBg,
                    }}
                  />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dates and labels under the bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {milestones.map((milestone) => (
          <div
            key={milestone.id}
            className="flex flex-col items-start text-left"
          >
            <span className="text-[14px] text-[#8FA0AE] mb-1">
              {milestone.date}
            </span>
            <span className="text-[16px] font-semibold text-[#1D3557] leading-snug">
              {milestone.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
