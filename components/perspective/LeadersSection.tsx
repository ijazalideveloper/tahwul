import React from "react";
import Image from "next/image";

export type Leader = {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
};

type LeaderCardProps = {
  leader: Leader;
  onClick?: (leader: Leader) => void;
};

function LeaderCard({ leader, onClick }: LeaderCardProps) {
  return (
    <button
      type="button"
      onClick={() => onClick?.(leader)}
      className={[
        "group text-left",
        "rounded-2xl bg-gray-50/80 hover:bg-gray-100 transition",
        "px-3 py-2 flex items-center gap-5",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
      ].join(" ")}
    >
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
        <Image
          src={leader.avatarUrl}
          alt={leader.name}
          fill
          className="object-cover"
          sizes="46px"
          priority={false}
        />
      </div>

      <div className="min-w-0">
        <p className="truncate text-[16px] font-normal text-slate-900">
          {leader.name}
        </p>
        <p className="truncate text-[16px] text-slate-400">{leader.role}</p>
      </div>
    </button>
  );
}

type LeadersSectionProps = {
  title?: string;
  leaders: Leader[];
  className?: string;
  onLeaderClick?: (leader: Leader) => void;
};

export default function LeadersSection({
  title = "Leaders",
  leaders,
  className = "",
  onLeaderClick,
}: LeadersSectionProps) {
  return (
    <section
      className={[
        "w-full rounded-2xl border border-gray-200 bg-white",
        "px-6 py-6",
        className,
      ].join(" ")}
    >
      <h2 className="text-[16px] font-semibold text-slate-900">{title}</h2>

      <div className="mt-5 flex flex-wrap gap-6">
        {leaders.map((leader) => (
          <LeaderCard
            key={leader.id}
            leader={leader}
            onClick={onLeaderClick}
          />
        ))}
      </div>
    </section>
  );
}
