// components/DocumentsTable.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { useTableSort, type SortDir } from "@/hooks/use-table-sort";

export type SortKey =
  | "documentNumber"
  | "documentName"
  | "documentLead"
  | "documentPreparer"
  | "date"
  | "dueDate"
  | "status";

export type DocumentRow = {
  id: string | number;
  documentNumber: string;
  documentName: string;
  documentLead: string;
  documentPreparer: string;
  date: string; // YYYY-MM-DD
  dueDate: string; // YYYY-MM-DD
  status: "Approved" | "Pending Review" | "Rejected" | "In Progress" | string;
};

type Props = {
  rows: DocumentRow[];
  className?: string;
  initialSort?: { key: SortKey; dir: SortDir };
  onRowClick?: (row: DocumentRow) => void;
};

function StatusPill({ status }: { status: string }) {
  const s = status.toLowerCase();

  // Match your screenshot colors
  const isApproved = s.includes("approved");
  const isPending = s.includes("pending");

  const cls = isApproved
    ? "bg-green-50 text-green-600"
    : isPending
      ? "bg-yellow-50 text-yellow-600"
      : "bg-gray-100 text-gray-700";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[14px] font-normal ${cls}`}
    >
      {status}
    </span>
  );
}

function SortIcon({ active, dir }: { active: boolean; dir: SortDir }) {
  return (
    <Image
      src="/sorting-icon.svg"
      alt="Sort"
      width={16}
      height={16}
      className={`ml-2 ${active ? "opacity-100" : "opacity-50"}`}
    />
  );
}

type Col = { key: SortKey; label: string; className?: string };

const columns: Col[] = [
  { key: "documentNumber", label: "Document Number", className: "w-[160px]" },
  { key: "documentName", label: "Document Name", className: "min-w-[360px]" },
  { key: "documentLead", label: "Document Lead", className: "w-[220px]" },
  {
    key: "documentPreparer",
    label: "Document Preparer",
    className: "w-[240px]",
  },
  { key: "date", label: "Date", className: "w-[160px]" },
  { key: "dueDate", label: "Due Date", className: "w-[170px]" },
  { key: "status", label: "Status", className: "w-[180px] text-right" },
];

const dateKeys: SortKey[] = ["date", "dueDate"];

export default function DocumentsTable({
  rows,
  className = "",
  initialSort = { key: "documentName", dir: "asc" },
  onRowClick,
}: Props) {
  const { sortedRows, sortKey, sortDir, toggleSort } = useTableSort<
    DocumentRow,
    SortKey
  >({
    rows,
    initialSort,
    dateKeys,
  });

  return (
    <section className={["", className].join(" ")}>
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr>
              <th colSpan={columns.length} className="p-0">
                {/* Rounded header background bar */}
                <div className="rounded-[10px] bg-[#F6FAFD] px-4 py-3">
                  <div className="grid grid-cols-12 items-center">
                    {columns.map((col) => {
                      const active = col.key === sortKey;
                      return (
                        <button
                          key={col.key}
                          type="button"
                          onClick={() => toggleSort(col.key)}
                          className={[
                            "col-span-12 lg:col-span-1",
                            "flex items-center",
                            "px-3",
                            "text-left text-[12px] font-normal text-[#1D3557]",
                            "hover:opacity-90 transition",
                            col.key === "status" ? "justify-end" : "",
                          ].join(" ")}
                          style={
                            col.key === "documentNumber"
                              ? { gridColumn: "span 2 / span 2" }
                              : col.key === "documentName"
                                ? { gridColumn: "span 2 / span 2" }
                                : col.key === "documentLead"
                                  ? { gridColumn: "span 2 / span 2" }
                                  : col.key === "documentPreparer"
                                    ? { gridColumn: "span 2 / span 2" }
                                    : col.key === "date"
                                      ? { gridColumn: "span 1 / span 1" }
                                      : col.key === "dueDate"
                                        ? { gridColumn: "span 1 / span 1" }
                                        : { gridColumn: "span 2 / span 2" }
                          }
                        >
                          <span className="whitespace-nowrap">{col.label}</span>
                          <SortIcon active={active} dir={sortDir} />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {sortedRows.map((row, idx) => {
              const clickable = typeof onRowClick === "function";
              return (
                <tr key={row.id}>
                  <td colSpan={columns.length} className="p-0">
                    <div
                      className={[
                        "px-3 py-5",
                        "grid grid-cols-12 items-center",
                        clickable ? "cursor-pointer hover:bg-[#F6FAFD]" : "",
                      ].join(" ")}
                      onClick={() => onRowClick?.(row)}
                      role={clickable ? "button" : undefined}
                      tabIndex={clickable ? 0 : undefined}
                      onKeyDown={(e) => {
                        if (!clickable) return;
                        if (e.key === "Enter" || e.key === " ")
                          onRowClick?.(row);
                      }}
                    >
                      <div className="col-span-2 px-3 text-[14px] text-[#1D3557] whitespace-nowrap">
                        {row.documentNumber}
                      </div>

                      <div className="col-span-2 px-3 text-[14px] text-[#1D3557] truncate">
                        {row.documentName}
                      </div>

                      <div className="col-span-2 px-3 text-[14px] text-[#1D3557] truncate">
                        {row.documentLead}
                      </div>

                      <div className="col-span-2 px-3 text-[14px] text-[#1D3557] truncate">
                        {row.documentPreparer}
                      </div>

                      <div className="col-span-1 px-3 text-[14px] text-[#1D3557] whitespace-nowrap">
                        {row.date}
                      </div>

                      <div className="col-span-1 px-3 text-[14px] text-[#1D3557] whitespace-nowrap">
                        {row.dueDate}
                      </div>

                      <div className="col-span-2 px-3 flex justify-end">
                        <StatusPill status={row.status} />
                      </div>
                    </div>

                    {/* row divider (except last) */}
                    {idx !== sortedRows.length - 1 ? (
                      <div className="mx-0 h-px bg-[#E0E8ED]" />
                    ) : null}
                  </td>
                </tr>
              );
            })}

            {sortedRows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="p-0">
                  <div className="px-6 py-10 text-[#8FA0AE]">
                    No documents found.
                  </div>
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </section>
  );
}
