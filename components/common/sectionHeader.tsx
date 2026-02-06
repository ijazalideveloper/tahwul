import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  backHref?: string;
}

export default function SectionHeader({
  title,
  backHref = "#",
}: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3">
      <Link
        href={backHref}
        className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100 transition"
        aria-label="Go back"
      >
        <ArrowLeft className="h-5 w-5 text-gray-700" />
      </Link>

      <h1 className="relative inline-block text-xl font-semibold text-gray-900">
        <span className="relative z-10">{title}</span>
      </h1>
    </div>
  );
}
