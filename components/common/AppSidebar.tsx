"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Activity,
  LayoutGrid,
  FileText,
  BarChart3,
  Users,
  ChevronLeft,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    title: "Perspectives",
    href: "/perspectives",
    icon: Activity,
  },
  {
    title: "Tracking",
    href: "/tracking-screen",
    icon: LayoutGrid,
  },
  {
    title: "Documents",
    href: "/details",
    icon: FileText,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: BarChart3,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
  },
];

export default function AppSidebar() {
  const pathname = usePathname();
  const { toggleSidebar, state } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className="border-r-0 w-[256px]"
      style={{ backgroundColor: "#1D3557" }}
    >
      <SidebarHeader className="flex-col gap-2 p-2 h-[55px] flex px-[23px]">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Digital Invest"
            width={100}
            height={40}
            className="object-contain"
            priority
          />
        </Link>
        {/* Left side - Collapse button */}
        <div className="flex items-center gap-4 absolute right-[-16px] top-[13px] z-50">
          <button
            onClick={toggleSidebar}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm border border-[#E0E8ED] hover:bg-[#F5F8FA] transition-colors cursor-pointer"
          >
            <Image
              src="/sidePanel.svg"
              alt="Toggle"
              width={14}
              height={14}
              className={`object-contain transition-transform ${state === "collapsed" ? "rotate-180" : ""}`}
              priority
            />
          </button>
        </div>
      </SidebarHeader>

      <SidebarContent className={`${state === "expanded" ? "px-[23px]" : "px-[8px]"} py-4`}>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {navigationItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={`h-10 rounded-lg px-4 transition-all ${
                        isActive
                          ? "bg-[rgba(152,174,192,0.1)] text-white"
                          : "text-[#7B9FC3] hover:bg-[rgba(152,174,192,0.1)] hover:text-white"
                      }`}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-3"
                      >
                        <item.icon
                          className={`h-[14px] w-[14px] ${isActive ? "text-white" : "text-[#7B9FC3]"}`}
                          strokeWidth={1.5}
                        />
                        <span className="font-normal text-sm">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
