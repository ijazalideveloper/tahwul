"use client";

import SectionHeader from "@/components/common/SectionHeader";
import ServiceProgressCard from "@/components/perspective/ServiceProgressCard";
import TabbedDetailPanel from "@/components/common/TabbedDetailPanel";
import { leaders, perspectivePageCards, perspectiveTabs } from "@/lib/data";
import LeadersSection from "@/components/perspective/LeadersSection";
import Header from "@/components/common/Header";
import StatCard from "@/components/dashboard/stats-cards";

export default function PerspectivesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F8FA]">
      <Header />

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        <SectionHeader
          title="Digital Transformation Strategic Planning"
          backHref="/"
        />
        <ServiceProgressCard
          badge="Strategy & Planning"
          title="Digital Transformation Strategic Planning"
          subtitle="Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals"
          progress={100}
        />

        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(176px,1fr))]">
          {perspectivePageCards.map((item, idx) => (
            <StatCard
              key={`${item.label}-${idx}`}
              value={item.value}
              label={item.label}
              icon={item.icon}
              variant="leftIcon"
            />
          ))}
        </div>

        <TabbedDetailPanel tabs={perspectiveTabs} />

        <LeadersSection leaders={leaders} />
      </div>
    </div>
  );
}
