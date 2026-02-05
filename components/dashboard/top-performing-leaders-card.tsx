'use client'

import { UnifiedListCard, type LeaderItem } from '@/components/dashboard/unified-list-card'

export type TopLeaderItem = LeaderItem

type TopPerformingLeadersCardProps = {
  title?: string
  items: TopLeaderItem[]
  className?: string
}

export function TopPerformingLeadersCard(props: TopPerformingLeadersCardProps) {
  return <UnifiedListCard variant="leaders" {...props} />
}

