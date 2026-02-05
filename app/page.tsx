"use client";

import { Header } from "@/components/header";
import { ProjectTimeline } from "@/components/dashboard/project-timeline";
import { StatCardsRow } from "@/components/dashboard/stat-cards-row";
import { cards, complianceScore } from "@/lib/data";
import { GaugeCard } from "@/components/dashboard/gauge-card";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F8FA]">
      <Header />

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Stats Cards Row - Evidence Stats */}
        <StatCardsRow items={cards} />

        {/* Project Timeline */}
        <ProjectTimeline />

        {/* Compliance Score Gauge */}
        <GaugeCard
          title="Overall Compliance Score"
          value={complianceScore.overallScore}
          subtitle="Readiness Level"
          color="#DB1F26"
        />
      </div>
    </div>
  );
}
