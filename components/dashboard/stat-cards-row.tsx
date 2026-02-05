'use client'

import * as React from 'react'
import { StatCard } from './stats-cards'

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>

export type StatItem = {
  value: string | number
  label: string
  icon?: IconType
}

export function StatCardsRow({ items }: { items: StatItem[] }) {
  return (
    <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(176px,1fr))]">
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
