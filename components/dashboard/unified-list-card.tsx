'use client'

import * as React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ListCard from './list-card'

export type LeaderItem = {
  id: string | number
  name: string
  perspective: string
  score: number
  avatarSrc?: string
}

export type ActivityItem = {
  id: string | number
  text: string
  time: string
}

type UnifiedListCardProps =
  | {
      variant: 'leaders'
      title?: string
      items: LeaderItem[]
      className?: string
      headerDivider?: boolean
      avatarSize?: string
      nameTextSize?: string
      nameFontWeight?: string
      perspectiveTextSize?: string
      scoreTextSize?: string
      itemPadding?: string
      contentMarginTop?: string
    }
  | {
      variant: 'activities'
      title?: string
      items: ActivityItem[]
      className?: string
      headerDivider?: boolean
      dotColor?: string
      dotSize?: string
      textSize?: string
      textFontWeight?: string
      timeTextSize?: string
      itemPadding?: string
      contentMarginTop?: string
    }

function initials(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2)
  return parts.map((p) => p[0]?.toUpperCase()).join('')
}

export default function UnifiedListCard(props: UnifiedListCardProps) {
  if (props.variant === 'leaders') {
    const {
      title = 'Top Performing Perspective Leaders',
      items,
      className,
      headerDivider = false,
      avatarSize = 'h-[47px] w-[47px]',
      nameTextSize = 'text-[16px]',
      nameFontWeight = 'font-medium',
      perspectiveTextSize = 'text-[16px]',
      scoreTextSize = 'text-[16px]',
      itemPadding = 'py-4',
      contentMarginTop = 'mt-2',
    } = props

    return (
      <ListCard title={title} className={className} headerDivider={headerDivider}>
        <div className={contentMarginTop}>
          {items.map((item, idx) => (
            <div key={item.id}>
              <div className={`flex items-center gap-5 ${idx === items.length - 1 ? 'pt-4' : itemPadding}`}>
                <Avatar className={avatarSize}>
                  {item.avatarSrc ? <AvatarImage src={item.avatarSrc} /> : null}
                  <AvatarFallback className="text-[#1D3557] font-semibold">
                    {initials(item.name)}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0 flex-1">
                  <div
                    className={`${nameTextSize} ${nameFontWeight} text-[#1D3557] leading-snug truncate`}
                  >
                    {item.name}
                  </div>
                  <div
                    className={`${perspectiveTextSize} text-[#8FA0AE] leading-snug truncate`}
                  >
                    {item.perspective}
                  </div>
                </div>

                <div className={`${scoreTextSize} font-semibold text-[#1D3557]`}>
                  {item.score}%
                </div>
              </div>

              {idx !== items.length - 1 ? (
                <div className="h-px bg-[#E0E8ED]" />
              ) : null}
            </div>
          ))}
        </div>
      </ListCard>
    )
  }

  // Activities variant
  const {
    title = 'Recent Activities',
    items,
    className,
    headerDivider = true,
    dotColor = '#E31B23',
    dotSize = 'h-2 w-2',
    textSize = 'text-[16px]',
    textFontWeight = 'font-normal',
    timeTextSize = 'text-[12px]',
    itemPadding = 'py-4',
    contentMarginTop = 'mt-1',
  } = props

  return (
    <ListCard title={title} className={className} headerDivider={headerDivider}>
      <div className={contentMarginTop}>
        {items.map((item, idx) => (
          <div key={item.id}>
            <div className={`flex items-start gap-5 ${idx === items.length - 1 ? 'pt-4' : itemPadding}`}>
              <span
                className={`mt-2 ${dotSize} rounded-full`}
                style={{ backgroundColor: dotColor }}
              />

              <div className="min-w-0 flex-1">
                <div
                  className={`${textSize} ${textFontWeight} text-[#1D3557] leading-snug`}
                >
                  {item.text}
                </div>
              </div>

              <div
                className={`shrink-0 ${timeTextSize} text-[#8FA0AE] whitespace-nowrap`}
              >
                {item.time}
              </div>
            </div>

            {idx !== items.length - 1 ? (
              <div className="h-px bg-[#E0E8ED]" />
            ) : null}
          </div>
        ))}
      </div>
    </ListCard>
  )
}
