'use client'

import * as React from 'react'
import StatCard from './stats-cards'

import type { StatItem } from './stats-cards'

export type { StatItem }

export default function StatCardsRow({ items }: { items: StatItem[] }) {
  return (
    <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))]">
      {items.map((item, idx) => (
        <StatCard
          key={`${item.label}-${idx}`}
          value={item.value}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </div>
  )
}
