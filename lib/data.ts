// Mock data for the Audit Compliance Tracking Platform

import { ArrowRight, TrendingUp, Folder } from "lucide-react";

export const cards = [
  { value: '78.65%', label: 'Overall Progress', icon: TrendingUp, variant: 'progress' as const },
  { value: 95, label: 'Total Criteria', icon: Folder },
  { value: 52, label: 'Completed Criteria', icon: Folder },
  { value: 386, label: 'Evidence Documents', icon: Folder },
  { value: 302, label: 'Evidence (Completed)', icon: Folder },
  { value: 258, label: 'Uploaded To DGA', icon: Folder },
]


export const milestones: TimelineMilestone[] = [
  {
    id: 1,
    date: 'Mar 17',
    title: 'Kickoff Workshop',
    position: 6,
    status: 'completed',
  },
  {
    id: 2,
    date: 'March 18',
    title: 'Data Collection',
    position: 25,
    status: 'completed',
  },
  {
    id: 3,
    date: 'May 8',
    title: 'Initial Phase',
    position: 45,
    status: 'upcoming',
  },
  {
    id: 4,
    date: 'May 9–July 12',
    title: 'Verification',
    position: 62,
    status: 'upcoming',
  },
  {
    id: 5,
    date: 'July 13',
    title: 'Completion Reviews',
    position: 80,
    status: 'upcoming',
  },
  {
    id: 6,
    date: 'August 21',
    title: 'Cycle Conclusion',
    position: 94,
    status: 'upcoming',
  },
]
