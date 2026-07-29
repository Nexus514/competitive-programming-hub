"use client";

import { useState, useMemo } from "react";
import { algorithmNotes, noteCategories } from "@/data/notes";
import SearchBar from "@/components/SearchBar";
import NoteCard from "@/components/NoteCard";

export default function NotesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = useMemo(() => {
    return algorithmNotes.filter((n) => {
      if (selectedCategory !== "All" && n.category !== selectedCategory)
        return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          n.title.toLowerCase().includes(q) ||
          n.category.toLowerCase().includes(q) ||
          n.topics.some((t) => t.toLowerCase().includes(q)) ||
          n.summary.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [search, selectedCategory]);

  return (
    <div className="p-8 space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-xl font-bold tracking-tight text-zinc-100">
          Algorithm Notes
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          Reference guides on essential algorithms and data structures
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1 max-w-md">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search notes..."
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-colors ${
              selectedCategory === "All"
                ? "bg-zinc-700 text-zinc-100"
                : "bg-zinc-900 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300 border border-zinc-800"
            }`}
          >
            All
          </button>
          {noteCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-zinc-700 text-zinc-100"
                  : "bg-zinc-900 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300 border border-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs text-zinc-600">
        Showing{" "}
        <span className="text-zinc-400 font-medium">{filtered.length}</span> of{" "}
        <span className="text-zinc-400 font-medium">
          {algorithmNotes.length}
        </span>{" "}
        notes
      </p>

      {/* Notes grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
            <svg
              className="h-12 w-12 text-zinc-700 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
            <p className="text-sm text-zinc-500">
              No notes match your filters
            </p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-2 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
