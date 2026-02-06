"use client";

import React from "react";

type Item = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export type TabConfig = {
  id: string;
  label: string;
  items: Item[];
};

type Props = {
  tabs: TabConfig[];
  defaultTabId?: string;
  defaultItemId?: string;
  className?: string;
};

export default function TabbedDetailPanel({
  tabs,
  defaultTabId,
  defaultItemId,
  className = "",
}: Props) {
  const firstTab = tabs[0];
  const initialTabId = defaultTabId ?? firstTab?.id;

  const [activeTabId, setActiveTabId] = React.useState<string>(initialTabId);

  const activeTab = React.useMemo(
    () => tabs.find((t) => t.id === activeTabId) ?? firstTab,
    [tabs, activeTabId, firstTab]
  );

  const initialItemId =
    defaultItemId ?? (activeTab?.items?.[0]?.id ?? "");

  const [activeItemId, setActiveItemId] = React.useState<string>(initialItemId);

  React.useEffect(() => {
    const nextItemId = activeTab?.items?.[0]?.id ?? "";
    setActiveItemId(nextItemId);
  }, [activeTabId]);

  const activeItem = React.useMemo(
    () => activeTab?.items.find((i) => i.id === activeItemId) ?? activeTab?.items?.[0],
    [activeTab, activeItemId]
  );

  return (
    <div className={["w-full", className].join(" ")}>
      {/* Top Tabs */}
      <div className="mb-5 inline-flex rounded-xl bg-[#E0E8ED80] p-1">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={[
                "rounded-lg px-6 py-2 text-sm font-medium transition",
                isActive
                  ? "bg-white shadow-sm"
                  : "text-gray-500 hover:text-gray-800",
              ].join(" ")}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Main Container */}
      <div className="rounded-2xl border border-gray-200 bg-white">
        <div className="grid grid-cols-12">
          {/* Left Menu */}
          <aside className="col-span-12 md:col-span-3 border-b md:border-b-0 md:border-r border-gray-200 p-5">
            <div className="space-y-3">
              {activeTab?.items.map((item) => {
                const isActive = item.id === activeItemId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveItemId(item.id)}
                    className={[
                      "w-full text-left rounded-xl px-5 py-4 transition",
                      "bg-gray-50 hover:bg-gray-100",
                      isActive
                        ? "ring-1 ring-gray-200 bg-gray-100 text-gray-900"
                        : "text-gray-700",
                    ].join(" ")}
                  >
                    <span className="block text-base font-medium leading-tight">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Right Content */}
          <main className="col-span-12 md:col-span-9 p-5">
            <div className="">
              {activeItem?.content}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
