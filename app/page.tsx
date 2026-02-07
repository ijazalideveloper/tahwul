"use client";

import { Header } from "@/components/common/header";
import { ProjectTimeline } from "@/components/dashboard/project-timeline";
import { StatCardsRow } from "@/components/dashboard/stat-cards-row";
import {
  cards,
  complianceScore,
  recentActivities,
  topPerformingLeader,
  progressStatusCards,
  auditReadiness,
} from "@/lib/data";
import { GaugeCard } from "@/components/dashboard/gauge-card";
import { UnifiedListCard } from "@/components/dashboard/unified-list-card";
import { ProgressStatus } from "@/components/dashboard/progress-status";
import { PerformanceChart } from "@/components/dashboard/performance-chart";

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

        {/* Progress Status */}
        <ProgressStatus cards={progressStatusCards} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Compliance Score Gauge */}
          <GaugeCard
            title="Overall Compliance Score"
            value={complianceScore.overallScore}
            subtitle="Readiness Level"
            color="#DB1F26"
            className="mt-10"
          />
          {/* Top Performing Perspective Leaders */}
          <UnifiedListCard
            variant="leaders"
            title="Top Performing Perspective Leaders"
            items={topPerformingLeader}
          />

          {/* Recent Activities */}
          <UnifiedListCard
            variant="activities"
            title="Recent Activities"
            items={recentActivities}
            dotColor="#E31B23"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[66%_32%] items-start">
          {/* 12-Month Performance Chart */}
          <PerformanceChart />

          {/* Compliance Score Gauge */}
          <GaugeCard
            title="Audit Readiness"
            value={auditReadiness.overallScore}
            subtitle="Readiness Level"
            color="#1EA54E"
            stats={auditReadiness.categories.map((cat) => ({
              label: cat.name,
              value: `${cat.score}`,
            }))}
          />
        </div>
      </div>
    </div>
  );
}
