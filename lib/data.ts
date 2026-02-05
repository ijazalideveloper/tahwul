// Mock data for the Audit Compliance Tracking Platform

import { ArrowRight, TrendingUp, Folder } from "lucide-react";

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
