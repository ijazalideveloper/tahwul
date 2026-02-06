"use client";

import * as React from "react";
import { Send } from "lucide-react";

export type CommentItem = {
  id: string;
  author: string;
  date: string;
  message: string;
  avatarText?: string;
  avatarUrl?: string;
};

type CommentCardProps = {
  item: CommentItem;
};

function CommentCard({ item }: CommentCardProps) {
  const initials =
    item.avatarText ??
    item.author
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase())
      .join("");

  return (
    <div className="rounded-2xl border border-[#D9E5EC] bg-white px-6 py-5">
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-center gap-4 min-w-0">
          {/* Avatar */}
          <div className="h-8 w-8 shrink-0 rounded-full bg-[#E7EEF4] grid place-items-center text-[#6B7A88] font-semibold">
            {initials}
          </div>

          {/* Name */}
          <div className="min-w-0">
            <div className="truncate text-[14px] font-semibold text-[#1D3557]">
              {item.author}
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="shrink-0 text-[14px] text-[#8FA0AE]">{item.date}</div>
      </div>

      {/* Message */}
      <p className="mt-2 text-[14px] leading-snug text-[#1D3557]">
        {item.message}
      </p>
    </div>
  );
}

type CommentsPanelProps = {
  title?: string;
  items: CommentItem[];
  value: string;
  onChange: (val: string) => void;
  onPost: () => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

export default function CommentsPanel({
  title = "Comments",
  items,
  value,
  onChange,
  onPost,
  placeholder = "",
  disabled = false,
  className = "",
}: CommentsPanelProps) {
  return (
    <section
      className={[
        "w-full rounded-2xl border border-[#D9E5EC] bg-white",
        "px-6 py-6",
        className,
      ].join(" ")}
    >
      <h2 className="text-[16px] font-semibold text-[#1D3557]">{title}</h2>

      <div className="mt-6 space-y-6">
        {items.map((item) => (
          <CommentCard key={item.id} item={item} />
        ))}
      </div>

      {/* Input */}
      <div className="mt-6">
        <div className="rounded-2xl border border-[#D9E5EC] bg-white">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className={[
              "w-full resize-none rounded-2xl",
              "px-6 py-5 min-h-[180px]",
              "text-[20px] text-[#1D3557] placeholder:text-[#8FA0AE]",
              "focus:outline-none focus:ring-2 focus:ring-[#1D3557]/10",
              disabled ? "opacity-60 cursor-not-allowed" : "",
            ].join(" ")}
          />
          
          <div className="flex justify-end pr-4 pb-3">
            <span className="text-[#8FA0AE] text-xl select-none">✎</span>
          </div>
        </div>

        {/* Button */}
        <button
          type="button"
          onClick={onPost}
          disabled={disabled || !value.trim()}
          className={[
            "mt-5 inline-flex items-center gap-3",
            "rounded-xl bg-[#1D3557] px-4 py-2",
            "text-white text-[16px] font-normal",
            "shadow-sm transition",
            "hover:opacity-95",
          ].join(" ")}
        >
          <Send className="h-4 w-4" />
          Post Comment
        </button>
      </div>
    </section>
  );
}
