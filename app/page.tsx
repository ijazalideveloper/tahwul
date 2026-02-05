"use client";

import { Header } from "@/components/header";
import { StatCardsRow } from "@/components/dashboard/stat-cards-row";
import { cards } from "@/lib/data";



export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F8FA]">
      <Header />

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Stats Cards Row - Evidence Stats */}
        <StatCardsRow items={cards} />
      </div>
    </div>
  );
}
