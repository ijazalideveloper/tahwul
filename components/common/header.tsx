"use client";

import { Search, Bell, ChevronDown, ChevronLeft, Settings, LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useSidebar } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

export function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-1 flex h-[60px] items-center justify-between border-b border-[#E0E8ED] bg-white px-6">
      {/* Center - Search */}
      <div className="flex-1 max-w-[317px] mx-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8597A8]" />
          <Input
            placeholder="Search..."
            className="h-[34px] bg-[#F5F8FA] border-[#E0E8ED] pl-9 text-sm rounded-lg placeholder:text-[#8597A8] focus:ring-1 focus:ring-[#1D3557]"
          />
        </div>
      </div>

      {/* Right side - Notification & Profile */}
      <div className="flex items-center gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <button className="relative hover:opacity-80 transition-opacity">
              <Image
                src="/notification.svg"
                alt="Notifications"
                width={16}
                height={16}
                className="object-contain"
                priority
              />
              <span className="absolute -top-1 -right-0 h-[7px] w-[7px] rounded-full bg-[#DB1F26]" />
            </button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-80">
            <div className="space-y-4">
              <h3 className="font-semibold text-sm text-[#1D3557]">
                Notifications
              </h3>
              <div className="space-y-3">
                <div className="flex gap-3 p-2 rounded-lg hover:bg-[#F5F8FA] cursor-pointer">
                  <div className="h-2 w-2 rounded-full bg-[#DB1F26] mt-1.5" />
                  <div className="flex-1">
                    <p className="text-sm text-[#17181C]">
                      Document "Strategy_Review.Pdf" Was Uploaded
                    </p>
                    <p className="text-xs text-[#8597A8] mt-1">5 mins ago</p>
                  </div>
                </div>
                <div className="flex gap-3 p-2 rounded-lg hover:bg-[#F5F8FA] cursor-pointer">
                  <div className="h-2 w-2 rounded-full bg-[#DB1F26] mt-1.5" />
                  <div className="flex-1">
                    <p className="text-sm text-[#17181C]">
                      Task "Review Compliance Files" Was Assigned
                    </p>
                    <p className="text-xs text-[#8597A8] mt-1">20 mins ago</p>
                  </div>
                </div>
                <div className="flex gap-3 p-2 rounded-lg hover:bg-[#F5F8FA] cursor-pointer">
                  <div className="h-2 w-2 rounded-full bg-transparent border border-[#E0E8ED] mt-1.5" />
                  <div className="flex-1">
                    <p className="text-sm text-[#8597A8]">
                      New Criterion "5.3 Digital Identity" Was Created
                    </p>
                    <p className="text-xs text-[#8597A8] mt-1">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 bg-[#F9FAFA] rounded-full px-2 py-1.5 cursor-pointer hover:bg-[#F5F8FA] transition-colors">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/avatar.jpg" />
                <AvatarFallback className="bg-[#D9D9D9] text-xs text-[#17181C]">
                  MO
                </AvatarFallback>
              </Avatar>
              <span className="text-xs font-medium text-[#17181C]">
                Mohammad
              </span>
              <ChevronDown className="h-4 w-4 text-[#17181C]" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
