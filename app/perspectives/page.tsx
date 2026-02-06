"use client";

import { Header } from "@/components/header";
import SectionHeader from "@/components/common/sectionHeader";
import ServiceProgressCard from "@/components/perspective/ServiceProgressCard";
import TabbedDetailPanel from "@/components/common/TabbedDetailPanel";
import { perspectiveTabs } from "@/lib/data";

export default function PerspectivesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F8FA]">
      <Header />

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        <SectionHeader
          title="Digital Transformation Strategic Planning"
          backHref="/services"
        />
        <ServiceProgressCard
          badge="Strategy & Planning"
          title="Digital Transformation Strategic Planning"
          subtitle="Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals"
          progress={100}
        />

        <TabbedDetailPanel tabs={perspectiveTabs} />
      </div>
    </div>
  );
}
