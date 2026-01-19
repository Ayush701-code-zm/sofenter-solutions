"use client";

import { useState, useMemo } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { debounce } from "@/lib/debounce";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  // Memoize debounced search function
  const debouncedSearch = useMemo(
    () =>
      debounce((searchTerm: string) => {
        // API call only happens 500ms after user stops typing
        if (process.env.NODE_ENV === "development") {
          console.log("Searching for:", searchTerm);
        }
        // In real app: fetch(`/api/search?q=${searchTerm}`);
      }, 500),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FCC010]"
        aria-label="Search input"
      />
      {debouncedQuery && (
        <p className="mt-2 text-sm text-[rgba(0,0,0,0.6)]">
          Searching for: {debouncedQuery}
        </p>
      )}
    </div>
  );
}
