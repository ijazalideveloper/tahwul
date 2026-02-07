"use client";

import { Header } from "@/components/header";
import SectionHeader from "@/components/common/sectionHeader";
import ServiceProgressCard from "@/components/perspective/ServiceProgressCard";
import TabbedDetailPanel from "@/components/common/TabbedDetailPanel";
import {
  leaders,
  perspectivePageCards,
  perspectiveTabs,
  recentActivities,
} from "@/lib/data";
import LeadersSection from "@/components/perspective/LeadersSection";
import { StatCard } from "@/components/dashboard/stats-cards";
import { TrendingUp } from "lucide-react";
import { UnifiedListCard } from "@/components/dashboard/unified-list-card";
import CommentsPanel, {
  CommentItem,
} from "@/components/tracking-screen/CommentsPanel";
import DocumentsTable, { DocumentRow } from "@/components/tracking-screen/DocumentsTable";
import React from "react";

export default function TrackingPage() {
  const [text, setText] = React.useState("");

  const [comments, setComments] = React.useState<CommentItem[]>([
    {
      id: "1",
      author: "Sara Ibrahim",
      date: "2025-08-05",
      message: "Ensure The Plan Includes A Clear Governance Model.",
      avatarText: "E",
    },
    {
      id: "2",
      author: "Mona Hamed",
      date: "2025-08-05",
      message: "Ensure The Plan Includes A Clear Governance Model.",
      avatarText: "M",
    },
  ]);

  const documents: DocumentRow[] = [
    {
      id: 1,
      documentNumber: "DOC-001",
      documentName: "Digital Transformation Strategy",
      documentLead: "Ahmed Al-Ali",
      documentPreparer: "Sara Ibrahim",
      date: "2025-01-15",
      dueDate: "2025-03-15",
      status: "Approved",
    },
    {
      id: 2,
      documentNumber: "DOC-002",
      documentName: "Governance Model Document",
      documentLead: "Mona Hamed",
      documentPreparer: "Ahmed Khaled",
      date: "2025-02-01",
      dueDate: "2025-04-01",
      status: "Pending Review",
    },
  ];

  const handlePost = () => {
    if (!text.trim()) return;

    setComments((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        author: "You",
        date: new Date().toISOString().slice(0, 10),
        message: text.trim(),
      },
    ]);
    setText("");
  };
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

        <TabbedDetailPanel tabs={[
          perspectiveTabs[0],
          {
            id: "evidence",
            label: "Evidence",
            content: <DocumentsTable rows={documents} />,
          },
        ]} />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[7fr_3fr] items-start">
          <CommentsPanel
            items={comments}
            value={text}
            onChange={setText}
            onPost={handlePost}
            placeholder=""
          />
          {/* Recent Activities */}
          <UnifiedListCard
            variant="activities"
            title="Recent Activities"
            items={recentActivities}
            dotColor="#E31B23"
          />
        </div>
      </div>
    </div>
  );
}
