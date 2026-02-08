'use client'

import UnifiedListCard, { LeaderItem } from "./unified-list-card"

export type TopLeaderItem = LeaderItem

type TopPerformingLeadersCardProps = {
  title?: string
  items: TopLeaderItem[]
  className?: string
}

export default function TopPerformingLeadersCard(props: TopPerformingLeadersCardProps) {
  return <UnifiedListCard variant="leaders" {...props} />
}

