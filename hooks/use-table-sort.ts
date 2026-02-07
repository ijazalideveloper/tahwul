"use client";

import { useMemo, useState, useCallback } from "react";

export type SortDir = "asc" | "desc";

function parseDateValue(v: string): number {
  const t = Date.parse(v);
  return Number.isNaN(t) ? 0 : t;
}

function compare(a: unknown, b: unknown): number {
  const av = a ?? "";
  const bv = b ?? "";
  if (typeof av === "number" && typeof bv === "number") return av - bv;
  return String(av).localeCompare(String(bv), undefined, {
    numeric: true,
    sensitivity: "base",
  });
}

export type UseTableSortConfig<T, K extends keyof T> = {
  rows: T[];
  initialSort?: { key: K; dir: SortDir };
  dateKeys?: readonly K[];
  getSortValue?: (row: T, key: K) => unknown;
};

/**
 * Generic hook for client-side table sorting.
 * Returns sorted rows and sort state + toggle handler.
 */
export function useTableSort<T, K extends keyof T>({
  rows,
  initialSort,
  dateKeys = [],
  getSortValue = (row, key) => row[key],
}: UseTableSortConfig<T, K>) {
  const [sortKey, setSortKey] = useState<K>(
    initialSort?.key ?? (Object.keys(rows[0] ?? {})[0] as K)
  );
  const [sortDir, setSortDir] = useState<SortDir>(initialSort?.dir ?? "asc");

  const sortedRows = useMemo(() => {
    const copy = [...rows];
    const isDateKey = (k: K) => (dateKeys as readonly K[]).includes(k);

    copy.sort((ra, rb) => {
      let av: unknown = getSortValue(ra, sortKey);
      let bv: unknown = getSortValue(rb, sortKey);

      if (isDateKey(sortKey)) {
        av = parseDateValue(String(av));
        bv = parseDateValue(String(bv));
      }

      const c = compare(av, bv);
      return sortDir === "asc" ? c : -c;
    });

    return copy;
  }, [rows, sortKey, sortDir, dateKeys, getSortValue]);

  const toggleSort = useCallback((key: K) => {
    setSortKey((prev) => {
      if (prev === key) {
        setSortDir((d) => (d === "asc" ? "desc" : "asc"));
        return prev;
      }
      setSortDir("asc");
      return key;
    });
  }, []);

  return { sortedRows, sortKey, sortDir, setSortKey, setSortDir, toggleSort };
}
