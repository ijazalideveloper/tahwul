// Mock data for the Audit Compliance Tracking Platform

import { ArrowRight, TrendingUp, Folder } from "lucide-react";
import type { ProgressStatusCard } from "@/components/dashboard/progress-status";

export const cards = [
  {
    value: "78.65%",
    label: "Overall Progress",
    icon: TrendingUp,
    variant: "progress" as const,
  },
  { value: 95, label: "Total Criteria", icon: Folder },
  { value: 52, label: "Completed Criteria", icon: Folder },
  { value: 386, label: "Evidence Documents", icon: Folder },
  { value: 302, label: "Evidence (Completed)", icon: Folder },
  { value: 258, label: "Uploaded To DGA", icon: Folder },
];

export const milestones: TimelineMilestone[] = [
  {
    id: 1,
    date: "Mar 17",
    title: "Kickoff Workshop",
    position: 6,
    status: "completed",
  },
  {
    id: 2,
    date: "March 18",
    title: "Data Collection",
    position: 25,
    status: "completed",
  },
  {
    id: 3,
    date: "May 8",
    title: "Initial Phase",
    position: 45,
    status: "upcoming",
  },
  {
    id: 4,
    date: "May 9–July 12",
    title: "Verification",
    position: 62,
    status: "upcoming",
  },
  {
    id: 5,
    date: "July 13",
    title: "Completion Reviews",
    position: 80,
    status: "upcoming",
  },
  {
    id: 6,
    date: "August 21",
    title: "Cycle Conclusion",
    position: 94,
    status: "upcoming",
  },
];

export const complianceScore = {
  overallScore: 65,
  categories: [
    { name: "Basic Standards 2025", score: 65, maxScore: 100 },
    { name: "Evidence Collection", score: 78, maxScore: 100 },
    { name: "Control Testing", score: 85, maxScore: 100 },
    { name: "Risk Assessment", score: 75, maxScore: 100 },
  ],
};

export const auditReadiness = {
  overallScore: 82,
  categories: [
    { name: "Documentation", score: 90, maxScore: 100 },
    { name: "Evidence Collection", score: 78, maxScore: 100 },
    { name: "Control Testing", score: 85, maxScore: 100 },
    { name: "Risk Assessment", score: 75, maxScore: 100 },
  ],
};

export const topPerformingLeader = [
  {
    id: 1,
    name: "Ahmed Al-Ali",
    perspective: "Strategy Perspective",
    score: 96,
    avatarSrc: "/avatar.jpeg",
  },
  {
    id: 2,
    name: "Sarah Al-Khaled",
    perspective: "Beneficiary Perspective",
    score: 94,
    avatarSrc: "/avatar.jpeg",
  },
  {
    id: 3,
    name: "Mohammad Al-Mansour",
    perspective: "IT Perspective",
    score: 92,
    avatarSrc: "/avatar.jpeg",
  },
];

export const recentActivities = [
  {
    id: 1,
    text: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled',
    time: "5 Mins Ago",
  },
  {
    id: 2,
    text: 'Task "Review Compliance Files" Was Assigned To Mona Hamed',
    time: "20 Mins Ago",
  },
  {
    id: 3,
    text: 'New Criterion "5.3 Digital Identity" Was Created By Admin',
    time: "1 Hour Ago",
  },
];

export const progressStatusCards: ProgressStatusCard[] = [
  {
    id: 1,
    title: "Strategy And Planning",
    percentage: 97.78,
    subCategories: [
      {
        title: "Digital Transformation",
        items: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
        ],
      },
      {
        title: "Digital Governance",
        items: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "in-progress" },
        ],
      },
      {
        title: "Enterprise Architecture",
        items: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "completed" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Organization And Culture",
    percentage: 70.83,
    subCategories: [
      {
        title: "Digital Culture And Environment",
        items: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "completed" },
        ],
      },
      {
        title: "Leadership Development",
        items: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "completed" },
        ],
      },
      {
        title: "Skills & Capacity Building",
        items: [
          { number: 1, status: "in-progress" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "in-progress" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Operations And Execution",
    percentage: 80.0,
    subCategories: [
      {
        title: "Business Processes",
        items: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "in-progress" },
          { number: 4, status: "completed" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Business Continuity",
    percentage: 90.59,
    subCategories: [
      {
        title: "Risk Management",
        items: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "completed" },
          { number: 5, status: "completed" },
        ],
      },
      {
        title: "Business Continuity",
        items: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "not-started" },
          { number: 4, status: "completed" },
          { number: 5, status: "not-started" },
          { number: 6, status: "completed" },
          { number: 7, status: "not-started" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Information Technology",
    percentage: 75.0,
    subCategories: [
      {
        title: "Support Systems",
        items: [
          { number: 1, status: "partially-uploaded" },
          { number: 2, status: "partially-uploaded" },
          { number: 3, status: "completed" },
          { number: 4, status: "partially-uploaded" },
          { number: 5, status: "partially-uploaded" },
        ],
      },
      {
        title: "IT Infrastructure",
        items: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "completed" },
          { number: 5, status: "partially-uploaded" },
          { number: 6, status: "partially-uploaded" },
          { number: 7, status: "completed" },
        ],
      },
      {
        title: "Cloud Infrastructure",
        items: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "partially-uploaded" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Comprehensive Governance",
    percentage: 64.44,
    subCategories: [
      {
        title: "Governance Platforms",
        items: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "not-started" },
          { number: 5, status: "completed" },
          { number: 6, status: "completed" },
          { number: 7, status: "completed" },
          { number: 8, status: "completed" },
          { number: 9, status: "completed" },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Channels And Services",
    percentage: 100.0,
    subCategories: [
      {
        title: "Service Quality",
        items: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
        ],
      },
      {
        title: "Digital Channels",
        items: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "completed" },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Beneficiary Centralization",
    percentage: 60.0,
    subCategories: [
      {
        title: "User Engagement",
        items: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "in-progress" },
          { number: 4, status: "in-progress" },
        ],
      },
      {
        title: "User Relationship",
        items: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "in-progress" },
        ],
      },
      {
        title: "User Experience",
        items: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "in-progress" },
          { number: 4, status: "in-progress" },
          { number: 5, status: "in-progress" },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Government Data",
    percentage: 87.5,
    subCategories: [
      {
        title: "Data Governance",
        items: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "in-progress" },
        ],
      },
      {
        title: "Data Usage & Availability",
        items: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "in-progress" },
        ],
      },
      {
        title: "Open Data",
        items: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "in-progress" },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Research And Innovation",
    percentage: 17.65,
    subCategories: [
      {
        title: "Innovation",
        items: [
          { number: 1, status: "delayed" },
          { number: 2, status: "delayed" },
          { number: 3, status: "delayed" },
          { number: 4, status: "delayed" },
        ],
      },
      {
        title: "Creative Solutions",
        items: [
          { number: 1, status: "in-progress" },
          { number: 2, status: "in-progress" },
        ],
      },
    ],
  },
];

import type { TabConfig } from "@/components/common/TabbedDetailPanel";
import { Leader } from "@/components/perspective/LeadersSection";

export const perspectiveTabs: TabConfig[] = [
  {
    id: "overview",
    label: "Overview",
    items: [
      {
        id: "objective",
        label: "Objective",
        content: (
          <>
            <div className="space-y-3 leading-7 rounded-2xl bg-gray-50 p-6 text-gray-900">
              <p>
                Develop a digital transformation strategy aligned with the
                organization's strategy and the objectives of Saudi Vision 2030.
              </p>
            </div>
            <div className="space-y-3 leading-7 rounded-2xl bg-gray-50 p-6 text-gray-900 mt-[16]">
              <p>
                Prepare A Digital Transformation Strategy For The Transition To
                Electronic Government Transactions, Including The Following:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  The Organization's Vision, Mission, Strategic Pillars, And
                  Strategic Objectives, And Their Alignment With The
                  Organization&apos;s Overall Strategy.
                </li>
                <li>
                  Strategic Initiatives, Programs, And Performance Indicators.
                </li>
                <li>
                  A Clear Methodology For Integration And Coordination With
                  Relevant External Entities To Achieve The Strategy's
                  Objectives.
                </li>
                <li>
                  Required Competencies, Capabilities, And Skills Necessary To
                  Achieve The Strategy's Objectives.
                </li>
              </ol>
            </div>
          </>
        ),
      },
      {
        id: "implementation",
        label: "Implementation Requirements",
        content: (
          <div className="space-y-3 leading-7 rounded-2xl bg-gray-50 p-6 text-gray-900">
            <p>
              Prepare A Digital Transformation Strategy For The Transition To
              Electronic Government Transactions, Including The Following:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                The Organization's Vision, Mission, Strategic Pillars, And
                Strategic Objectives, And Their Alignment With The
                Organization&apos;s Overall Strategy.
              </li>
            </ol>
          </div>
        ),
      },
      {
        id: "evidence_docs",
        label: "Evidence Documents",
        content: (
          <p className="rounded-2xl bg-gray-50 p-6 text-gray-900">
            Submit The Approved Digital Transformation Strategy That Includes
            All The Requirements Of This Standard, Provided That It Has Been
            Approved Within A Period Not Exceeding 36 Months.
          </p>
        ),
      },
      {
        id: "related",
        label: "Related Regulations",
        content: (
          <div className="space-y-3 leading-7 rounded-2xl bg-gray-50 p-6 text-gray-900">
            <p>
              Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause
              (16).
            </p>
          </div>
        ),
      },
      {
        id: "scope",
        label: "Scope",
        content: (
          <p className="space-y-3 leading-7 rounded-2xl bg-gray-50 p-6 text-gray-900">
            All Government Entities.
          </p>
        ),
      },
    ],
  },
  {
    id: "evidence",
    label: "Evidence",
    items: [
      {
        id: "documents",
        label: "Documents",
        content: (
          <div className="space-y-2 rounded-2xl bg-gray-50 p-6 text-gray-900">
            <p className="font-medium">Upload / Attach Evidence</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Approved Digital Transformation Strategy PDF</li>
              <li>Approval letter / decision</li>
              <li>Supporting KPI sheet</li>
            </ul>
          </div>
        ),
      },
      {
        id: "notes",
        label: "Notes",
        content: (
          <p className="text-gray-800 rounded-2xl bg-gray-50 p-6 text-gray-900">
            Add internal notes, clarifications, or review comments here.
          </p>
        ),
      },
    ],
  },
];

export const leaders: Leader[] = [
  {
    id: "1",
    name: "Ahmed Al-Ali",
    role: "Strategy Perspective",
    avatarUrl: "/avatar.jpg", // put in /public/images/
  },
  {
    id: "2",
    name: "Ahmed Al-Ali",
    role: "Strategy Perspective",
    avatarUrl: "/avatar.jpg",
  },
];

export const perspectivePageCards = [
  {
    value: "4",
    label: "Total Evidence",
    icon: TrendingUp,
    variant: "progress" as const,
  },
  { value: 3, label: "Under Review Evidence", icon: Folder },
  { value: 2, label: "In Progress Evidence", icon: Folder },
  { value: 1, label: "Completed Evidence", icon: Folder },
];
