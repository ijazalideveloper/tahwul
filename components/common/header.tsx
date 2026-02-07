'use client'

import { Search, Bell, ChevronDown, ChevronLeft } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { useSidebar } from '@/components/ui/sidebar'

export function Header() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="sticky top-0 z-1 flex h-[60px] items-center justify-between border-b border-[#E0E8ED] bg-white px-6">

      {/* Center - Search */}
      <div className="flex-1 max-w-[317px] mx-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8597A8]" />
          <Input
            placeholder="Search..."
            className="h-[33px] bg-[#F5F8FA] border-[#E0E8ED] pl-9 text-sm rounded-lg placeholder:text-[#8597A8] focus:ring-1 focus:ring-[#1D3557]"
          />
        </div>
      </div>

      {/* Right side - Notification & Profile */}
      <div className="flex items-center gap-4">
        <button className="relative hover:opacity-80 transition-opacity">
          <Bell className="h-5 w-5 text-[#8597A8]" />
          <span className="absolute -top-1 -right-1 h-[7px] w-[7px] rounded-full bg-[#DB1F26]" />
        </button>
        <div className="flex items-center gap-2 bg-[#F9FAFA] rounded-full px-3 py-1.5 cursor-pointer hover:bg-[#F5F8FA] transition-colors">
          <Avatar className="h-6 w-6">
            <AvatarImage src="/avatar.png" />
            <AvatarFallback className="bg-[#D9D9D9] text-xs text-[#17181C]">
              MO
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-[#17181C]">Mohammad</span>
          <ChevronDown className="h-4 w-4 text-[#17181C]" />
        </div>
      </div>
    </header>
  )
}
